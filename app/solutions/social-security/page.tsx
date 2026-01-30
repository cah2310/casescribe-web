import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { VideoEmbed } from "@/components/marketing/video-embed";
import { ProductHero } from "@/components/marketing/product-hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import {
  Shield,
  FileText,
  ClipboardList,
  Activity,
  Search,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Security Solutions",
  description:
    "AI-powered Social Security disability claims processing. Medical records analysis, SSA workflow optimization, and evidence gap identification.",
};

const features = [
  {
    icon: FileText,
    title: "Medical Records Analysis",
    description:
      "Process thousands of pages of medical records. Extract diagnoses, treatments, providers, and dates automatically.",
  },
  {
    icon: Activity,
    title: "Functional Limitation Mapping",
    description:
      "Identifies documented functional limitations and maps them to SSA listings and grid rules.",
  },
  {
    icon: ClipboardList,
    title: "Chronological Timeline",
    description:
      "Generates a complete medical timeline with all treatments, hospitalizations, and diagnoses in order.",
  },
  {
    icon: Search,
    title: "Evidence Gap Identification",
    description:
      "Identifies what medical evidence is missing and what additional records could strengthen the claim.",
  },
];

function HeroMockup() {
  return (
    <>
      <div className="card-mock">
        <div className="mb-4 text-xs text-meta">
          AI Medical Records Analysis — SSA Case
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-3">
            <p className="text-xs font-semibold text-emerald-700">
              Functional Limitation Found
            </p>
            <p className="mt-1 text-xs text-emerald-600">
              Unable to stand/walk more than 2 hours — Dr. Smith, 03/2024
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50 p-3">
            <p className="text-xs font-semibold text-teal-700">
              SSA Listing Match
            </p>
            <p className="mt-1 text-xs text-teal-600">
              Listing 1.18 — Abnormality of a major joint, evidence: Strong
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-3">
            <p className="text-xs font-semibold text-amber-700">
              Evidence Gap Detected
            </p>
            <p className="mt-1 text-xs text-amber-600">
              Missing RFC assessment from treating physician
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
    </>
  );
}

export default function SocialSecurityPage() {
  return (
    <>
      <ProductHero
        icon={Shield}
        title="Social Security Disability, Streamlined"
        description="Process medical records in minutes. Identify functional limitations, map to SSA listings, and find evidence gaps — all powered by AI built for disability law."
        gradient="from-emerald-500 to-teal-600"
        bgGradient="from-emerald-50 via-white to-white"
        radialColor="rgba(16,185,129,0.12)"
        shadowColor="shadow-emerald-500/25"
        primaryButtonClass="bg-emerald-600 hover:bg-emerald-700"
        primaryCta={{ label: "Book a Demo", href: "/demo" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        mockup={<HeroMockup />}
        mockupSide="left"
      />

      {/* Features */}
      <Section className="bg-[#F8F8F6]">
        <SectionHeader
          eyebrow="Capabilities"
          title="Built for SSA Workflow"
          description="AI designed to handle the specific document types and analysis requirements of Social Security disability cases."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color="teal"
            />
          ))}
        </div>
      </Section>

      {/* Video */}
      <Section>
        <div className="content-narrow">
          <VideoEmbed title="See SSA medical records processing in action" />
        </div>
      </Section>

      {/* Challenge section */}
      <Section className="bg-[#F8F8F6]">
        <div className="content-narrow">
          <h2 className="heading-section-dark text-slate-900 sm:text-3xl">
            The SSA Medical Records Challenge
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Social Security disability cases live and die on medical evidence.
            Claimants often have records from dozens of providers spanning years.
            Manual review means hours of work per case — and critical functional
            limitations get missed in the volume.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            CaseScribe processes these records in minutes, extracting every
            diagnosis, treatment, and functional limitation, then mapping them to
            SSA listings so your team can focus on strategy, not reading.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Process medical records from multiple providers in minutes",
              "Automatic extraction of diagnoses, treatments, and limitations",
              "Map findings to SSA Blue Book listings",
              "Chronological timeline for hearing preparation",
              "Evidence gap analysis before filing",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABanner
        title="Streamline Your SSA Practice"
        description="See how CaseScribe processes medical records and identifies evidence in minutes."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
      />
    </>
  );
}
