import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { VideoEmbed } from "@/components/marketing/video-embed";
import { ProductHero } from "@/components/marketing/product-hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import {
  Briefcase,
  FileText,
  Activity,
  ClipboardList,
  Search,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Workers' Compensation Solutions",
  description:
    "AI-powered workers' compensation document processing. Medical records analysis, WC-specific document handling, and evidence identification.",
};

const features = [
  {
    icon: FileText,
    title: "WC Document Classification",
    description:
      "Automatically classifies workers' compensation-specific documents — employer reports, IME reports, treatment records, and more.",
  },
  {
    icon: Activity,
    title: "Injury & Treatment Tracking",
    description:
      "Extracts and tracks work-related injuries, treatments, and recovery timelines across all medical records.",
  },
  {
    icon: ClipboardList,
    title: "Medical Record Synthesis",
    description:
      "Synthesizes records from multiple providers into a single chronological timeline with key findings highlighted.",
  },
  {
    icon: Search,
    title: "Causation Evidence",
    description:
      "Identifies medical evidence supporting work-relatedness and causation, with specific citations.",
  },
];

function HeroMockup() {
  return (
    <>
      <div className="card-mock">
        <div className="mb-4 text-xs text-meta">
          AI Case Analysis — Workers&apos; Comp Case
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3">
            <p className="text-xs font-semibold text-amber-700">
              Work-Related Injury Identified
            </p>
            <p className="mt-1 text-xs text-amber-600">
              Lumbar disc herniation — Onset: Workplace lifting incident, 06/2024
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-3">
            <p className="text-xs font-semibold text-orange-700">
              Causation Evidence Found
            </p>
            <p className="mt-1 text-xs text-orange-600">
              Dr. Martinez: &ldquo;Injury directly related to workplace incident&rdquo;
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-3">
            <p className="text-xs font-semibold text-emerald-700">
              Treatment Timeline Generated
            </p>
            <p className="mt-1 text-xs text-emerald-600">
              14 visits across 3 providers — 6 months documented
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-amber-500/10 blur-3xl" />
    </>
  );
}

export default function WorkersCompPage() {
  return (
    <>
      <ProductHero
        icon={Briefcase}
        title="Workers' Compensation, Simplified"
        description="Process WC-specific documents in minutes. Track injuries, treatments, and causation evidence across your entire case file."
        gradient="from-amber-500 to-orange-600"
        bgGradient="from-amber-50 via-white to-white"
        radialColor="rgba(245,158,11,0.12)"
        shadowColor="shadow-amber-500/25"
        primaryButtonClass="bg-amber-600 hover:bg-amber-700"
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        mockup={<HeroMockup />}
        mockupSide="left"
      />

      {/* Features */}
      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="Capabilities"
          title="Built for Workers' Compensation"
          description="AI designed for the specific document types and analysis needs of workers' compensation cases."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color="amber"
            />
          ))}
        </div>
      </Section>

      {/* Video */}
      <Section>
        <div className="content-narrow">
          <VideoEmbed title="See Workers' Comp processing in action" />
        </div>
      </Section>

      {/* How it helps */}
      <Section className="bg-slate-50">
        <div className="content-narrow">
          <h2 className="heading-section-dark text-slate-900 sm:text-3xl">
            How CaseScribe Helps WC Practices
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              "Process employer incident reports, IME evaluations, and treatment records",
              "Track work-related injuries and treatments across providers",
              "Identify causation evidence with specific medical citations",
              "Generate chronological timelines for depositions and hearings",
              "Evidence gap analysis for maximum medical improvement",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABanner
        title="Streamline Your WC Practice"
        description="See how CaseScribe handles workers' compensation document processing."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
      />
    </>
  );
}
