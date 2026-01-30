import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/marketing/section";
import { BentoGrid, BentoCard } from "@/components/marketing/bento-grid";
import { GlowCard } from "@/components/marketing/glow-card";
import { FadeIn } from "@/components/marketing/fade-in";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/mdx";
import {
  Search,
  Database,
  BarChart3,
  FileText,
  Clock,
  Shield,
  TrendingUp,
  Users,
  AlertTriangle,
  Link2,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free tools, BVA research findings, and insights for disability law professionals — no signup required.",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

const categoryLabels: Record<string, string> = {
  company: "Company",
  product: "Product",
  "legal-tech": "Legal Tech",
  "va-claims": "VA Claims",
  tutorial: "Tutorial",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function InsightItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
        <Icon className="h-3.5 w-3.5 text-blue-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function ResourcesPage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ============================================================ */}
      {/* Section 1 — Dark Hero                                       */}
      {/* ============================================================ */}
      <section className="relative -mt-16 overflow-hidden bg-[#1B2036]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(44,93,255,0.12),transparent)]" />
        <div className="dot-grid absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 text-center sm:px-6 sm:pb-24 sm:pt-44 lg:px-8">
          <p className="text-eyebrow-dark">Resources</p>
          <h1 className="mt-2 heading-page-dark">
            AI Tools That{" "}
            <span className="gradient-text-shimmer">Win Cases</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Free tools, original research, and expert analysis — for
            law firms using AI to work smarter. No signup required.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Section 2 — Free Tools (2/3) + Latest Posts sidebar (1/3)   */}
      {/* ============================================================ */}
      <Section>
        <SectionHeader
          eyebrow="Free Tools"
          title="Built for Attorneys, By Attorneys"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* ── Tools column (2/3) ── */}
          <div className="space-y-6 lg:col-span-2">
            {/* BVA Decision Explorer */}
            <FadeIn>
              <GlowCard className="h-full">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    Beta
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  BVA Decision Explorer
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Search and analyze 100,000+ Board of Veterans&apos; Appeals
                  decisions. Find patterns, winning arguments, and precedent for
                  any condition.
                </p>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Search by condition or keyword",
                    "Filter by date range and outcome",
                    "Identify winning argument patterns",
                    "Export citations and summaries",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/explore">
                      Try Beta
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </GlowCard>
            </FadeIn>

            {/* 3.156(c) Analyzer */}
            <FadeIn delay={0.1}>
              <GlowCard className="h-full">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100">
                    <FileText className="h-5 w-5 text-teal-600" />
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                    Beta
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  3.156(c) Analyzer
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  AI-powered analysis of service records to identify potential
                  3.156(c) claims — uncovering earlier effective dates and
                  retroactive benefits.
                </p>

                {/* What is 3.156(c)? callout */}
                <div className="mt-4 rounded-lg bg-teal-50 p-3">
                  <p className="text-xs font-medium text-teal-800">
                    What is 38 CFR 3.156(c)?
                  </p>
                  <p className="mt-1 text-xs text-teal-700">
                    When service records are discovered after a claim denial, the
                    VA must reconsider the original claim — potentially granting
                    earlier effective dates and retroactive benefits.
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {[
                    "Upload and scan service records",
                    "Detect qualifying record gaps",
                    "Flag earlier effective date opportunities",
                    "Generate 3.156(c) argument drafts",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button asChild>
                    <Link href="/resources/tools/3156c-analyzer">
                      Try Beta
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </GlowCard>
            </FadeIn>
          </div>

          {/* ── Blog sidebar (1/3) ── */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                From the Blog
              </p>
              <p className="mt-1 text-sm text-slate-500">
                AI implementation, legal research, and product updates
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-xl border border-slate-200/60 bg-white p-4 transition-shadow hover:shadow-sm"
                  >
                    <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {categoryLabels[post.category] || post.category}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold text-slate-900 line-clamp-2 group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                      <time>{formatDate(post.date)}</time>
                      <span className="inline-flex items-center font-medium text-blue-600">
                        Read <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}

                <Link
                  href="/blog"
                  className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  View All Posts
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </div>
            ) : (
              <p className="text-sm text-slate-500">
                Blog posts coming soon.
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* Section 3 — Featured Research (BentoGrid)                   */}
      {/* ============================================================ */}
      <Section className="bg-[#F8F8F6]">
        <SectionHeader
          eyebrow="Featured Research"
          title="What 100,000 BVA Decisions Reveal"
        />

        <div className="mt-12">
          <BentoGrid>
            {/* Main findings card — 2-col span */}
            <BentoCard colSpan={2} variant="accent">
              <Link
                href="/blog/bva-decisions-data-insights"
                className="block"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Key Findings
                  </h3>
                </div>
                <div className="mt-5 space-y-4">
                  <InsightItem
                    icon={Award}
                    title="Quality Over Volume"
                    description="Claims with fewer, stronger evidence pieces outperform those with large volumes of weak documentation."
                  />
                  <InsightItem
                    icon={Users}
                    title="Buddy Statements Matter"
                    description="Appeals including buddy/lay statements saw significantly higher grant rates."
                  />
                  <InsightItem
                    icon={AlertTriangle}
                    title="C&P Exam Deficiencies"
                    description="Inadequate C&P exams are a leading factor in remands — identifying gaps early is critical."
                  />
                  <InsightItem
                    icon={TrendingUp}
                    title="Secondary Conditions Rising"
                    description="Secondary service connection claims are increasing and succeeding at higher rates."
                  />
                  <InsightItem
                    icon={Shield}
                    title="Evidence Wins"
                    description="Well-organized evidence with clear nexus arguments is the strongest predictor of success."
                  />
                </div>
                <p className="mt-5 inline-flex items-center text-sm font-medium text-blue-600">
                  Read Full Analysis
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </p>
              </Link>
            </BentoCard>

            {/* Stat card */}
            <BentoCard>
              <div className="flex h-full flex-col items-center justify-center text-center">
                <Database className="h-8 w-8 text-teal-500" />
                <p className="mt-4 text-4xl font-bold text-slate-900">
                  100,000+
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  BVA Decisions Analyzed
                </p>
              </div>
            </BentoCard>

            {/* Top 5 Conditions card */}
            <BentoCard>
              <div className="flex items-center gap-2">
                <Link2 className="h-5 w-5 text-violet-500" />
                <h3 className="text-sm font-semibold text-slate-900">
                  Top 5 Conditions at BVA
                </h3>
              </div>
              <ol className="mt-4 space-y-2.5">
                {[
                  "PTSD",
                  "Tinnitus",
                  "Hearing Loss",
                  "Back & Knee Conditions",
                  "Sleep Apnea",
                ].map((condition, i) => (
                  <li
                    key={condition}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
                      {i + 1}
                    </span>
                    {condition}
                  </li>
                ))}
              </ol>
            </BentoCard>

            {/* Clock / timeline card */}
            <BentoCard>
              <div className="flex h-full flex-col items-center justify-center text-center">
                <Clock className="h-8 w-8 text-teal-500" />
                <p className="mt-4 text-2xl font-bold text-slate-900">
                  18–24 mo
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Average BVA Appeal Timeline
                </p>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </Section>

      {/* ============================================================ */}
      {/* Section 5 — CTA Banner                                      */}
      {/* ============================================================ */}
      <CTABanner
        title="Ready to Transform Your Practice?"
        description="See how CaseScribe AI helps disability law firms process cases faster and more accurately."
      />
    </>
  );
}
