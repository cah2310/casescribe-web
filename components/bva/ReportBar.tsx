"use client";

import { Download, Copy, Check, FileText } from "lucide-react";
import { useState } from "react";
import { jsPDF } from "jspdf";
import type { UIMessage } from "ai";
import type { PinnedCase } from "./WorkspaceCaseCard";

interface ReportBarProps {
  messages: UIMessage[];
  pinnedCases: Map<string, PinnedCase>;
}

// Build search.gov URL for a BVA case
function getBvaSearchUrl(caseId: string): string {
  return `https://search.usa.gov/search?utf8=%E2%9C%93&affiliate=bvadecisions&query=${encodeURIComponent(caseId)}`;
}

export function ReportBar({ messages, pinnedCases }: ReportBarProps) {
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

    // Pinned cases section with links
    if (pinnedCases.size > 0) {
      lines.push("---\n");
      lines.push("## Pinned Cases\n");
      for (const c of pinnedCases.values()) {
        const searchUrl = getBvaSearchUrl(c.case_id);
        lines.push(`- **[${c.case_id}](${searchUrl})** — ${c.condition || "Unknown Condition"} (${c.outcome || "Unknown"})${c.judge ? ` — ${c.judge}` : ""}${c.year ? `, ${c.year}` : ""}`);
        if (c.note) {
          lines.push(`  - Note: ${c.note}`);
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

  const handleDownloadPdf = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "letter",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2;
    let y = margin;

    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
    };

    // Title
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("BVA Explorer Report", margin, y);
    y += 10;

    // Date
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100);
    doc.text(`Generated: ${new Date().toLocaleString()}`, margin, y);
    doc.setTextColor(0);
    y += 10;

    // Conversation
    doc.setFontSize(12);
    for (const msg of messages) {
      checkPageBreak(20);

      // Role header
      doc.setFont("helvetica", "bold");
      doc.setTextColor(msg.role === "user" ? 0 : 59, msg.role === "user" ? 0 : 130, msg.role === "user" ? 0 : 246);
      doc.text(msg.role === "user" ? "User:" : "Assistant:", margin, y);
      doc.setTextColor(0);
      y += 6;

      // Message content
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      for (const part of msg.parts) {
        if (part.type === "text" && part.text.trim()) {
          const lines = doc.splitTextToSize(part.text, maxWidth);
          for (const line of lines) {
            checkPageBreak(5);
            doc.text(line, margin, y);
            y += 5;
          }
        }
      }
      y += 5;
    }

    // Pinned Cases Section
    if (pinnedCases.size > 0) {
      checkPageBreak(30);
      y += 5;

      // Section header
      doc.setDrawColor(200);
      doc.line(margin, y, pageWidth - margin, y);
      y += 8;

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Pinned Cases", margin, y);
      y += 8;

      doc.setFontSize(10);
      for (const c of pinnedCases.values()) {
        checkPageBreak(20);

        // Case ID as link
        doc.setFont("helvetica", "bold");
        doc.setTextColor(37, 99, 235); // Blue for link
        const caseText = c.case_id;
        doc.textWithLink(caseText, margin, y, { url: getBvaSearchUrl(c.case_id) });

        // Case details
        doc.setFont("helvetica", "normal");
        doc.setTextColor(0);
        const details = ` — ${c.condition || "Unknown"} (${c.outcome || "Unknown"})${c.judge ? ` — ${c.judge}` : ""}${c.year ? `, ${c.year}` : ""}`;
        doc.text(details, margin + doc.getTextWidth(caseText), y);
        y += 5;

        // Note if present
        if (c.note) {
          checkPageBreak(10);
          doc.setTextColor(80);
          doc.setFont("helvetica", "italic");
          const noteLines = doc.splitTextToSize(`Note: ${c.note}`, maxWidth - 5);
          for (const line of noteLines) {
            checkPageBreak(5);
            doc.text(line, margin + 5, y);
            y += 5;
          }
          doc.setTextColor(0);
          doc.setFont("helvetica", "normal");
        }
        y += 3;
      }
    }

    // Footer on last page
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(
      "Generated by CaseScribe BVA Explorer — casescribe.ai",
      pageWidth / 2,
      pageHeight - 10,
      { align: "center" }
    );

    doc.save("bva-explorer-report.pdf");
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
        onClick={handleDownloadPdf}
        className="flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
      >
        <FileText className="h-3.5 w-3.5" />
        Download PDF
      </button>
    </div>
  );
}
