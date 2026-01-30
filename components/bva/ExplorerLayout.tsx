"use client";

import { useState, useCallback } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ChatPanel } from "./ChatPanel";
import { ResultsPanel } from "./ResultsPanel";
import { CaseDetailDrawer } from "./CaseDetailDrawer";
import { ReportBar } from "./ReportBar";
import { GradientText } from "@/components/marketing/gradient-text";
import type { BVAChatMessage } from "@/app/api/bva/chat/route";

export function ExplorerLayout() {
  const { messages, sendMessage, status } = useChat<BVAChatMessage>({
    transport: new DefaultChatTransport({ api: "/api/bva/chat" }),
  });

  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCaseClick = useCallback((caseId: string) => {
    setSelectedCaseId(caseId);
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
          {/* Mobile results toggle */}
          <button
            onClick={() => setShowResults(!showResults)}
            className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20 lg:hidden"
          >
            {showResults ? "Chat" : "Results"}
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex min-h-0 flex-1">
        {/* Chat panel */}
        <div
          className={`flex w-full flex-col border-r border-slate-200/60 bg-white lg:w-[440px] lg:shrink-0 ${
            showResults ? "hidden lg:flex" : "flex"
          }`}
        >
          <ChatPanel
            messages={messages}
            sendMessage={sendMessage}
            status={status}
            onCaseClick={handleCaseClick}
          />
        </div>

        {/* Results panel */}
        <div
          className={`flex-1 ${
            showResults ? "flex" : "hidden lg:flex"
          } flex-col overflow-hidden`}
        >
          <ResultsPanel
            messages={messages}
            onCaseClick={handleCaseClick}
          />
        </div>
      </div>

      {/* Report bar */}
      <ReportBar messages={messages} />

      {/* Case detail drawer */}
      {selectedCaseId && (
        <CaseDetailDrawer
          caseId={selectedCaseId}
          onClose={() => setSelectedCaseId(null)}
        />
      )}
    </div>
  );
}
