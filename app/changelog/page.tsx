import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/marketing/section";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Latest product updates and releases from CaseScribe AI.",
};

const entries = [
  {
    date: "2026-01-29",
    version: "1.0",
    title: "CaseScribe Marketing Site Launch",
    items: [
      "Full marketing website with product, solution, and pricing pages",
      "BVA Decisions Explorer (coming soon)",
      "3.156(c) Service Record Analyzer (coming soon)",
      "Blog and content platform",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Changelog"
        title="Product Updates"
        description="The latest features, improvements, and fixes from the CaseScribe team."
      />
      <div className="mx-auto mt-12 max-w-2xl space-y-12">
        {entries.map((entry) => (
          <div key={entry.version}>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                v{entry.version}
              </span>
              <time className="text-sm text-slate-500">{entry.date}</time>
            </div>
            <h3 className="mt-3 text-xl font-bold text-slate-900">
              {entry.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {entry.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
