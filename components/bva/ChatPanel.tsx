"use client";

import { useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";
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
  }, [messages, status]);

  const isEmpty = messages.length === 0;

  // Show thinking indicator when waiting for response
  const lastMessage = messages[messages.length - 1];
  const isThinking = status !== "ready" && lastMessage?.role === "user";

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
            {isThinking && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
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
