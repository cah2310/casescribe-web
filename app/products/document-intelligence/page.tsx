import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { VideoEmbed } from "@/components/marketing/video-embed";
import { ProductHero } from "@/components/marketing/product-hero";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StepCard } from "@/components/marketing/step-card";
import {
  FileText,
  ScanLine,
  FolderSearch,
  ClipboardList,
  Clock,
  Upload,
  Layers,
  FileSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Document Intelligence",
  description:
    "Process 5,000+ pages in 10 minutes. AI-powered OCR, classification, and data extraction for 150+ legal document types.",
};

const pipeline = [
  {
    step: "1",
    icon: Upload,
    title: "Ingest",
    description:
      "Upload C-files, medical records, service records — any format. PDF, TIFF, JPG, DOCX, and more.",
  },
  {
    step: "2",
    icon: ScanLine,
    title: "OCR & Enhance",
    description:
      "AI-powered OCR processes even poor-quality scans. Text extraction with 99%+ accuracy on clean documents.",
  },
  {
    step: "3",
    icon: Layers,
    title: "Classify",
    description:
      "Each document is automatically classified into 150+ types — medical records, C&P exams, buddy statements, service records, and more.",
  },
  {
    step: "4",
    icon: FileSearch,
    title: "Extract & Analyze",
    description:
      "Key data is extracted: conditions, dates, providers, diagnoses, medications, and evidence strength indicators.",
  },
];

const features = [
  {
    icon: FileText,
    title: "150+ Document Types",
    description:
      "From VA-specific forms to medical records, we classify documents that general-purpose tools miss entirely.",
  },
  {
    icon: FolderSearch,
    title: "Evidence Gap Analysis",
    description:
      "Automatically identifies what evidence is present and what's missing for each claimed condition.",
  },
  {
    icon: ClipboardList,
    title: "Medical Timeline",
    description:
      "Generates a chronological timeline of all medical events, treatments, and diagnoses from the entire file.",
  },
  {
    icon: Clock,
    title: "10 Minutes, Not 10 Hours",
    description:
      "What takes a reviewer 2-10 hours, CaseScribe processes in under 10 minutes for a 5,000-page file.",
  },
];

const beforeAfter = [
  {
    before: "Manual OCR and document sorting",
    after: "Automatic OCR and classification in minutes",
  },
  {
    before: "2-10 hours per C-file review",
    after: "10 minutes for 5,000+ pages",
  },
  {
    before: "Missed documents in large files",
    after: "Every document classified and indexed",
  },
  {
    before: "Manual data entry from forms",
    after: "Automatic extraction of conditions, dates, providers",
  },
  {
    before: "Evidence gaps discovered at hearing",
    after: "Evidence gaps identified before filing",
  },
];

function HeroMockup() {
  return (
    <>
      <div className="card-mock">
        <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-4">
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="text-xs text-meta">
            Processing: veteran_cfile_2024.pdf — 487 pages
          </span>
        </div>
        <div className="space-y-2.5">
          {[
            { type: "VA Form 21-526EZ", count: "3 pages", pct: "100%" },
            { type: "Medical Records", count: "234 pages", pct: "92%" },
            { type: "Service Records", count: "87 pages", pct: "88%" },
            { type: "C&P Exam Reports", count: "45 pages", pct: "100%" },
            { type: "Buddy Statements", count: "12 pages", pct: "100%" },
          ].map((item) => (
            <div
              key={item.type}
              className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2.5"
            >
              <div>
                <span className="text-sm font-medium text-slate-700">
                  {item.type}
                </span>
                <span className="ml-2 text-xs text-slate-400">
                  {item.count}
                </span>
              </div>
              <span className="text-xs font-medium text-blue-600">
                {item.pct}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-blue-50 p-3 text-center">
          <span className="text-xs font-medium text-blue-700">
            Completed in 7 min 23 sec — 2 evidence gaps found
          </span>
        </div>
      </div>
      {/* Decorative glow */}
      <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
    </>
  );
}

export default function DocumentIntelligencePage() {
  return (
    <>
      <ProductHero
        icon={FileText}
        title="Process 5,000 Pages in 10 Minutes"
        description="AI-powered document intelligence that ingests, OCRs, classifies, and extracts key data from 150+ document types. Stop reading. Start deciding."
        gradient="from-blue-500 to-indigo-600"
        bgGradient="from-blue-50 via-white to-white"
        radialColor="rgba(59,130,246,0.12)"
        shadowColor="shadow-blue-500/25"
        primaryCta={{ label: "See It in Action", href: "/demo" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
        mockup={<HeroMockup />}
      />

      {/* Pipeline */}
      <Section className="bg-[#F8F8F6]">
        <SectionHeader
          eyebrow="How It Works"
          title="From Upload to Insight in Four Steps"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section>
        <SectionHeader
          eyebrow="Features"
          title="Built for Legal Document Complexity"
          description="General-purpose AI tools can't handle legal documents. CaseScribe was built specifically for them."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              layout="horizontal"
            />
          ))}
        </div>
      </Section>

      {/* Video placeholder */}
      <Section className="bg-[#F8F8F6]">
        <div className="content-narrow">
          <VideoEmbed title="See Document Intelligence in action" />
        </div>
      </Section>

      {/* Before/After */}
      <Section>
        <SectionHeader
          eyebrow="The Difference"
          title="Before & After CaseScribe"
        />
        <div className="content-narrow mt-12 space-y-3">
          {beforeAfter.map((row) => (
            <div
              key={row.before}
              className="grid grid-cols-2 gap-4 rounded-xl border border-slate-200/60 bg-white p-4 transition-shadow hover:shadow-sm"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                  Before
                </span>
                {row.before}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-900">
                <span className="shrink-0 rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                  After
                </span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Stop Reading. Start Deciding."
        description="See how CaseScribe processes your documents in minutes, not hours."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
