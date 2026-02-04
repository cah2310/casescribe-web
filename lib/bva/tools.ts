import { tool, type ToolSet } from "ai";
import { z } from "zod";

const BVA_API_URL = process.env.BVA_API_URL || "http://localhost:8000";

// Fields that can be broken down with computeBreakdown tool
const BREAKDOWN_FIELDS = {
  outcome: ["Granted", "Denied", "Remanded"],
  va_exam: ["Has VA Exam", "No VA Exam", "VA Exam Favorable", "VA Exam Unfavorable"],
  nexus: ["Nexus Positive", "Nexus Negative"],
  combat_service: ["Yes", "No"],
  buddy_statement: ["Yes", "No"],
  mst_related: ["Yes", "No"],
  is_secondary: ["Yes", "No"],
} as const;

type BreakdownField = keyof typeof BREAKDOWN_FIELDS;

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
      "Hybrid search combining keyword matching AND semantic similarity over BVA decision text. Finds passages containing specific terms AND conceptually similar content. Use this for evidence questions, legal reasoning, and finding relevant case language.",
    inputSchema: z.object({
      query: z.string().describe("Search query — can be keywords, phrases, or natural language questions"),
      case_ids: z.array(z.string()).optional().describe("Optional list of case IDs to search within (from filtered results)"),
      top_k: z.number().default(20).describe("Number of results to return"),
      alpha: z.number().default(0.5).describe("Search balance: 0=keyword only, 1=semantic only, 0.5=balanced hybrid"),
      exclude_procedural: z.boolean().default(false).describe("Whether to exclude procedural/boilerplate text"),
    }),
    execute: async (params) => {
      return apiFetch("/api/search/hybrid", {
        method: "POST",
        body: JSON.stringify(params),
      });
    },
  }),

  getMetadataPack: tool({
    description:
      "Fetch a compact metadata sample for up to 50 cases matching the filters. Returns raw case metadata for you to analyze directly. Use this ONLY for qualitative pattern questions that need multiple fields analyzed together.",
    inputSchema: filterSchema,
    execute: async (filters) => {
      return apiFetch("/api/cases/metadata-pack", {
        method: "POST",
        body: JSON.stringify(filters),
      });
    },
  }),

  computeBreakdown: tool({
    description:
      "Compute exact statistics for a filtered case set by breaking down counts across a specific field. Returns precise counts and percentages for each value (e.g., Granted: 4200 (35%), Denied: 4800 (40%), Remanded: 3000 (25%)). Use this for questions about rates, distributions, and statistics — NOT getMetadataPack.",
    inputSchema: filterSchema.extend({
      breakdown_field: z.enum(["outcome", "va_exam", "nexus", "combat_service", "buddy_statement", "mst_related", "is_secondary"])
        .describe("The field to break down by. Options: outcome (Granted/Denied/Remanded), va_exam (Has VA Exam/No VA Exam/VA Exam Favorable/VA Exam Unfavorable), nexus (Nexus Positive/Nexus Negative), combat_service/buddy_statement/mst_related/is_secondary (Yes/No)"),
    }),
    execute: async (params) => {
      const { breakdown_field, ...baseFilters } = params;
      const values = BREAKDOWN_FIELDS[breakdown_field as BreakdownField];

      // Make parallel count calls for each value
      const countPromises = values.map(async (value) => {
        const filters = { ...baseFilters, [breakdown_field]: value };
        const result = await apiFetch<{ total: number }>("/api/filters/count", {
          method: "POST",
          body: JSON.stringify(filters),
        });
        return { value, count: result.total };
      });

      const results = await Promise.all(countPromises);
      const total = results.reduce((sum, r) => sum + r.count, 0);

      // Calculate percentages
      const breakdown = results.map(({ value, count }) => ({
        value,
        count,
        pct: total > 0 ? `${((count / total) * 100).toFixed(1)}%` : "0.0%",
      }));

      return {
        breakdown_field,
        total,
        breakdown,
        filters_applied: Object.fromEntries(
          Object.entries(baseFilters).filter(([, v]) => v !== "(All)" && v !== "")
        ),
      };
    },
  }),
} satisfies ToolSet;
