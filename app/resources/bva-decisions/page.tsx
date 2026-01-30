import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Search, Filter, Gavel } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "BVA Decisions Explorer",
  description:
    "Search and explore Board of Veterans' Appeals decisions. Filter by condition, outcome, judge, and date range.",
};

export default function BVADecisionsPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="BVA Decisions"
          title="Board of Veterans' Appeals Decision Explorer"
          description="Search thousands of BVA decisions. Filter by condition, outcome, judge, and date range. Find precedents that strengthen your cases."
        />

        {/* Search interface */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Search BVA decisions (e.g., PTSD, sleep apnea, tinnitus)..."
                  className="pl-10"
                  disabled
                />
              </div>
              <Button disabled>
                Search
              </Button>
            </div>

            {/* Filters */}
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-slate-500">
                <Filter className="h-3 w-3" />
                Condition
              </div>
              <div className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-slate-500">
                <Filter className="h-3 w-3" />
                Outcome
              </div>
              <div className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-slate-500">
                <Filter className="h-3 w-3" />
                Year
              </div>
              <div className="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm text-slate-500">
                <Filter className="h-3 w-3" />
                Judge
              </div>
            </div>
          </div>

          {/* Coming soon message */}
          <div className="mt-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <Gavel className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Coming Soon
            </h3>
            <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
              We&apos;re building a comprehensive BVA decision search engine with
              full-text search, condition filtering, and outcome analysis. Check
              back soon.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              In the meantime, see how CaseScribe extracts these insights
              automatically from your case files.
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
