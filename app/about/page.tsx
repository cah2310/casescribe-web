import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { ArrowRight, Scale, Heart, Shield, Mic, Building2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "CaseScribe AI was founded by disability law experts at Hill & Ponton with 30+ years of experience helping veterans get the benefits they deserve.",
};

const values = [
  {
    icon: Scale,
    title: "Justice Through Technology",
    description:
      "We believe AI should level the playing field, helping representatives find every opportunity their clients deserve.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Heart,
    title: "Veterans First",
    description:
      "Every feature we build starts with one question: will this help a veteran get the benefits they've earned?",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Trust Is Non-Negotiable",
    description:
      "We handle sensitive client data with the same care we'd want for our own legal matters. SOC 2 Type II certified from day one.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const timeline = [
  {
    year: "1993",
    title: "Hill & Ponton Founded",
    description: "Matthew Hill and Robert Ponton establish a disability law firm dedicated to helping veterans.",
  },
  {
    year: "2010",
    title: "Digital Transformation",
    description: "The firm begins digitizing processes, seeing the potential for technology to scale legal services.",
  },
  {
    year: "2020",
    title: "AI Research Begins",
    description: "After reviewing tens of thousands of cases, the team identifies AI as the solution to the document review bottleneck.",
  },
  {
    year: "2023",
    title: "CaseScribe Founded",
    description: "Chad Hill launches CaseScribe AI, bringing 30 years of disability law expertise to AI-powered case analysis.",
  },
  {
    year: "2024",
    title: "SOC 2 & Launch",
    description: "CaseScribe achieves SOC 2 Type II certification and launches to disability law firms nationwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with full-width image placeholder */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(59,130,246,0.1),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-eyebrow-dark">
              Our Story
            </p>
            <h1 className="mt-3 heading-page-dark sm:text-5xl md:text-6xl">
              Built by the People Who Do the Work
            </h1>
            <p className="mt-6 text-lg text-slate-400">
              CaseScribe wasn&apos;t born in a Silicon Valley incubator. It was
              built inside Hill &amp; Ponton, a disability law firm that has spent
              30+ years helping veterans get the benefits they deserve.
            </p>
          </div>

          {/* Hero image placeholder */}
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden card-dark">
            <div className="flex aspect-[2/1] items-center justify-center">
              <div className="text-center">
                <Building2 className="mx-auto h-12 w-12 text-slate-600" />
                <p className="mt-3 text-sm font-medium text-slate-400">
                  Team / conference photo — 1200×600px
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  CaseScribe team at the AI for PI Law Conference
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-section">
            Why a Law Firm Built an AI Company
          </h2>
          <div className="mt-6 space-y-4 text-body">
            <p>
              After reviewing tens of thousands of veterans&apos; cases, we knew
              the biggest bottleneck wasn&apos;t legal strategy — it was document
              review. A single C-file can be over 1,000 pages. Critical evidence
              gets buried. Opportunities get missed.
            </p>
            <p>
              We tried every tool on the market. They organized files, but they
              didn&apos;t think like attorneys. They didn&apos;t flag secondary
              conditions. They didn&apos;t identify 3.156(c) reopening
              opportunities. They didn&apos;t build case strategy.
            </p>
            <p>
              So we built CaseScribe — an AI that doesn&apos;t just organize
              documents, but finds the opportunities hidden inside them. Built by
              people who have read more C-files than anyone in the industry.
            </p>
          </div>
        </div>
      </Section>

      {/* Chad Hill — large, prominent section */}
      <Section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Photo placeholder */}
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-blue-500/20 text-4xl font-bold text-blue-400">
                    CH
                  </div>
                  <p className="text-xl font-semibold text-white">Chad Hill</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Founder & CEO
                  </p>
                  <p className="mt-6 text-xs text-slate-500">
                    Professional photo — 400×500px
                  </p>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-eyebrow">
                Founder & CEO
              </p>
              <h2 className="mt-2 heading-section">
                Chad Hill
              </h2>
              <blockquote className="mt-6 border-l-2 border-blue-500 pl-4 text-lg italic text-slate-600">
                &ldquo;I&apos;ve spent my career at the intersection of
                disability law and technology. CaseScribe exists because I saw
                firsthand how much opportunity gets buried in paperwork.&rdquo;
              </blockquote>
              <p className="mt-6 text-slate-600">
                Chad grew up in a family that dedicated their careers to
                veterans&apos; rights. With a background spanning law firm
                operations, technology, and veterans advocacy, he founded
                CaseScribe to bridge the gap between what AI could do and what
                disability law actually needs.
              </p>
              <p className="mt-3 text-slate-600">
                His mission: help representatives help more disabled people by
                eliminating the document review bottleneck that limits every
                practice.
              </p>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Mic, label: "AI for PI Law Conference Speaker" },
                  { icon: Building2, label: "Hill & Ponton, 30+ Years" },
                  { icon: Award, label: "Founder & CEO" },
                ].map((cred) => (
                  <div
                    key={cred.label}
                    className="badge-credential bg-white"
                  >
                    <cred.icon className="h-4 w-4 text-blue-600" />
                    {cred.label}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/demo">
                    Book a Call with Chad{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader
          eyebrow="Our Journey"
          title="From Law Firm to AI Company"
          description="30 years of disability law expertise, now powered by AI."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative border-l-2 border-blue-200 pl-8">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative pb-10 ${i === timeline.length - 1 ? "pb-0" : ""}`}
              >
                {/* Dot */}
                <div className="absolute -left-[calc(2rem+5px)] flex h-3 w-3 items-center justify-center rounded-full bg-blue-600 ring-4 ring-blue-100" />
                <div className="inline-block rounded-full bg-blue-100 px-3 py-0.5 text-xs font-bold text-blue-700">
                  {item.year}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values as large gradient cards */}
      <Section className="bg-[#F8F8F6]">
        <SectionHeader eyebrow="Our Values" title="What We Stand For" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gradient top accent */}
              <div
                className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${value.gradient}`}
              />
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-lg`}
              >
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section">
            Our Mission
          </h2>
          <p className="mt-6 text-2xl font-medium italic text-slate-600">
            &ldquo;Helping representatives help more disabled people.&rdquo;
          </p>
          <p className="mt-4 text-slate-500">
            Every feature, every line of code, every business decision starts and
            ends with this.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/demo">
                Join Our Mission <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <CTABanner
        title="Ready to Help More Veterans?"
        description="See how CaseScribe can transform your practice."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
      />
    </>
  );
}
