import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import {
  BookOpen,
  Gavel,
  Wrench,
  Newspaper,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Tools and insights for disability law professionals — blog, BVA decision search, 3.156(c) analyzer, and product changelog.",
};

const resources = [
  {
    title: "Blog",
    description: "Product updates, legal tech insights, and tutorials",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "BVA Decisions",
    description: "Search and explore Board of Veterans' Appeals decisions",
    href: "/resources/bva-decisions",
    icon: Gavel,
  },
  {
    title: "3.156(c) Analyzer",
    description: "AI-powered service record analysis tool",
    href: "/resources/tools/3156c-analyzer",
    icon: Wrench,
  },
  {
    title: "Changelog",
    description: "Latest product updates and releases",
    href: "/changelog",
    icon: Newspaper,
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

export default function ResourcesPage() {
  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          eyebrow="Resources"
          title="Tools & Insights"
          description="Free tools, research, and updates to help you stay ahead in disability law."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {resources.map((item) => (
            <LinkCard key={item.href} {...item} />
          ))}
        </div>
      </Section>

      <CTABanner
        title="Ready to Transform Your Practice?"
        description="See how CaseScribe AI helps disability law firms process cases faster and more accurately."
      />
    </>
  );
}
