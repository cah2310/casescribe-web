"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { BarChart3, ChevronDown, ChevronUp } from "lucide-react";

interface InlineAnalysisProps {
  analysis: string;
  question: string;
}

export function InlineAnalysis({ analysis, question }: InlineAnalysisProps) {
  const [collapsed, setCollapsed] = useState(false);
  const isLong = analysis.length > 600;

  return (
    <div className="my-2 rounded-lg border border-slate-200/80 bg-white">
      <button
        onClick={() => isLong && setCollapsed(!collapsed)}
        className={`flex w-full items-center gap-2 border-b border-slate-200/60 px-3 py-2 text-left ${
          isLong ? "cursor-pointer hover:bg-slate-50" : "cursor-default"
        }`}
      >
        <BarChart3 className="h-3.5 w-3.5 shrink-0 text-green-600" />
        <div className="min-w-0 flex-1">
          <span className="text-xs font-medium text-slate-700">Analysis</span>
          {question && (
            <span className="ml-1.5 text-xs text-slate-400">— {question}</span>
          )}
        </div>
        {isLong && (
          collapsed ? (
            <ChevronDown className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          ) : (
            <ChevronUp className="h-3.5 w-3.5 shrink-0 text-slate-400" />
          )
        )}
      </button>
      {!collapsed && (
        <div className="px-3 py-2.5">
          <div className="prose prose-sm prose-slate max-w-none text-xs leading-relaxed text-slate-700">
            <ReactMarkdown>{analysis}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}
