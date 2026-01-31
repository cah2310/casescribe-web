"use client";

import { Pin, Trash2 } from "lucide-react";
import { WorkspaceCaseCard } from "./WorkspaceCaseCard";
import type { PinnedCase } from "./WorkspaceCaseCard";

interface WorkspacePanelProps {
  pinnedCases: Map<string, PinnedCase>;
  onView: (caseId: string) => void;
  onFindSimilar: (caseId: string, condition: string | null) => void;
  onRemove: (caseId: string) => void;
  onUpdateNote: (caseId: string, note: string) => void;
  onClear: () => void;
}

export function WorkspacePanel({
  pinnedCases,
  onView,
  onFindSimilar,
  onRemove,
  onUpdateNote,
  onClear,
}: WorkspacePanelProps) {
  const cases = Array.from(pinnedCases.values()).sort(
    (a, b) => b.pinnedAt - a.pinnedAt
  );

  if (cases.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-slate-50 px-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
          <Pin className="h-5 w-5 text-slate-400" />
        </div>
        <h3 className="mt-4 text-sm font-semibold text-slate-900">
          Your Workspace
        </h3>
        <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-slate-500">
          Pin interesting cases from chat results to save them here with notes.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-slate-50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-900">
          Workspace{" "}
          <span className="font-normal text-slate-500">
            ({cases.length})
          </span>
        </h3>
        <button
          onClick={onClear}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-700"
        >
          <Trash2 className="h-3 w-3" />
          Clear All
        </button>
      </div>

      {/* Card list */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="space-y-2.5">
          {cases.map((c) => (
            <WorkspaceCaseCard
              key={c.case_id}
              pinnedCase={c}
              onView={onView}
              onFindSimilar={onFindSimilar}
              onRemove={onRemove}
              onUpdateNote={onUpdateNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
