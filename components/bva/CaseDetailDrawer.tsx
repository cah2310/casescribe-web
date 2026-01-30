"use client";

import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { CaseDetailView } from "./CaseDetailView";

interface CaseDetailDrawerProps {
  caseId: string;
  onClose: () => void;
}

interface CaseDetail {
  case_id: string;
  metadata: Record<string, unknown>;
  full_text: string | null;
  chunk_count: number;
}

export function CaseDetailDrawer({ caseId, onClose }: CaseDetailDrawerProps) {
  const [detail, setDetail] = useState<CaseDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative flex w-full max-w-2xl flex-col bg-white shadow-xl lg:max-w-3xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <h2 className="text-sm font-semibold text-slate-900">
            Case: {caseId}
          </h2>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

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
      </div>
    </div>
  );
}
