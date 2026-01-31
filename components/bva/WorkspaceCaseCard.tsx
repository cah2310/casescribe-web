"use client";

import { useState } from "react";
import { Eye, Search, X } from "lucide-react";

export interface PinnedCase {
  case_id: string;
  outcome: string | null;
  condition: string | null;
  judge: string | null;
  year: number | null;
  summary: string | null;
  note: string;
  pinnedAt: number;
}

const OUTCOME_STYLES: Record<string, string> = {
  Granted: "bg-green-50 text-green-700 border-green-200",
  Denied: "bg-red-50 text-red-700 border-red-200",
  Remanded: "bg-amber-50 text-amber-700 border-amber-200",
};

interface WorkspaceCaseCardProps {
  pinnedCase: PinnedCase;
  onView: (caseId: string) => void;
  onFindSimilar: (caseId: string, condition: string | null) => void;
  onRemove: (caseId: string) => void;
  onUpdateNote: (caseId: string, note: string) => void;
}

export function WorkspaceCaseCard({
  pinnedCase,
  onView,
  onFindSimilar,
  onRemove,
  onUpdateNote,
}: WorkspaceCaseCardProps) {
  const [showNote, setShowNote] = useState(pinnedCase.note.length > 0);
  const [noteValue, setNoteValue] = useState(pinnedCase.note);

  const outcomeStyle =
    OUTCOME_STYLES[pinnedCase.outcome || ""] ||
    "bg-slate-50 text-slate-600 border-slate-200";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${outcomeStyle}`}
            >
              {pinnedCase.outcome || "Unknown"}
            </span>
            <span className="truncate text-sm font-medium text-slate-900">
              {pinnedCase.condition || "Unknown Condition"}
            </span>
          </div>
          <p className="mt-0.5 text-xs text-slate-500">
            {[pinnedCase.judge, pinnedCase.year].filter(Boolean).join(" · ")}
            {pinnedCase.judge || pinnedCase.year ? " · " : ""}
            <span className="text-slate-400">{pinnedCase.case_id}</span>
          </p>
        </div>
        <button
          onClick={() => onRemove(pinnedCase.case_id)}
          className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          title="Remove from workspace"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Summary */}
      {pinnedCase.summary && (
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
          {pinnedCase.summary}
        </p>
      )}

      {/* Note */}
      {showNote ? (
        <textarea
          className="mt-2 w-full rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-300"
          placeholder="Add a note…"
          rows={2}
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
          onBlur={() => onUpdateNote(pinnedCase.case_id, noteValue)}
        />
      ) : (
        <button
          onClick={() => setShowNote(true)}
          className="mt-2 text-xs text-slate-400 hover:text-slate-600"
        >
          + Add note
        </button>
      )}

      {/* Actions */}
      <div className="mt-2 flex items-center gap-1">
        <button
          onClick={() => onView(pinnedCase.case_id)}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
        >
          <Eye className="h-3 w-3" />
          View
        </button>
        <button
          onClick={() => onFindSimilar(pinnedCase.case_id, pinnedCase.condition)}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
        >
          <Search className="h-3 w-3" />
          Find Similar
        </button>
      </div>
    </div>
  );
}
