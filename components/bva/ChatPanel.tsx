"use client";

import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ResultsEmpty } from "./ResultsEmpty";
import type { UIMessage } from "ai";

interface CaseSummary {
  case_id: string;
  outcome?: string | null;
  general_condition_38?: string | null;
  specific_condition_38?: string | null;
  judge_canonical?: string | null;
  year?: number | null;
  case_summary?: string | null;
}

interface ChatPanelProps {
  messages: UIMessage[];
  sendMessage: (msg: { text: string }) => void;
  status: string;
  onCaseClick: (caseId: string) => void;
  pinnedCaseIds: Set<string>;
  onPinCase: (caseData: CaseSummary) => void;
  onUnpinCase: (caseId: string) => void;
}

export function ChatPanel({
  messages,
  sendMessage,
  status,
  onCaseClick,
  pinnedCaseIds,
  onPinCase,
  onUnpinCase,
}: ChatPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4">
        {isEmpty ? (
          <ResultsEmpty onSuggestionClick={(q) => sendMessage({ text: q })} />
        ) : (
          <div className="mx-auto max-w-3xl space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onCaseClick={onCaseClick}
                pinnedCaseIds={pinnedCaseIds}
                onPinCase={onPinCase}
                onUnpinCase={onUnpinCase}
              />
            ))}
          </div>
        )}
      </div>
      <ChatInput
        onSend={(text) => sendMessage({ text })}
        disabled={status !== "ready"}
        isLoading={status === "streaming"}
      />
    </div>
  );
}
