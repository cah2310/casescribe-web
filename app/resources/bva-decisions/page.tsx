import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Search, BarChart3, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BVA Decisions Explorer",
  description:
    "Search and explore Board of Veterans' Appeals decisions with AI-powered analysis. Filter by condition, outcome, judge, and more.",
};

export default function BVADecisionsPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="BVA Decisions"
          title="Board of Veterans' Appeals Decision Explorer"
          description="AI-powered search and analysis of BVA decisions. Filter by condition, outcome, judge, and more. Find patterns that strengthen your cases."
        />

        {/* CTA to Explorer */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Button size="lg" asChild>
            <Link href="/explore" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Launch BVA Explorer
            </Link>
          </Button>
          <p className="mt-3 text-sm text-slate-500">
            Chat with our AI research assistant to search, filter, and analyze BVA decisions
          </p>
        </div>

        {/* Feature highlights */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <Search className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              Semantic Search
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Find decisions by meaning, not just keywords. Search legal reasoning and evidence language.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              Pattern Analysis
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Discover grant rates, judge patterns, and evidence trends across thousands of decisions.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
              <MessageSquare className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-slate-900">
              AI Research Assistant
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Ask questions in plain English. The AI narrows filters and runs analysis for you.
            </p>
          </div>
        </div>
      </Section>

      <CTABanner
        title="See How CaseScribe Extracts Insights Automatically"
        description="Our AI analyzes BVA decisions and case files to find opportunities for your clients."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
      />
    </>
  );
}
