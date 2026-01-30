"use client";

import { Shield, Search, Gavel, TrendingUp } from "lucide-react";
import { GradientText } from "@/components/marketing/gradient-text";

const SUGGESTIONS = [
  {
    query: "PTSD cases granted in 2024",
    label: "PTSD Grants",
    description: "Explore granted PTSD claims and key evidence patterns",
    icon: Shield,
  },
  {
    query: "Sleep apnea secondary to PTSD",
    label: "Secondary Conditions",
    description: "Find decisions linking secondary service-connected conditions",
    icon: Search,
  },
  {
    query: "TDIU grant rate by judge",
    label: "Judge Analytics",
    description: "Compare grant rates and patterns across BVA judges",
    icon: Gavel,
  },
  {
    query: "Burn pit exposure cases",
    label: "Toxic Exposure",
    description: "Review PACT Act and burn pit related decisions",
    icon: TrendingUp,
  },
];

interface ResultsEmptyProps {
  onSuggestionClick: (query: string) => void;
}

export function ResultsEmpty({ onSuggestionClick }: ResultsEmptyProps) {
  return (
    <div className="flex flex-col items-center px-2 py-10">
      {/* Gradient icon box */}
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2C5DFF] to-[#0080A3] shadow-lg">
        <Search className="h-7 w-7 text-white" />
      </div>

      {/* Title */}
      <h2 className="font-display text-lg font-semibold text-slate-900">
        Welcome to{" "}
        <GradientText variant="shimmer">BVA Explorer</GradientText>
      </h2>
      <p className="mt-1.5 max-w-xs text-center text-sm text-slate-500">
        Search, filter, and analyze 19,000+ Board of Veterans&apos; Appeals decisions from 2024
      </p>

      {/* Suggestion cards */}
      <div className="mt-6 w-full space-y-2">
        {SUGGESTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.query}
              onClick={() => onSuggestionClick(s.query)}
              className="group flex w-full items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-left transition-all hover:border-blue-200 hover:bg-blue-50/50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors group-hover:bg-blue-100 group-hover:text-[#2C5DFF]">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-800 group-hover:text-[#2C5DFF]">
                  {s.label}
                </p>
                <p className="text-xs text-slate-500">{s.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
