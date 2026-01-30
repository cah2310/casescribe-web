import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { VideoEmbed } from "@/components/marketing/video-embed";
import { ProductHero } from "@/components/marketing/product-hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StepCard } from "@/components/marketing/step-card";
import { DarkSection } from "@/components/marketing/dark-section";
import {
  Scale,
  FileText,
  Search,
  Brain,
  Gavel,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VA Disability Solutions",
  description:
    "AI-powered VA disability claims processing. C-file analysis, BVA decision research, condition detection, and 3.156(c) service record analysis.",
};

const features = [
  {
    icon: FileText,
    title: "C-File Processing",
    description:
      "Process entire C-files in minutes. Every document classified, every condition extracted, every date indexed.",
  },
  {
    icon: Search,
    title: "Condition Detection",
    description:
      "AI identifies claimed and potential secondary conditions across the entire case file with evidence citations.",
  },
  {
    icon: Brain,
    title: "3.156(c) Analysis",
    description:
      "Automatically compares old and new service records to identify previously unfiled conditions now supported by newly associated evidence.",
  },
  {
    icon: Gavel,
    title: "BVA Decision Research",
    description:
      "Search thousands of BVA decisions to find precedents and strategies for similar cases.",
  },
  {
    icon: TrendingUp,
    title: "Rating Increase Opportunities",
    description:
      "Identifies conditions where evidence supports a higher rating, with specific medical evidence cited.",
  },
  {
    icon: Scale,
    title: "Filing Strategy",
    description:
      "AI-recommended filing strategies based on evidence strength, claim history, and current ratings.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Upload the C-File",
    desc: "Upload the veteran's entire C-file — any format, any size.",
  },
  {
    step: "2",
    title: "AI Processes & Classifies",
    desc: "Every document is OCR'd, classified into 150+ types, and key data extracted.",
  },
  {
    step: "3",
    title: "Opportunities Surfaced",
    desc: "Secondary conditions, 3.156(c) reopenings, and rating increases identified with evidence.",
  },
  {
    step: "4",
    title: "Strategy & Filing",
    desc: "AI recommends filing strategy. Your team reviews, decides, and acts.",
  },
];

function HeroMockup() {
  return (
    <>
      <div className="card-mock">
        <div className="mb-4 text-xs text-meta">
          AI Case Analysis — C-File Review
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3">
            <p className="text-xs font-semibold text-blue-700">
              Secondary Condition Detected
            </p>
            <p className="mt-1 text-xs text-blue-600">
              Sleep apnea secondary to PTSD — Evidence strength: Strong
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3">
            <p className="text-xs font-semibold text-amber-700">
              Rating Increase Opportunity
            </p>
            <p className="mt-1 text-xs text-amber-600">
              Knee condition: Current 10% → Evidence supports 30%
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-3">
            <p className="text-xs font-semibold text-emerald-700">
              3.156(c) Reopening Found
            </p>
            <p className="mt-1 text-xs text-emerald-600">
              New service records support previously denied TBI claim
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
    </>
  );
}

export default function VADisabilityPage() {
  return (
    <>
      <ProductHero
        icon={Scale}
        title="VA Disability Claims, Transformed"
        description="Process C-files in minutes, not hours. Find secondary conditions, 3.156(c) opportunities, and rating increases that manual review misses."
        gradient="from-blue-500 to-indigo-600"
        bgGradient="from-blue-50 via-white to-white"
        radialColor="rgba(59,130,246,0.12)"
        shadowColor="shadow-blue-500/25"
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
        secondaryCta={{ label: "Explore BVA Decisions", href: "/resources/bva-decisions" }}
        mockup={<HeroMockup />}
        mockupSide="left"
      />

      {/* Workflow */}
      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="VA Disability Workflow"
          title="From C-File to Case Strategy in Minutes"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item) => (
            <StepCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          eyebrow="Capabilities"
          title="Purpose-Built for VA Disability"
          description="Every feature designed by people who have processed thousands of VA disability claims."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color="blue"
            />
          ))}
        </div>
      </Section>

      {/* Video */}
      <Section className="bg-slate-50">
        <div className="content-narrow">
          <VideoEmbed title="See VA Disability processing in action" />
        </div>
      </Section>

      {/* BVA teaser — dark section */}
      <DarkSection className="py-16">
        <div className="content-narrow px-4 text-center sm:px-6 lg:px-8">
          <Gavel className="mx-auto h-8 w-8 text-blue-400" />
          <h2 className="mt-4 heading-section-dark sm:text-3xl">
            BVA Decision Research
          </h2>
          <p className="mt-4 leading-relaxed text-slate-400">
            Search thousands of Board of Veterans&apos; Appeals decisions.
            Filter by condition, outcome, judge, and date. Find precedents that
            strengthen your cases.
          </p>
          <Button className="mt-6 border-slate-700 text-white hover:bg-slate-800" variant="outline" asChild>
            <Link href="/resources/bva-decisions">
              Explore BVA Decisions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DarkSection>

      <CTABanner
        title="Help More Veterans, Faster"
        description="See how CaseScribe transforms your VA disability practice."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
      />
    </>
  );
}
