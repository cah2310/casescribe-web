"use client";

import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ResultsEmpty } from "./ResultsEmpty";
import type { UIMessage } from "ai";

interface ChatPanelProps {
  messages: UIMessage[];
  sendMessage: (msg: { text: string }) => void;
  status: string;
  onCaseClick: (caseId: string) => void;
}

export function ChatPanel({
  messages,
  sendMessage,
  status,
  onCaseClick,
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
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                onCaseClick={onCaseClick}
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
