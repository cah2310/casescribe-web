import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import {
  FileText,
  Brain,
  Headphones,
  Scale,
  Shield,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Solutions",
  description:
    "Explore CaseScribe's AI-powered platform for disability law — document intelligence, case strategy, and solutions for VA, SSA, and workers' comp.",
};

const products = [
  {
    title: "Document Intelligence",
    description: "OCR, classify, and extract from 150+ document types",
    href: "/products/document-intelligence",
    icon: FileText,
  },
  {
    title: "Case Strategy",
    description: "AI-powered scenario planning and filing recommendations",
    href: "/products/case-strategy",
    icon: Brain,
  },
  {
    title: "Ambient CRM",
    description: "Coming soon — intelligent case management",
    href: "/products/ambient-crm",
    icon: Headphones,
  },
];

const solutions = [
  {
    title: "VA Disability",
    description: "C-file processing, BVA decisions, condition detection",
    href: "/solutions/va-disability",
    icon: Scale,
  },
  {
    title: "Social Security",
    description: "SSA workflow and medical records analysis",
    href: "/solutions/social-security",
    icon: Shield,
  },
  {
    title: "Workers' Compensation",
    description: "WC-specific document handling and analysis",
    href: "/solutions/workers-comp",
    icon: Briefcase,
  },
];

function LinkCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link
      href={href}
      className="group card-light-hover hover-glow-blue flex flex-col gap-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
        <Icon className="h-5 w-5 text-[#2C5DFF]" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      <span className="mt-auto flex items-center gap-1 text-sm font-medium text-[#2C5DFF] opacity-0 transition-opacity group-hover:opacity-100">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Platform"
          title="Products & Solutions"
          description="AI-powered tools built by disability law experts to streamline every step of case analysis."
        />

        <div className="mt-16">
          <p className="text-eyebrow">Products</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <LinkCard key={item.href} {...item} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-eyebrow">Solutions by Practice Area</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <LinkCard key={item.href} {...item} />
            ))}
          </div>
        </div>
      </Section>

      <CTABanner
        title="See CaseScribe in Action"
        description="Book a live demo and discover how AI can transform your disability law practice."
      />
    </>
  );
}
