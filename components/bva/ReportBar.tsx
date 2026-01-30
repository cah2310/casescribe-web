"use client";

import { Download, Copy, Check } from "lucide-react";
import { useState } from "react";
import type { UIMessage } from "ai";

interface ReportBarProps {
  messages: UIMessage[];
}

export function ReportBar({ messages }: ReportBarProps) {
  const [copied, setCopied] = useState(false);

  if (messages.length === 0) return null;

  const buildMarkdown = () => {
    const lines: string[] = ["# BVA Explorer Report\n"];
    for (const msg of messages) {
      const role = msg.role === "user" ? "**User:**" : "**Assistant:**";
      lines.push(role);
      for (const part of msg.parts) {
        if (part.type === "text") {
          lines.push(part.text);
        }
      }
      lines.push("");
    }
    return lines.join("\n");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(buildMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const md = buildMarkdown();
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bva-explorer-report.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-end gap-2 border-t border-slate-200/80 bg-white/80 px-4 py-2 backdrop-blur-sm">
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-500" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
        {copied ? "Copied" : "Copy Markdown"}
      </button>
      <button
        onClick={handleDownload}
        className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100"
      >
        <Download className="h-3.5 w-3.5" />
        Download
      </button>
    </div>
  );
}
