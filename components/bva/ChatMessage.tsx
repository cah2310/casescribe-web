"use client";

import type { UIMessage } from "ai";
import { CitationLink } from "./CitationLink";
import { ToolCallIndicator } from "./ToolCallIndicator";
import { parseCitations } from "@/lib/bva/citations";

interface ChatMessageProps {
  message: UIMessage;
  onCaseClick: (caseId: string) => void;
}

export function ChatMessage({ message, onCaseClick }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] text-sm leading-relaxed ${
          isUser
            ? "rounded-2xl rounded-br-md bg-gradient-to-br from-[#1B2036] to-[#343B5F] px-4 py-3 text-white"
            : "rounded-2xl rounded-bl-md border border-slate-200/80 bg-white px-4 py-3 text-slate-800 shadow-sm"
        }`}
      >
        {message.parts.map((part, i) => {
          if (part.type === "text") {
            const segments = parseCitations(part.text);
            return (
              <div key={i} className="prose prose-sm max-w-none prose-slate">
                {segments.map((seg, j) =>
                  seg.type === "text" ? (
                    <span key={j} className="whitespace-pre-wrap">
                      {seg.content}
                    </span>
                  ) : (
                    <CitationLink
                      key={j}
                      caseId={seg.caseId}
                      onClick={() => onCaseClick(seg.caseId)}
                    />
                  ),
                )}
              </div>
            );
          }

          // Tool parts: show loading indicator or brief result summary
          if (part.type.startsWith("tool-")) {
            const toolPart = part as { type: string; state: string; toolName?: string };
            return (
              <ToolCallIndicator
                key={i}
                toolName={toolPart.type.replace("tool-", "")}
                state={toolPart.state}
              />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
