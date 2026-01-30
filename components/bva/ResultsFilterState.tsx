"use client";

import { Lightbulb } from "lucide-react";
import { FadeIn } from "@/components/marketing/fade-in";
import { AnimatedCounter } from "@/components/marketing/animated-counter";

interface ResultsFilterStateProps {
  total: number;
  filtersApplied: Record<string, string>;
}

/** Readable labels for filter keys */
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

export function ResultsFilterState({ total, filtersApplied }: ResultsFilterStateProps) {
  // Only show non-default filters
  const activeFilters = Object.entries(filtersApplied).filter(
    ([, value]) => value !== "(All)" && value !== ""
  );

  return (
    <div className="relative flex h-full flex-col items-center overflow-y-auto bg-slate-50 px-6 py-10">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 w-full max-w-lg space-y-10">
        {/* Eyebrow with pulsing dot */}
        <FadeIn>
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2C5DFF] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2C5DFF]" />
              </span>
              <p className="text-eyebrow">Query in Progress</p>
            </div>

            {/* Matching case count */}
            <AnimatedCounter
              end={total}
              label="Matching Cases"
              duration={1}
              numberClassName="text-4xl font-bold text-[#2C5DFF]"
              labelClassName="mt-1 text-sm font-medium text-slate-500"
            />
          </div>
        </FadeIn>

        {/* Active filter pills */}
        {activeFilters.length > 0 && (
          <FadeIn delay={0.15}>
            <div>
              <p className="text-eyebrow mb-4 text-center">Active Filters</p>
              <div className="flex flex-wrap justify-center gap-2">
                {activeFilters.map(([key, value]) => (
                  <span
                    key={key}
                    className="badge-accent-blue rounded-full px-3 py-1 text-xs font-medium"
                  >
                    {FILTER_LABELS[key] ?? key}: {value}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Hint card */}
        <FadeIn delay={0.3}>
          <div className="rounded-xl border border-slate-200/60 bg-white p-5">
            <div className="flex items-start gap-3">
              <div className="icon-box-sm bg-accent-blue text-accent-blue shrink-0">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Fetching cases&hellip;
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  The assistant is retrieving matching cases. You can also ask it
                  to analyze patterns, refine filters, or search by legal reasoning.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
