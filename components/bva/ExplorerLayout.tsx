"use client";

import { useState, useCallback, useMemo } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Plus } from "lucide-react";
import { ChatPanel } from "./ChatPanel";
import { WorkspacePanel } from "./WorkspacePanel";
import { CaseDetailModal } from "./CaseDetailModal";
import { ReportBar } from "./ReportBar";
import { GradientText } from "@/components/marketing/gradient-text";
import type { BVAChatMessage } from "@/app/api/bva/chat/route";
import type { PinnedCase } from "./WorkspaceCaseCard";

interface CaseSummary {
  case_id: string;
  outcome?: string | null;
  general_condition_38?: string | null;
  specific_condition_38?: string | null;
  judge_canonical?: string | null;
  year?: number | null;
  case_summary?: string | null;
}

export function ExplorerLayout() {
  const { messages, sendMessage, status, setMessages } = useChat<BVAChatMessage>({
    transport: new DefaultChatTransport({ api: "/api/bva/chat" }),
  });

  const handleNewChat = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [showWorkspace, setShowWorkspace] = useState(false);
  const [pinnedCases, setPinnedCases] = useState<Map<string, PinnedCase>>(new Map());

  const pinnedCaseIds = useMemo(
    () => new Set(pinnedCases.keys()),
    [pinnedCases]
  );

  const handleCaseClick = useCallback((caseId: string) => {
    setSelectedCaseId(caseId);
  }, []);

  const handlePinCase = useCallback((pinnedCase: PinnedCase) => {
    setPinnedCases((prev) => {
      const next = new Map(prev);
      next.set(pinnedCase.case_id, pinnedCase);
      return next;
    });
  }, []);

  const handlePinFromChat = useCallback((caseData: CaseSummary) => {
    const pinned: PinnedCase = {
      case_id: caseData.case_id,
      outcome: caseData.outcome ?? null,
      condition:
        caseData.specific_condition_38 ??
        caseData.general_condition_38 ??
        null,
      judge: caseData.judge_canonical ?? null,
      year: caseData.year ?? null,
      summary: caseData.case_summary ?? null,
      note: "",
      pinnedAt: Date.now(),
    };
    handlePinCase(pinned);
  }, [handlePinCase]);

  const handleUnpinCase = useCallback((caseId: string) => {
    setPinnedCases((prev) => {
      const next = new Map(prev);
      next.delete(caseId);
      return next;
    });
  }, []);

  const handleUpdateNote = useCallback((caseId: string, note: string) => {
    setPinnedCases((prev) => {
      const existing = prev.get(caseId);
      if (!existing) return prev;
      const next = new Map(prev);
      next.set(caseId, { ...existing, note });
      return next;
    });
  }, []);

  const handleFindSimilar = useCallback(
    (caseId: string, condition: string | null) => {
      const conditionText = condition ? ` (${condition})` : "";
      sendMessage({
        text: `Find cases similar to ${caseId}${conditionText}. Look for decisions with similar conditions, outcomes, and legal reasoning.`,
      });
      setSelectedCaseId(null);
      setShowWorkspace(false);
    },
    [sendMessage]
  );

  const handleClearWorkspace = useCallback(() => {
    setPinnedCases(new Map());
  }, []);

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="relative flex h-14 shrink-0 items-center justify-between border-b border-slate-700/50 bg-[#1B2036] px-4">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_100%_at_25%_50%,rgba(44,93,255,0.08),transparent)]" />
        <div className="relative flex items-center gap-3">
          <a href="/" className="text-sm font-semibold text-white">
            CaseScribe
          </a>
          <span className="text-slate-500">/</span>
          <GradientText variant="shimmer" className="font-display text-sm font-semibold">
            BVA Explorer
          </GradientText>
          <span className="badge-hero ml-0 text-xs py-0.5 px-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5CD4F4] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5CD4F4]" />
            </span>
            Beta
          </span>
        </div>
        <div className="relative flex items-center gap-2">
          {/* New Chat button */}
          <button
            onClick={handleNewChat}
            className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20"
            title="Start new chat"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">New Chat</span>
          </button>
          {/* Mobile workspace toggle */}
          <button
            onClick={() => setShowWorkspace(!showWorkspace)}
            className="flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 lg:hidden"
          >
            {showWorkspace ? "Chat" : "Workspace"}
            {!showWorkspace && pinnedCases.size > 0 && (
              <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-bold text-white">
                {pinnedCases.size}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex min-h-0 flex-1">
        {/* Chat panel — primary, takes remaining space */}
        <div
          className={`flex w-full flex-1 flex-col bg-white ${
            showWorkspace ? "hidden lg:flex" : "flex"
          }`}
        >
          <ChatPanel
            messages={messages}
            sendMessage={sendMessage}
            status={status}
            onCaseClick={handleCaseClick}
            pinnedCaseIds={pinnedCaseIds}
            onPinCase={handlePinFromChat}
            onUnpinCase={handleUnpinCase}
          />
        </div>

        {/* Workspace panel — sidebar */}
        <div
          className={`w-full border-l border-slate-200/60 lg:w-[380px] lg:shrink-0 ${
            showWorkspace ? "flex" : "hidden lg:flex"
          } flex-col overflow-hidden`}
        >
          <WorkspacePanel
            pinnedCases={pinnedCases}
            onView={handleCaseClick}
            onFindSimilar={handleFindSimilar}
            onRemove={handleUnpinCase}
            onUpdateNote={handleUpdateNote}
            onClear={handleClearWorkspace}
          />
        </div>
      </div>

      {/* Report bar */}
      <ReportBar messages={messages} pinnedCases={pinnedCases} />

      {/* Case detail modal */}
      <CaseDetailModal
        caseId={selectedCaseId}
        onClose={() => setSelectedCaseId(null)}
        isPinned={selectedCaseId ? pinnedCaseIds.has(selectedCaseId) : false}
        onPin={handlePinCase}
        onUnpin={handleUnpinCase}
        onFindSimilar={handleFindSimilar}
      />
    </div>
  );
}
