"use client";

import { ResultsCaseCard } from "./ResultsCaseCard";

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

interface ResultsCaseListProps {
  cases: CaseSummary[];
  total: number;
  onCaseClick: (caseId: string) => void;
}

export function ResultsCaseList({ cases, total, onCaseClick }: ResultsCaseListProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-slate-50">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-900">
          Cases{" "}
          <span className="font-normal text-slate-500">
            ({total.toLocaleString()} total)
          </span>
        </h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {cases.map((c) => (
            <ResultsCaseCard
              key={c.case_id}
              caseData={c}
              onClick={() => onCaseClick(c.case_id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
