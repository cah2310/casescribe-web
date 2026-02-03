"use client";

import { Loader2, CheckCircle2, AlertCircle, Filter, Search, FileText, Database } from "lucide-react";

const TOOL_LABELS: Record<string, { label: string; icon: typeof Search; accent: string }> = {
  getFilterOptions: { label: "Loading available filters", icon: Database, accent: "bg-blue-50 text-[#2C5DFF]" },
  applyFilters: { label: "Applying filters", icon: Filter, accent: "bg-blue-50 text-[#2C5DFF]" },
  fetchCases: { label: "Fetching matching cases", icon: FileText, accent: "bg-teal-50 text-[#0080A3]" },
  getCaseDetail: { label: "Loading case detail", icon: FileText, accent: "bg-teal-50 text-[#0080A3]" },
  semanticSearch: { label: "Searching decisions", icon: Search, accent: "bg-violet-50 text-[#4832A4]" },
  getMetadataPack: { label: "Loading case metadata", icon: Database, accent: "bg-green-50 text-[#3D6A5C]" },
};

interface ToolCallIndicatorProps {
  toolName: string;
  state: string;
}

export function ToolCallIndicator({ toolName, state }: ToolCallIndicatorProps) {
  const tool = TOOL_LABELS[toolName] || { label: toolName, icon: Search, accent: "bg-blue-50 text-[#2C5DFF]" };
  const Icon = tool.icon;

  const isLoading = state === "input-streaming" || state === "input-available";
  const isDone = state === "output-available";
  const isError = state === "output-error";

  return (
    <div className="my-1.5 flex items-center gap-3 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2">
      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${tool.accent}`}>
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="flex-1 text-xs font-medium text-slate-600">{tool.label}</span>
      {isLoading && <Loader2 className="h-3.5 w-3.5 animate-spin text-[#2C5DFF]" />}
      {isDone && (
        <div className="flex items-center gap-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
          <span className="text-xs text-green-600">Done</span>
        </div>
      )}
      {isError && (
        <div className="flex items-center gap-1">
          <AlertCircle className="h-3.5 w-3.5 text-red-500" />
          <span className="text-xs text-red-600">Error</span>
        </div>
      )}
    </div>
  );
}
