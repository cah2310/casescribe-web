import { tool, type ToolSet } from "ai";
import { z } from "zod";

const BVA_API_URL = process.env.BVA_API_URL || "http://localhost:8000";

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BVA_API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`BVA API error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// Shared filter schema — used by multiple tools
const filterSchema = z.object({
  year: z.string().default("(All)").describe("Year filter, e.g. '2024' or '(All)'"),
  judge: z.string().default("(All)").describe("Judge canonical name or '(All)'"),
  general_condition: z.string().default("(All)").describe("General condition category (38 CFR), e.g. 'Mental Disorders' or '(All)'"),
  specific_condition: z.string().default("(All)").describe("Specific condition (38 CFR), e.g. 'PTSD' or '(All)'"),
  special_benefit: z.string().default("(All)").describe("Special benefit type: 'TDIU', 'SMC - Aid & Attendance', etc. or '(All)'"),
  outcome: z.string().default("(All)").describe("Case outcome: 'Granted', 'Denied', 'Remanded' or '(All)'"),
  toxic_exposure: z.string().default("(All)").describe("Toxic exposure filter: 'Herbicide', 'Burn Pit', 'Any Toxic Exposure', etc. or '(All)'"),
  is_secondary: z.string().default("(All)").describe("Secondary condition: 'Yes', 'No', or '(All)'"),
  va_exam: z.string().default("(All)").describe("VA exam filter: 'Has VA Exam', 'No VA Exam', 'VA Exam Favorable', 'VA Exam Unfavorable', or '(All)'"),
  nexus: z.string().default("(All)").describe("Nexus filter: 'Nexus Positive', 'Nexus Negative', or '(All)'"),
  service_branch: z.string().default("(All)").describe("Service branch: 'Army', 'Navy', 'Air Force', 'Marines', 'Coast Guard', or '(All)'"),
  service_era: z.string().default("(All)").describe("Service era or '(All)'"),
  combat_service: z.string().default("(All)").describe("Combat service: 'Yes', 'No', or '(All)'"),
  keywords: z.string().default("").describe("Keywords to search within case keywords field"),
  buddy_statement: z.string().default("(All)").describe("Buddy statement: 'Yes', 'No', or '(All)'"),
  mst_related: z.string().default("(All)").describe("MST related: 'Yes', 'No', or '(All)'"),
});

export const bvaTools = {
  getFilterOptions: tool({
    description:
      "Get all available filter values with counts. Call this to learn what conditions, judges, years, outcomes, etc. are available to filter by. Returns lists of values with how many cases match each.",
    inputSchema: z.object({}),
    execute: async () => {
      return apiFetch("/api/filters/options");
    },
  }),

  applyFilters: tool({
    description:
      "Apply filters and get the count of matching cases. Call this after every filter change so the user sees how many cases match. Returns the total count and which filters are active.",
    inputSchema: filterSchema,
    execute: async (filters) => {
      return apiFetch("/api/filters/count", {
        method: "POST",
        body: JSON.stringify(filters),
      });
    },
  }),

  fetchCases: tool({
    description:
      "Fetch a paginated list of cases matching the current filters. Returns case summaries with metadata (outcome, condition, judge, summary, etc.). Use limit/offset for paging.",
    inputSchema: filterSchema.extend({
      limit: z.number().default(25).describe("Number of cases to return (max 50)"),
      offset: z.number().default(0).describe("Offset for pagination"),
    }),
    execute: async (params) => {
      return apiFetch("/api/cases/query", {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
  }),

  getCaseDetail: tool({
    description:
      "Get full detail for a single case, including all metadata and the complete decision text reconstructed from chunks. Use this when the user wants to drill into a specific case.",
    inputSchema: z.object({
      case_id: z.string().describe("The case_id to retrieve"),
    }),
    execute: async ({ case_id }) => {
      return apiFetch(`/api/cases/${encodeURIComponent(case_id)}`);
    },
  }),

  semanticSearch: tool({
    description:
      "Perform natural language semantic search over BVA decision text. Finds passages that are conceptually similar to the query. Optionally limit to specific case IDs from a filtered set. Returns scored text chunks.",
    inputSchema: z.object({
      query: z.string().describe("Natural language search query about legal reasoning, evidence, or findings"),
      case_ids: z.array(z.string()).optional().describe("Optional list of case IDs to search within (from filtered results)"),
      top_k: z.number().default(20).describe("Number of results to return"),
      exclude_procedural: z.boolean().default(false).describe("Whether to exclude procedural/boilerplate text"),
    }),
    execute: async (params) => {
      return apiFetch("/api/search/semantic", {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
  }),

  getMetadataPack: tool({
    description:
      "Fetch a compact metadata sample for up to 50 cases matching the filters. Returns raw case metadata for you to analyze directly. Use this for statistical or pattern questions.",
    inputSchema: filterSchema,
    execute: async (filters) => {
      return apiFetch("/api/cases/metadata-pack", {
        method: "POST",
        body: JSON.stringify(filters),
      });
    },
  }),
} satisfies ToolSet;
