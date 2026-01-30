"use client";

import type { UIMessage } from "ai";
import { ResultsCaseList } from "./ResultsCaseList";
import { ResultsAnalysis } from "./ResultsAnalysis";
import { ResultsShowcase } from "./ResultsShowcase";
import { ResultsFilterState } from "./ResultsFilterState";

interface ResultsPanelProps {
  messages: UIMessage[];
  onCaseClick: (caseId: string) => void;
}

interface FilterStateData {
  total: number;
  filters_applied: Record<string, string>;
}

/**
 * Extracts the latest relevant tool output from messages to display in the results panel.
 * Pass 1: scan for high-priority results (fetchCases, analyzePatterns, analyzeCaseText).
 * Pass 2: if nothing found, scan for applyFilters to show intermediate filter state.
 */
function getLatestResult(messages: UIMessage[]) {
  // Pass 1 — high priority: cases or analysis
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg.role !== "assistant") continue;
    for (let j = msg.parts.length - 1; j >= 0; j--) {
      const part = msg.parts[j] as { type: string; state?: string; output?: unknown };
      if (part.state !== "output-available") continue;

      if (part.type === "tool-fetchCases" && part.output) {
        return { type: "cases" as const, data: part.output as { cases: CaseSummary[]; total: number } };
      }
      if (
        (part.type === "tool-analyzePatterns" || part.type === "tool-analyzeCaseText") &&
        part.output
      ) {
        return { type: "analysis" as const, data: part.output as { analysis: string; question: string } };
      }
    }
  }

  // Pass 2 — low priority: filter state (only if Pass 1 found nothing)
  for (let i = messages.length - 1; i >= 0; i--) {
    const msg = messages[i];
    if (msg.role !== "assistant") continue;
    for (let j = msg.parts.length - 1; j >= 0; j--) {
      const part = msg.parts[j] as { type: string; state?: string; output?: unknown };
      if (part.state !== "output-available") continue;

      if (part.type === "tool-applyFilters" && part.output) {
        return { type: "filterState" as const, data: part.output as FilterStateData };
      }
    }
  }

  return null;
}

interface CaseSummary {
  case_id: string;
  outcome?: string | null;
  general_condition_38?: string | null;
  specific_condition_38?: string | null;
  judge_canonical?: string | null;
  year?: number | null;
  case_summary?: string | null;
  decision_date?: string | null;
  citation_nr?: string | null;
  has_va_exam?: boolean | null;
  has_buddy_statement?: boolean | null;
  nexus_positive?: boolean | null;
  condition_is_secondary?: boolean | null;
}

export function ResultsPanel({ messages, onCaseClick }: ResultsPanelProps) {
  const latest = getLatestResult(messages);

  if (!latest) {
    return <ResultsShowcase />;
  }

  if (latest.type === "cases") {
    return (
      <ResultsCaseList
        cases={latest.data.cases}
        total={latest.data.total}
        onCaseClick={onCaseClick}
      />
    );
  }

  if (latest.type === "analysis") {
    return (
      <ResultsAnalysis
        analysis={latest.data.analysis}
        question={latest.data.question}
      />
    );
  }

  if (latest.type === "filterState") {
    return (
      <ResultsFilterState
        total={latest.data.total}
        filtersApplied={latest.data.filters_applied}
      />
    );
  }

  return null;
}
