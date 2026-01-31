"use client";

import { CaseMetadataGrid } from "./CaseMetadataGrid";
import { CaseEvidenceIndicators } from "./CaseEvidenceIndicators";

interface CaseDetailViewProps {
  detail: {
    case_id: string;
    metadata: Record<string, unknown>;
    full_text: string | null;
    chunk_count: number;
  };
}

export function CaseDetailView({ detail }: CaseDetailViewProps) {
  const { full_text, chunk_count } = detail;
  const m = detail.metadata as Record<string, string | number | boolean | null>;

  return (
    <div className="space-y-6 p-4">
      {/* Outcome banner */}
      <div className="flex items-center gap-3">
        <OutcomeBadge outcome={String(m.outcome ?? "")} />
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {String(m.specific_condition_38 || m.general_condition_38 || "Unknown Condition")}
          </h3>
          <p className="text-xs text-slate-500">
            {String(m.judge_canonical ?? "")} &middot;{" "}
            {String(m.year ?? "")} &middot; {chunk_count} chunks
          </p>
        </div>
      </div>

      {/* Summary */}
      {m.case_summary && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Summary
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            {String(m.case_summary)}
          </p>
        </div>
      )}

      {/* Rationale */}
      {m.rationale && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Rationale
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            {String(m.rationale)}
          </p>
        </div>
      )}

      {/* Evidence indicators */}
      <CaseEvidenceIndicators metadata={detail.metadata} />

      {/* Metadata grid */}
      <CaseMetadataGrid metadata={detail.metadata} />

      {/* Full text */}
      {full_text && (
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Full Decision Text
          </h4>
          <div className="mt-2 whitespace-pre-wrap break-words rounded-lg bg-slate-50 p-4 text-sm leading-relaxed text-slate-700">
            {full_text}
          </div>
        </div>
      )}
    </div>
  );
}

function OutcomeBadge({ outcome }: { outcome?: string }) {
  const styles: Record<string, string> = {
    Granted: "bg-green-100 text-green-800",
    Denied: "bg-red-100 text-red-800",
    Remanded: "bg-amber-100 text-amber-800",
  };
  const style = styles[outcome || ""] || "bg-slate-100 text-slate-700";

  return (
    <span className={`rounded-full px-3 py-1 text-sm font-semibold ${style}`}>
      {outcome || "Unknown"}
    </span>
  );
}
