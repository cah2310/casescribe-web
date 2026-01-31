"use client";

import { useState } from "react";
import { Pin, PinOff, ChevronDown } from "lucide-react";

interface CaseSummary {
  case_id: string;
  outcome?: string | null;
  general_condition_38?: string | null;
  specific_condition_38?: string | null;
  judge_canonical?: string | null;
  year?: number | null;
  case_summary?: string | null;
}

const OUTCOME_STYLES: Record<string, string> = {
  Granted: "bg-green-50 text-green-700 border-green-200",
  Denied: "bg-red-50 text-red-700 border-red-200",
  Remanded: "bg-amber-50 text-amber-700 border-amber-200",
};

interface InlineCaseListProps {
  cases: CaseSummary[];
  total: number;
  pinnedCaseIds: Set<string>;
  onCaseClick: (caseId: string) => void;
  onPinCase: (caseData: CaseSummary) => void;
  onUnpinCase: (caseId: string) => void;
}

export function InlineCaseList({
  cases,
  total,
  pinnedCaseIds,
  onCaseClick,
  onPinCase,
  onUnpinCase,
}: InlineCaseListProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cases : cases.slice(0, 5);
  const hasMore = cases.length > 5 && !expanded;

  return (
    <div className="my-2 rounded-lg border border-slate-200/80 bg-slate-50/50">
      <div className="border-b border-slate-200/60 px-3 py-2">
        <span className="text-xs font-medium text-slate-700">
          Cases
        </span>
        <span className="ml-1.5 text-xs text-slate-500">
          ({total.toLocaleString()} total, showing {cases.length})
        </span>
      </div>
      <div className={`divide-y divide-slate-100 ${!expanded && cases.length > 5 ? "max-h-[400px] overflow-y-auto" : ""}`}>
        {visible.map((c) => {
          const isPinned = pinnedCaseIds.has(c.case_id);
          const outcomeStyle =
            OUTCOME_STYLES[c.outcome || ""] ||
            "bg-slate-50 text-slate-600 border-slate-200";

          return (
            <div
              key={c.case_id}
              className="group flex items-start gap-2 px-3 py-2 hover:bg-white"
            >
              <button
                onClick={() => onCaseClick(c.case_id)}
                className="min-w-0 flex-1 text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="truncate text-xs font-medium text-slate-900">
                    {c.specific_condition_38 || c.general_condition_38 || "Unknown"}
                  </span>
                  <span
                    className={`shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${outcomeStyle}`}
                  >
                    {c.outcome || "?"}
                  </span>
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-500">
                  {c.judge_canonical && <span>{c.judge_canonical}</span>}
                  {c.year && <span>{c.year}</span>}
                  <span className="text-slate-300">{c.case_id}</span>
                </div>
                {c.case_summary && (
                  <p className="mt-1 line-clamp-1 text-[11px] leading-relaxed text-slate-500">
                    {c.case_summary}
                  </p>
                )}
              </button>
              <button
                onClick={() =>
                  isPinned ? onUnpinCase(c.case_id) : onPinCase(c)
                }
                className={`shrink-0 rounded-md p-1 ${
                  isPinned
                    ? "text-blue-600 hover:bg-blue-50"
                    : "text-slate-300 opacity-0 group-hover:opacity-100 hover:bg-slate-100 hover:text-slate-600"
                }`}
                title={isPinned ? "Unpin from workspace" : "Pin to workspace"}
              >
                {isPinned ? (
                  <PinOff className="h-3 w-3" />
                ) : (
                  <Pin className="h-3 w-3" />
                )}
              </button>
            </div>
          );
        })}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded(true)}
          className="flex w-full items-center justify-center gap-1 border-t border-slate-200/60 py-2 text-xs font-medium text-blue-600 hover:bg-blue-50/50"
        >
          <ChevronDown className="h-3 w-3" />
          Show all {cases.length} cases
        </button>
      )}
    </div>
  );
}
