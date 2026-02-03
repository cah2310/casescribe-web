"use client";

import type { UIMessage } from "ai";
import ReactMarkdown from "react-markdown";
import { CitationLink } from "./CitationLink";
import { ToolCallIndicator } from "./ToolCallIndicator";
import { InlineCaseList } from "./InlineCaseList";
import { InlineFilterState } from "./InlineFilterState";

interface CaseSummary {
  case_id: string;
  outcome?: string | null;
  general_condition_38?: string | null;
  specific_condition_38?: string | null;
  judge_canonical?: string | null;
  year?: number | null;
  case_summary?: string | null;
}

interface ChatMessageProps {
  message: UIMessage;
  onCaseClick: (caseId: string) => void;
  pinnedCaseIds: Set<string>;
  onPinCase: (caseData: CaseSummary) => void;
  onUnpinCase: (caseId: string) => void;
}

/** Convert case citations to markdown links with a cite: scheme.
 *  Handles [[case_id]] (intended format) and [case_id]() / [case_id](#)
 *  (LLMs sometimes generate these instead of double-bracket notation). */
function prepareCitations(text: string): string {
  // Convert [[case_id]] notation
  let result = text.replace(/\[\[([^\]]+)\]\]/g, "[$1](cite:$1)");
  // Convert [case_id]() or [case_id](#) where case_id looks like a BVA ID
  result = result.replace(
    /\[([A-Z]?\d{6,})\]\(\s*#?\s*\)/g,
    "[$1](cite:$1)",
  );
  return result;
}

export function ChatMessage({
  message,
  onCaseClick,
  pinnedCaseIds,
  onPinCase,
  onUnpinCase,
}: ChatMessageProps) {
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
            const md = prepareCitations(part.text);
            return (
              <div key={i} className={`prose prose-sm max-w-none ${isUser ? "prose-invert" : "prose-slate"}`}>
                <ReactMarkdown
                  components={{
                    a: ({ href, children }) => {
                      if (href?.startsWith("cite:")) {
                        const caseId = href.slice(5);
                        return (
                          <CitationLink
                            caseId={caseId}
                            onClick={() => onCaseClick(caseId)}
                          />
                        );
                      }
                      // Fallback: detect case IDs the LLM linked as plain markdown
                      const text = typeof children === "string" ? children.trim() : "";
                      if (text && /^[A-Z]?\d{6,}$/.test(text)) {
                        return (
                          <CitationLink
                            caseId={text}
                            onClick={() => onCaseClick(text)}
                          />
                        );
                      }
                      return (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      );
                    },
                  }}
                >
                  {md}
                </ReactMarkdown>
              </div>
            );
          }

          // Tool parts: render inline results for completed tools, indicators for others
          if (part.type.startsWith("tool-")) {
            const toolPart = part as { type: string; state: string; toolName?: string; output?: unknown };

            // Render inline results for completed tool calls
            if (toolPart.state === "output-available" && toolPart.output) {
              if (toolPart.type === "tool-fetchCases") {
                const data = toolPart.output as { cases: CaseSummary[]; total: number };
                if (data.cases && data.cases.length > 0) {
                  return (
                    <InlineCaseList
                      key={i}
                      cases={data.cases}
                      total={data.total}
                      pinnedCaseIds={pinnedCaseIds}
                      onCaseClick={onCaseClick}
                      onPinCase={onPinCase}
                      onUnpinCase={onUnpinCase}
                    />
                  );
                }
              }

              if (toolPart.type === "tool-getMetadataPack") {
                const data = toolPart.output as { total_cases: number; sample_size: number };
                if (data.total_cases !== undefined) {
                  return (
                    <InlineFilterState
                      key={i}
                      total={data.total_cases}
                      filtersApplied={{ "metadata sample": `${data.sample_size} cases` }}
                    />
                  );
                }
              }

              if (toolPart.type === "tool-applyFilters") {
                const data = toolPart.output as { total: number; filters_applied: Record<string, string> };
                if (data.total !== undefined) {
                  return (
                    <InlineFilterState
                      key={i}
                      total={data.total}
                      filtersApplied={data.filters_applied}
                    />
                  );
                }
              }
            }

            // Default: show tool call indicator for in-progress/other states
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
