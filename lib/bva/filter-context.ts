const BVA_API_URL = process.env.BVA_API_URL || "http://localhost:8000";

interface FilterOption {
  value: string;
  count: number;
}

interface FilterOptionsResponse {
  judges: FilterOption[];
  general_conditions: FilterOption[];
  specific_conditions: FilterOption[];
  outcomes: FilterOption[];
  condition_outcomes: FilterOption[];
  service_branches: FilterOption[];
  service_eras: FilterOption[];
  special_benefits: FilterOption[];
  years: FilterOption[];
  mos_titles: FilterOption[];
}

let cachedContext: string | null = null;
let cachedAt = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

function topValues(options: FilterOption[], n: number): string {
  return options
    .slice(0, n)
    .map((o) => o.value)
    .join(", ");
}

export async function fetchFilterContext(): Promise<string> {
  if (cachedContext && Date.now() - cachedAt < CACHE_TTL_MS) {
    return cachedContext;
  }

  try {
    const res = await fetch(`${BVA_API_URL}/api/filters/options`, {
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      console.error(`Filter context fetch failed: ${res.status}`);
      return "";
    }

    const data: FilterOptionsResponse = await res.json();

    const lines = [
      "\n\n## AVAILABLE FILTER VALUES",
      "Use these exact values when setting filters. For specific conditions, judges, or MOS titles not listed here, call getFilterOptions.",
      "",
      `outcomes: ${topValues(data.outcomes, 10)}`,
      `years: ${topValues(data.years, 10)}`,
      `general_conditions: ${topValues(data.general_conditions, 50)}`,
      `service_branches: ${topValues(data.service_branches, 10)}`,
      `service_eras: ${topValues(data.service_eras, 10)}`,
      `top specific_conditions: ${topValues(data.specific_conditions, 30)}`,
      `top special_benefits: ${topValues(data.special_benefits, 10)}`,
    ];

    cachedContext = lines.join("\n");
    cachedAt = Date.now();
    return cachedContext;
  } catch (err) {
    console.error("Failed to fetch filter context:", err);
    return "";
  }
}
