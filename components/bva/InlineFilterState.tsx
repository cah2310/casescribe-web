"use client";

import { Filter } from "lucide-react";

const FILTER_LABELS: Record<string, string> = {
  year: "Year",
  judge: "Judge",
  general_condition: "General Condition",
  specific_condition: "Specific Condition",
  special_benefit: "Special Benefit",
  outcome: "Outcome",
  toxic_exposure: "Toxic Exposure",
  is_secondary: "Secondary Condition",
  va_exam: "VA Exam",
  nexus: "Nexus",
  service_branch: "Service Branch",
  service_era: "Service Era",
  combat_service: "Combat Service",
  keywords: "Keywords",
  buddy_statement: "Buddy Statement",
  mst_related: "MST Related",
};

interface InlineFilterStateProps {
  total: number;
  filtersApplied: Record<string, string>;
}

export function InlineFilterState({ total, filtersApplied }: InlineFilterStateProps) {
  const activeFilters = Object.entries(filtersApplied).filter(
    ([, value]) => value !== "(All)" && value !== ""
  );

  return (
    <div className="my-2 flex items-start gap-2 rounded-lg border border-slate-200/80 bg-slate-50/50 px-3 py-2">
      <Filter className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500" />
      <div className="min-w-0 flex-1">
        <span className="text-xs font-medium text-slate-700">
          {total.toLocaleString()} matching cases
        </span>
        {activeFilters.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {activeFilters.map(([key, value]) => (
              <span
                key={key}
                className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700"
              >
                {FILTER_LABELS[key] ?? key}: {value}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
