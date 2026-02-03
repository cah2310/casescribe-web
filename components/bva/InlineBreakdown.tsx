"use client";

import { BarChart3 } from "lucide-react";

interface BreakdownItem {
  value: string;
  count: number;
  pct: string;
}

interface InlineBreakdownProps {
  breakdownField: string;
  total: number;
  breakdown: BreakdownItem[];
  filtersApplied: Record<string, string>;
}

const FIELD_LABELS: Record<string, string> = {
  outcome: "Outcome",
  va_exam: "VA Exam",
  nexus: "Nexus",
  combat_service: "Combat Service",
  buddy_statement: "Buddy Statement",
  mst_related: "MST Related",
  is_secondary: "Secondary Condition",
};

const VALUE_COLORS: Record<string, string> = {
  // Outcomes
  Granted: "bg-green-500",
  Denied: "bg-red-500",
  Remanded: "bg-amber-500",
  // VA Exam
  "Has VA Exam": "bg-blue-500",
  "No VA Exam": "bg-slate-400",
  "VA Exam Favorable": "bg-green-500",
  "VA Exam Unfavorable": "bg-red-500",
  // Nexus
  "Nexus Positive": "bg-green-500",
  "Nexus Negative": "bg-red-500",
  // Yes/No fields
  Yes: "bg-blue-500",
  No: "bg-slate-400",
};

export function InlineBreakdown({
  breakdownField,
  total,
  breakdown,
  filtersApplied,
}: InlineBreakdownProps) {
  const maxCount = Math.max(...breakdown.map((b) => b.count));
  const activeFilters = Object.entries(filtersApplied).filter(
    ([, value]) => value !== "(All)" && value !== ""
  );

  return (
    <div className="my-2 rounded-lg border border-slate-200/80 bg-slate-50/50 p-3">
      <div className="mb-2 flex items-center gap-2">
        <BarChart3 className="h-4 w-4 text-violet-500" />
        <span className="text-xs font-semibold text-slate-700">
          {FIELD_LABELS[breakdownField] || breakdownField} Breakdown
        </span>
        <span className="text-xs text-slate-500">
          ({total.toLocaleString()} total cases)
        </span>
      </div>

      {activeFilters.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-1">
          {activeFilters.map(([key, value]) => (
            <span
              key={key}
              className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700"
            >
              {key}: {value}
            </span>
          ))}
        </div>
      )}

      <div className="space-y-1.5">
        {breakdown.map(({ value, count, pct }) => {
          const widthPct = maxCount > 0 ? (count / maxCount) * 100 : 0;
          const barColor = VALUE_COLORS[value] || "bg-slate-400";

          return (
            <div key={value} className="flex items-center gap-2">
              <span className="w-32 shrink-0 text-xs font-medium text-slate-600">
                {value}
              </span>
              <div className="flex-1">
                <div className="h-4 overflow-hidden rounded bg-slate-200/50">
                  <div
                    className={`h-full ${barColor} transition-all duration-300`}
                    style={{ width: `${widthPct}%` }}
                  />
                </div>
              </div>
              <span className="w-16 shrink-0 text-right text-xs tabular-nums text-slate-600">
                {count.toLocaleString()}
              </span>
              <span className="w-12 shrink-0 text-right text-xs font-medium tabular-nums text-slate-700">
                {pct}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
