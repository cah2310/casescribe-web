"use client";

interface CaseData {
  case_id: string;
  outcome?: string | null;
  general_condition_38?: string | null;
  specific_condition_38?: string | null;
  judge_canonical?: string | null;
  year?: number | null;
  case_summary?: string | null;
  has_va_exam?: boolean | null;
  has_buddy_statement?: boolean | null;
  nexus_positive?: boolean | null;
  condition_is_secondary?: boolean | null;
}

interface ResultsCaseCardProps {
  caseData: CaseData;
  onClick: () => void;
}

const OUTCOME_STYLES: Record<string, string> = {
  Granted: "bg-green-50 text-green-700 border-green-200",
  Denied: "bg-red-50 text-red-700 border-red-200",
  Remanded: "bg-amber-50 text-amber-700 border-amber-200",
};

export function ResultsCaseCard({ caseData, onClick }: ResultsCaseCardProps) {
  const outcomeStyle =
    OUTCOME_STYLES[caseData.outcome || ""] ||
    "bg-slate-50 text-slate-600 border-slate-200";

  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-slate-200 bg-white p-3 text-left transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-medium text-slate-900">
              {caseData.specific_condition_38 || caseData.general_condition_38 || "Unknown Condition"}
            </span>
            {caseData.condition_is_secondary && (
              <span className="shrink-0 rounded bg-violet-50 px-1.5 py-0.5 text-[10px] font-medium text-violet-600">
                Secondary
              </span>
            )}
          </div>
          <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500">
            {caseData.judge_canonical && <span>{caseData.judge_canonical}</span>}
            {caseData.year && <span>{caseData.year}</span>}
            <span className="text-slate-300">{caseData.case_id}</span>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium ${outcomeStyle}`}
        >
          {caseData.outcome || "Unknown"}
        </span>
      </div>

      {caseData.case_summary && (
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
          {caseData.case_summary}
        </p>
      )}

      {/* Evidence indicators */}
      <div className="mt-2 flex gap-1.5">
        {caseData.has_va_exam && (
          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">
            VA Exam
          </span>
        )}
        {caseData.has_buddy_statement && (
          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">
            Buddy Stmt
          </span>
        )}
        {caseData.nexus_positive && (
          <span className="rounded bg-green-50 px-1.5 py-0.5 text-[10px] text-green-600">
            Nexus+
          </span>
        )}
      </div>
    </button>
  );
}
