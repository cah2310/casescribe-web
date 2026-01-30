import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { VideoEmbed } from "@/components/marketing/video-embed";
import { ProductHero } from "@/components/marketing/product-hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StepCard } from "@/components/marketing/step-card";
import { DarkSection } from "@/components/marketing/dark-section";
import {
  Brain,
  Search,
  TrendingUp,
  FileSearch,
  Target,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Strategy",
  description:
    "AI-powered case strategy that finds secondary conditions, rating increases, and 3.156(c) reopening opportunities automatically.",
};

const capabilities = [
  {
    icon: Search,
    title: "Secondary Condition Detection",
    description:
      "CaseScribe analyzes medical evidence and identifies secondary conditions that may qualify for additional benefits — conditions your team might not have considered.",
  },
  {
    icon: TrendingUp,
    title: "Rating Increase Opportunities",
    description:
      "Identifies conditions where current evidence supports a higher rating than what's been assigned, with specific evidence citations.",
  },
  {
    icon: FileSearch,
    title: "3.156(c) Reopening Analysis",
    description:
      "Compares old and new service records to identify previously unfiled conditions now supported by newly associated evidence.",
  },
  {
    icon: Target,
    title: "Filing Strategy Recommendations",
    description:
      "Based on evidence strength, claim history, and current ratings, CaseScribe recommends optimal filing strategies.",
  },
  {
    icon: Lightbulb,
    title: "Evidence Strength Assessment",
    description:
      "Grades the strength of available evidence for each condition — nexus letters, medical opinions, buddy statements, and more.",
  },
  {
    icon: Brain,
    title: "AI Scenario Planning",
    description:
      "Models different filing scenarios and their likely outcomes based on evidence available, helping you prioritize claims.",
  },
];

const steps = [
  {
    step: "1",
    title: "Document Intelligence processes your files",
    desc: "All documents are OCR'd, classified, and have key data extracted.",
  },
  {
    step: "2",
    title: "AI analyzes the complete case picture",
    desc: "CaseScribe cross-references conditions, evidence, service history, and current ratings.",
  },
  {
    step: "3",
    title: "Opportunities are surfaced with evidence",
    desc: "Secondary conditions, rating increases, and reopening opportunities are identified with specific evidence citations.",
  },
  {
    step: "4",
    title: "Strategy recommendations are generated",
    desc: "Filing strategies, evidence gaps, and priority recommendations help your team make informed decisions.",
  },
];

function HeroMockup() {
  return (
    <>
      <div className="card-mock">
        <div className="mb-4 text-xs text-meta">
          AI Strategy Analysis — Case #VA-2024-1847
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-3">
            <p className="text-xs font-semibold text-blue-700">
              Secondary Condition Found
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
              3.156(c) Reopening
            </p>
            <p className="mt-1 text-xs text-emerald-600">
              New service records support previously denied TBI claim
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
    </>
  );
}

export default function CaseStrategyPage() {
  return (
    <>
      <ProductHero
        icon={Brain}
        title="AI That Thinks Like an Attorney"
        description="CaseScribe doesn't just organize your files — it finds the opportunities hidden inside them. Secondary conditions, increased ratings, and reopening opportunities your team might miss."
        gradient="from-indigo-500 to-purple-600"
        bgGradient="from-indigo-50 via-white to-white"
        radialColor="rgba(99,102,241,0.1)"
        shadowColor="shadow-indigo-500/25"
        primaryButtonClass="bg-indigo-600 hover:bg-indigo-700"
        primaryCta={{ label: "See It in Action", href: "/demo" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        mockup={<HeroMockup />}
        mockupSide="left"
      />

      {/* Key difference */}
      <DarkSection className="py-16">
        <div className="content-narrow px-4 text-center sm:px-6 lg:px-8">
          <h2 className="heading-section-dark sm:text-3xl">
            &ldquo;Others Organize Your Files. We Find Your Opportunities.&rdquo;
          </h2>
          <p className="mt-4 text-slate-400">
            Most legal AI tools stop at document classification. CaseScribe goes
            further — analyzing evidence across the entire case file to identify
            missed claims, stronger filing strategies, and evidence gaps that need
            to be addressed before filing.
          </p>
        </div>
      </DarkSection>

      {/* Capabilities */}
      <Section>
        <SectionHeader
          eyebrow="Capabilities"
          title="What Case Strategy AI Can Do"
          description="Purpose-built for disability law workflow. Every capability is designed to find opportunities other tools miss."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <FeatureCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              color="indigo"
            />
          ))}
        </div>
      </Section>

      {/* Video placeholder */}
      <Section className="bg-slate-50">
        <div className="content-narrow">
          <VideoEmbed title="See Case Strategy AI in action" />
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="content-narrow">
          <SectionHeader
            eyebrow="How It Works"
            title="From Documents to Strategy"
          />
          <div className="mt-12 space-y-8">
            {steps.map((item) => (
              <StepCard
                key={item.step}
                step={item.step}
                title={item.title}
                description={item.desc}
                layout="inline"
                gradient="from-indigo-500 to-purple-600"
              />
            ))}
          </div>
        </div>
      </Section>

      <CTABanner
        title="Find Opportunities Others Miss"
        description="See how CaseScribe's AI case strategy transforms your practice."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
