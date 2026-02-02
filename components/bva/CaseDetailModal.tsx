"use client";

import { useEffect, useState } from "react";
import { Loader2, Pin, PinOff, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { CaseDetailView } from "./CaseDetailView";
import type { PinnedCase } from "./WorkspaceCaseCard";

interface CaseDetail {
  case_id: string;
  metadata: Record<string, unknown>;
  full_text: string | null;
  chunk_count: number;
}

interface CaseDetailModalProps {
  caseId: string | null;
  onClose: () => void;
  isPinned: boolean;
  onPin: (pinnedCase: PinnedCase) => void;
  onUnpin: (caseId: string) => void;
  onFindSimilar: (caseId: string, condition: string | null) => void;
}

export function CaseDetailModal({
  caseId,
  onClose,
  isPinned,
  onPin,
  onUnpin,
  onFindSimilar,
}: CaseDetailModalProps) {
  const [detail, setDetail] = useState<CaseDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!caseId) {
      setDetail(null);
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_BVA_API_URL || "";
    setLoading(true);
    setError(null);

    fetch(`${apiUrl}/api/bva/case-proxy?case_id=${encodeURIComponent(caseId)}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Failed to load case: ${res.status}`);
        return res.json();
      })
      .then(setDetail)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [caseId]);

  const handlePin = () => {
    if (!detail) return;
    const m = detail.metadata as Record<string, string | number | boolean | null>;
    onPin({
      case_id: detail.case_id,
      outcome: m.outcome ? String(m.outcome) : null,
      condition: m.specific_condition_38
        ? String(m.specific_condition_38)
        : m.general_condition_38
          ? String(m.general_condition_38)
          : null,
      judge: m.judge_canonical ? String(m.judge_canonical) : null,
      year: typeof m.year === "number" ? m.year : null,
      summary: m.case_summary ? String(m.case_summary) : null,
      note: "",
      pinnedAt: Date.now(),
    });
  };

  const handleFindSimilar = () => {
    if (!detail) return;
    const m = detail.metadata as Record<string, string | number | boolean | null>;
    const condition = m.specific_condition_38
      ? String(m.specific_condition_38)
      : m.general_condition_38
        ? String(m.general_condition_38)
        : null;
    onFindSimilar(detail.case_id, condition);
  };

  return (
    <Sheet open={!!caseId} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="flex h-full w-full flex-col gap-0 p-0 sm:max-w-2xl"
        showCloseButton
      >
        <SheetHeader className="shrink-0 border-b border-slate-200 px-6 py-4">
          <SheetTitle className="text-sm font-semibold text-slate-900">
            Case: {caseId}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Full detail view for BVA case {caseId}
          </SheetDescription>
        </SheetHeader>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
            </div>
          )}
          {error && (
            <div className="p-4 text-sm text-red-600">{error}</div>
          )}
          {detail && <CaseDetailView detail={detail} />}
        </div>

        {/* Footer actions */}
        {detail && (
          <div className="flex shrink-0 items-center justify-between border-t border-slate-200 px-6 py-3">
            <button
              onClick={handleFindSimilar}
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
            >
              <Search className="h-3.5 w-3.5" />
              Find Similar
            </button>
            {isPinned ? (
              <button
                onClick={() => onUnpin(detail.case_id)}
                className="flex items-center gap-1.5 rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                <PinOff className="h-3.5 w-3.5" />
                Pinned
              </button>
            ) : (
              <button
                onClick={handlePin}
                className="flex items-center gap-1.5 rounded-md bg-[#1B2036] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#252B4A]"
              >
                <Pin className="h-3.5 w-3.5" />
                Pin to Workspace
              </button>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
