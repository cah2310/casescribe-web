"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { DarkSection } from "@/components/marketing/dark-section";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import {
  CheckCircle,
  ArrowRight,
  Calculator,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";

/* ─── Pricing Toggle + Tiers ─── */
const tiers = [
  {
    name: "Pro",
    monthlyPrice: "$85",
    annualPrice: "$85",
    unit: "/case",
    description: "Everything you need. No contracts. Cancel anytime.",
    features: [
      "Full document intelligence pipeline",
      "AI case strategy & condition detection",
      "150+ document type classification",
      "Unlimited users per organization",
      "SOC 2 Type II compliant",
      "Priority email support",
      "Full data export anytime",
      "3.156(c) service record analysis",
    ],
    cta: "Get Started",
    href: "/demo",
    highlighted: true,
  },
  {
    name: "Volume / Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    unit: "",
    description: "For firms processing 50+ cases per month.",
    features: [
      "Everything in Pro",
      "Volume pricing discounts",
      "Custom integrations (API access)",
      "Dedicated account manager",
      "Custom onboarding & training",
      "SLA guarantees",
      "BAA available",
      "Bring Your Own Keys (BYOK) option",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

function PricingTiers() {
  const [annual, setAnnual] = useState(false);

  return (
    <Section>
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        description="No contracts. No lock-in. $85/case. Others charge $150+ with annual commitments."
      />

      {/* Billing toggle */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <span
          className={`text-sm font-medium ${!annual ? "text-slate-900" : "text-slate-500"}`}
        >
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative h-7 w-12 rounded-full transition-colors ${
            annual ? "bg-blue-600" : "bg-slate-300"
          }`}
        >
          <div
            className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
              annual ? "translate-x-5.5" : "translate-x-0.5"
            }`}
          />
        </button>
        <span
          className={`text-sm font-medium ${annual ? "text-slate-900" : "text-slate-500"}`}
        >
          Annual
        </span>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-8 lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl p-8 transition-all duration-300 ${
              tier.highlighted
                ? "gradient-border bg-white shadow-xl shadow-blue-500/10"
                : "border border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-6 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg shadow-blue-500/25">
                <Sparkles className="h-3 w-3" />
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-900">
                {annual ? tier.annualPrice : tier.monthlyPrice}
              </span>
              <span className="text-slate-500">{tier.unit}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
            <Button
              className={`mt-6 w-full ${
                tier.highlighted
                  ? "shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
                  : ""
              }`}
              variant={tier.highlighted ? "default" : "outline"}
              asChild
            >
              <Link href={tier.href}>
                {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <ul className="mt-8 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Competitor comparison callout */}
      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 text-center">
        <p className="text-sm font-medium text-blue-900">
          Others charge $150+/case with annual contracts and vendor lock-in.
        </p>
        <p className="mt-1 text-sm text-blue-700">
          CaseScribe: $85/case. No contracts. Your data stays yours. Export
          everything. Leave anytime.
        </p>
      </div>

      {/* Data portability promise */}
      <div className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-sm text-slate-500">
          <strong className="text-slate-700">Data portability promise:</strong>{" "}
          Your data stays yours. Export everything. Leave anytime.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          <strong className="text-slate-700">Migration offer:</strong>{" "}
          Switching from a competitor? We&apos;ll migrate your data for free.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          <strong className="text-slate-700">Risk reversal:</strong> 90-day
          money-back guarantee.
        </p>
      </div>
    </Section>
  );
}

/* ─── ROI Calculator ─── */
function ROICalculator() {
  const [casesPerMonth, setCasesPerMonth] = useState(20);
  const hoursPerCaseManual = 4;
  const hourlyRate = 50;
  const competitorPrice = 150;
  const caseScribePrice = 85;

  const manualCost = casesPerMonth * hoursPerCaseManual * hourlyRate;
  const competitorCost = casesPerMonth * competitorPrice;
  const caseScribeCost = casesPerMonth * caseScribePrice;
  const savingsVsManual = manualCost - caseScribeCost;
  const savingsVsCompetitor = competitorCost - caseScribeCost;

  // Calculate bar widths for visual comparison
  const maxCost = Math.max(manualCost, competitorCost, caseScribeCost);
  const manualWidth = (manualCost / maxCost) * 100;
  const competitorWidth = (competitorCost / maxCost) * 100;
  const caseScribeWidth = (caseScribeCost / maxCost) * 100;

  return (
    <DarkSection className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ROI Calculator"
          title="See How Much You'll Save"
          description="Enter your monthly case volume to see your potential savings."
          dark
        />
        <div className="content-narrow mt-12">
          <div className="card-dark">
            <div className="flex items-center gap-3">
              <Calculator className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">
                Monthly Case Volume
              </h3>
            </div>
            <div className="mt-6">
              <input
                type="range"
                min={5}
                max={200}
                value={casesPerMonth}
                onChange={(e) => setCasesPerMonth(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <div className="mt-2 text-center text-3xl font-bold text-blue-400">
                {casesPerMonth} cases/month
              </div>
            </div>

            {/* Bar chart comparison */}
            <div className="mt-8 space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Manual Review</span>
                  <span className="text-sm font-bold text-slate-300">
                    ${manualCost.toLocaleString()}/mo
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-slate-500 transition-all duration-500"
                    style={{ width: `${manualWidth}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-slate-400">Competitors</span>
                  <span className="text-sm font-bold text-slate-300">
                    ${competitorCost.toLocaleString()}/mo
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-amber-500/70 transition-all duration-500"
                    style={{ width: `${competitorWidth}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-400">
                    CaseScribe
                  </span>
                  <span className="text-sm font-bold text-blue-400">
                    ${caseScribeCost.toLocaleString()}/mo
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="glow-blue h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                    style={{ width: `${caseScribeWidth}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center">
                <p className="text-sm font-medium text-emerald-400">
                  Save vs. Manual Review
                </p>
                <p className="text-2xl font-bold text-emerald-300">
                  ${savingsVsManual.toLocaleString()}/mo
                </p>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center">
                <p className="text-sm font-medium text-emerald-400">
                  Save vs. Competitors
                </p>
                <p className="text-2xl font-bold text-emerald-300">
                  ${savingsVsCompetitor.toLocaleString()}/mo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DarkSection>
  );
}

/* ─── Testimonial ─── */
function PricingTestimonial() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <TestimonialCard
          quote="At $85/case with no contracts, CaseScribe is the best value in legal AI. We tried competitors at $150+/case and CaseScribe finds more opportunities."
          name="Robert Lawson"
          title="Managing Partner"
          firm="Lawson Veterans Law"
        />
      </div>
    </Section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: "What counts as a 'case'?",
    a: "A case is a single veteran's or claimant's file that you upload for processing. Each case is billed once regardless of the number of pages or documents within it.",
  },
  {
    q: "Are there any contracts or commitments?",
    a: "No. CaseScribe is pay-as-you-go. No annual contracts, no minimum commitments, no lock-in. Use it for one case or one thousand.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. You can export all your data at any time in standard formats. Your data belongs to you, not us.",
  },
  {
    q: "Is CaseScribe HIPAA compliant?",
    a: "CaseScribe is SOC 2 Type II certified and can provide a Business Associate Agreement (BAA) for enterprises. We follow strict data handling protocols for protected health information.",
  },
  {
    q: "What if I'm switching from a competitor?",
    a: "We offer free migration assistance. Our team will help you transfer your existing case data to CaseScribe at no additional cost.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes. We offer a 90-day money-back guarantee. If CaseScribe doesn't meet your expectations, we'll refund your payments — no questions asked.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-slate-50">
      <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="mx-auto mt-12 max-w-2xl space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-slate-900">
                <HelpCircle className="h-4 w-4 shrink-0 text-blue-600" />
                {faq.q}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="border-t px-6 py-4">
                <p className="text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Page ─── */
export default function PricingPage() {
  return (
    <>
      <PricingTiers />
      <ROICalculator />
      <PricingTestimonial />
      <FAQSection />
      <CTABanner
        title="Ready to Help More Veterans?"
        description="$85/case. No contracts. 90-day money-back guarantee. Start today."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
        secondaryLabel="Contact Sales"
        secondaryHref="/contact"
      />
    </>
  );
}
