"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/marketing/section";
import { AnimatedCounter } from "@/components/marketing/animated-counter";
import { CTABanner } from "@/components/marketing/cta-banner";
import { GlowCard } from "@/components/marketing/glow-card";
import { LogoMarquee } from "@/components/marketing/logo-marquee";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { BentoGrid, BentoCard } from "@/components/marketing/bento-grid";
import { FounderSection } from "@/components/marketing/founder-section";
import { FadeIn } from "@/components/marketing/fade-in";
import { DarkSection } from "@/components/marketing/dark-section";
import {
  FileStack,
  SearchX,
  TrendingDown,
  FileText,
  Brain,
  Headphones,
  Scale,
  Shield as ShieldIcon,
  Briefcase,
  CheckCircle,
  XCircle,
  ShieldCheck,
  Users,
  Lock,
  Database,
  ArrowRight,
  Zap,
} from "lucide-react";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-[#0a0f1e]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="dot-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pb-32 sm:pt-44 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 badge-hero"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Built by a 30-year disability law firm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-page-dark"
          >
            AI That Finds{" "}
            <span className="gradient-text-shimmer">Opportunities</span>
            <br />
            <span className="text-slate-400">Not Just Facts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl"
          >
            Document intelligence and case strategy AI built by disability law
            experts. Process 500 pages in 10 minutes. Find what others miss.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="glow-blue text-base shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
              asChild
            >
              <Link href="/demo">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
              asChild
            >
              <Link href="/pricing">View Pricing — $85/case</Link>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-blue-500" />
              SOC 2 Type II Certified
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              Trusted by 50+ Law Firms
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-blue-500" />
              Your Data, Your Control
            </div>
          </motion.div>
        </div>

        {/* Product screenshot with glow */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="perspective-card rounded-xl border border-slate-700/50 bg-slate-900 shadow-2xl glow-blue">
            <div className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-slate-500">
                CaseScribe AI — Case Analysis Dashboard
              </span>
            </div>
            <div className="flex min-h-[300px] items-center justify-center p-8 sm:min-h-[400px]">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/20">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <p className="text-sm font-medium text-slate-300">
                  Product screenshot — 1200×800px
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  AI-powered document analysis dashboard
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logo marquee */}
      <div className="relative border-t border-slate-800 bg-[#080c18] py-8">
        <LogoMarquee />
      </div>
    </section>
  );
}

/* ─── Problem ─── */
const problems = [
  {
    icon: FileStack,
    title: "Mountains of Documents",
    description:
      "Veterans' C-files average 1,000+ pages. Manual review takes 2-10 hours per case, and critical evidence gets missed.",
  },
  {
    icon: SearchX,
    title: "Missed Opportunities",
    description:
      "Current tools organize files but don't identify secondary conditions, increased ratings, or 3.156(c) reopening opportunities.",
  },
  {
    icon: TrendingDown,
    title: "Scaling Is Impossible",
    description:
      "Growing your caseload means hiring more reviewers. At $150+/case with competitors, margins evaporate.",
  },
];

function ProblemSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The Problem"
        title="Great Representatives Shouldn't Be Buried in Paper"
        description="Disability law firms face an impossible tradeoff: thoroughness or volume. Every missed detail is a missed opportunity for a veteran."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {problems.map((problem, i) => (
          <FadeIn key={problem.title} delay={i * 0.1}>
            <GlowCard>
              <div className="icon-box-md bg-red-50">
                <problem.icon className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="mt-4 heading-card-lg">
                {problem.title}
              </h3>
              <p className="mt-2 text-card-desc">
                {problem.description}
              </p>
            </GlowCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ─── Product Overview (Bento Grid) ─── */
function ProductOverview() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="Products"
        title="From Documents to Decisions"
        description="A complete AI platform that transforms raw case files into actionable case strategy."
      />
      <div className="mt-12">
        <BentoGrid className="lg:grid-rows-[auto_auto]">
          {/* Large featured card */}
          <BentoCard colSpan={2} variant="accent" className="sm:col-span-2">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="icon-box-sm bg-blue-600">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Document Intelligence
                </h3>
                <p className="mt-2 text-card-desc">
                  Our AI pipeline ingests, OCRs, classifies, and extracts key
                  data from 150+ document types — medical records, service
                  records, C&P exams, buddy statements, and more.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Automatic OCR for scanned documents",
                    "150+ document type classification",
                    "Chronological medical timeline",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-blue-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" size="sm" asChild>
                  <Link href="/products/document-intelligence">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
              {/* Mini product UI mockup */}
              <div className="rounded-xl border border-blue-200/50 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-meta">
                    Processing: veteran_cfile_2024.pdf
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      type: "Medical Record",
                      status: "Classified",
                      color: "bg-blue-100 text-blue-700",
                    },
                    {
                      type: "C&P Exam",
                      status: "Extracted",
                      color: "bg-green-100 text-green-700",
                    },
                    {
                      type: "Service Record",
                      status: "3.156(c) Found",
                      color: "bg-amber-100 text-amber-700",
                    },
                    {
                      type: "Buddy Statement",
                      status: "Analyzed",
                      color: "bg-purple-100 text-purple-700",
                    },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
                    >
                      <span className="text-xs font-medium text-slate-700">
                        {item.type}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Case Strategy card */}
          <BentoCard>
            <div className="icon-box-sm bg-indigo-100">
              <Brain className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Case Strategy
            </h3>
            <p className="mt-2 text-card-desc">
              Finds secondary conditions, increased ratings, and 3.156(c)
              reopening opportunities with specific evidence citations.
            </p>
            <Button variant="link" className="mt-4 h-auto p-0 text-sm" asChild>
              <Link href="/products/case-strategy">
                Learn More <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </BentoCard>

          {/* Speed metric card */}
          <BentoCard className="flex flex-col items-center justify-center text-center">
            <div className="icon-box-md bg-emerald-100">
              <Zap className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="mt-4 text-4xl font-bold text-slate-900">10 min</p>
            <p className="mt-1 text-sm text-slate-500">
              To process 500 pages
            </p>
          </BentoCard>

          {/* Security badge card */}
          <BentoCard className="flex flex-col items-center justify-center text-center">
            <div className="icon-box-md bg-blue-100">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
            </div>
            <p className="mt-4 text-lg font-bold text-slate-900">
              SOC 2 Type II
            </p>
            <p className="mt-1 text-sm text-slate-500">Certified secure</p>
          </BentoCard>

          {/* Ambient CRM card */}
          <BentoCard>
            <div className="flex items-center gap-3">
              <div className="icon-box-sm bg-amber-100">
                <Headphones className="h-5 w-5 text-amber-600" />
              </div>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                Coming Soon
              </span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Ambient CRM
            </h3>
            <p className="mt-2 text-card-desc">
              Intelligent case management that learns from your cases,
              auto-populates forms, and tracks deadlines.
            </p>
            <Button variant="link" className="mt-4 h-auto p-0 text-sm" asChild>
              <Link href="/products/ambient-crm">
                Join Waitlist <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </BentoCard>
        </BentoGrid>
      </div>
    </Section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote:
      "CaseScribe found secondary conditions in our cases that we had been missing for years. It paid for itself in the first week.",
    name: "Sarah Mitchell",
    title: "Managing Attorney",
    firm: "Veterans Rights Law Group",
  },
  {
    quote:
      "We went from processing 15 cases a week to 50. The AI doesn't just organize — it thinks like an attorney.",
    name: "James Rodriguez",
    title: "Senior Partner",
    firm: "National Disability Advocates",
  },
  {
    quote:
      "The 3.156(c) analysis alone has generated millions in additional benefits for our veteran clients.",
    name: "Patricia Chen",
    title: "Claims Director",
    firm: "Pacific Coast Veterans Law",
  },
];

function TestimonialSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Testimonials"
        title="Trusted by Leading Disability Law Firms"
        description="See why firms across the country are switching to CaseScribe."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.1}>
            <TestimonialCard
              quote={t.quote}
              name={t.name}
              title={t.title}
              firm={t.firm}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ─── The Difference ─── */
const comparisonRows = [
  {
    feature: "Document processing",
    them: "Organize files",
    us: "Find opportunities in files",
  },
  {
    feature: "Processing speed",
    them: "30-60 min/case",
    us: "10 minutes for 500 pages",
  },
  {
    feature: "AI depth",
    them: "Basic classification",
    us: "Condition detection & strategy",
  },
  {
    feature: "Data ownership",
    them: "Vendor lock-in",
    us: "Your data, exportable anytime",
  },
  {
    feature: "Built by",
    them: "Silicon Valley engineers",
    us: "30-year disability law firm",
  },
  {
    feature: "Pricing",
    them: "$150+/case, annual contracts",
    us: "$85/case, no contracts",
  },
];

function DifferenceSection() {
  return (
    <DarkSection className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The CaseScribe Difference"
          title="Others Organize Your Files. We Find Your Opportunities."
          dark
        />
        <FadeIn>
          <div className="content-narrow mt-12 overflow-hidden rounded-2xl border border-slate-700/50">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50 bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">
                    Others
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-blue-400">
                    CaseScribe
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i % 2 ? "bg-slate-800/30" : "bg-slate-800/10"
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-200">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 text-sm text-slate-500">
                        <XCircle className="h-4 w-4 shrink-0 text-slate-600" />
                        {row.them}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-2 text-sm text-blue-300">
                        <CheckCircle className="h-4 w-4 shrink-0 text-blue-400" />
                        {row.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </DarkSection>
  );
}

/* ─── Metrics ─── */
function MetricsSection() {
  return (
    <section className="section-dark bg-slate-900 py-16 sm:py-24 grain-overlay">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { end: 150, suffix: "+", label: "Document Types Supported" },
            { end: 90, suffix: "%", label: "Time Reduction" },
            { end: 85, prefix: "$", label: "Per Case, No Contracts" },
            { end: 10, suffix: " min", label: "To First Insights" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="glow-underline inline-block">
                <AnimatedCounter
                  end={metric.end}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  label={metric.label}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Practice Areas ─── */
const practiceAreas = [
  {
    icon: Scale,
    title: "VA Disability",
    description:
      "C-file processing, BVA decision analysis, condition detection, and 3.156(c) service record analysis.",
    href: "/solutions/va-disability",
  },
  {
    icon: ShieldIcon,
    title: "Social Security",
    description:
      "Medical records analysis, SSA workflow optimization, and evidence gap identification.",
    href: "/solutions/social-security",
  },
  {
    icon: Briefcase,
    title: "Workers' Compensation",
    description:
      "WC-specific document handling, medical record analysis, and case strategy.",
    href: "/solutions/workers-comp",
  },
];

function PracticeAreasSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Solutions"
        title="Purpose-Built for Disability Law"
        description="CaseScribe is designed for the specific workflows of disability and benefits law practices."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {practiceAreas.map((area, i) => (
          <FadeIn key={area.title} delay={i * 0.1}>
            <Link
              href={area.href}
              className="group block"
            >
              <GlowCard>
                <div className="icon-box-md bg-blue-50">
                  <area.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 heading-card-lg transition-colors group-hover:text-blue-600">
                  {area.title}
                </h3>
                <p className="mt-2 text-card-desc">
                  {area.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </GlowCard>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ─── Trust & Security ─── */
const trustPoints = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II Certified",
    description:
      "Enterprise-grade security controls audited by independent assessors.",
  },
  {
    icon: Users,
    title: "Built by Disability Law Experts",
    description:
      "Founded by Hill & Ponton, a firm with 30+ years helping veterans.",
  },
  {
    icon: Database,
    title: "Your Data, Your Control",
    description:
      "Full data portability. Export everything. Leave anytime. No lock-in.",
  },
  {
    icon: Lock,
    title: "Bring Your Own Keys",
    description:
      "BYOK option available. Your LLM API keys, your infrastructure.",
  },
];

function TrustSection() {
  return (
    <Section className="bg-slate-50">
      <SectionHeader
        eyebrow="Trust & Security"
        title="Security You Can Stake Your Practice On"
        description="We handle sensitive client data with the care it demands. No exceptions."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, i) => (
          <FadeIn key={point.title} delay={i * 0.1}>
            <div className="card-light-hover text-center">
              <div className="mx-auto icon-box-md bg-blue-100">
                <point.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                {point.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

/* ─── Page ─── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ProductOverview />
      <TestimonialSection />
      <FounderSection />
      <DifferenceSection />
      <MetricsSection />
      <PracticeAreasSection />
      <TrustSection />
      <CTABanner
        title="Ready to Help More Veterans?"
        description="Join 50+ firms already using CaseScribe. $85/case. No contracts. No lock-in."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
