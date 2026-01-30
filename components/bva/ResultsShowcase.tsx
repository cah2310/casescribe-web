"use client";

import { Filter, Search, BarChart3, FileText, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/marketing/fade-in";
import { AnimatedCounter } from "@/components/marketing/animated-counter";

const CAPABILITIES = [
  {
    title: "16 Filter Dimensions",
    description: "Outcome, condition, judge, evidence type, and more",
    icon: Filter,
    accent: "blue" as const,
  },
  {
    title: "Semantic Search",
    description: "Find decisions by meaning, not just keywords",
    icon: Search,
    accent: "teal" as const,
  },
  {
    title: "Pattern Analysis",
    description: "AI-powered grant rate and trend insights",
    icon: BarChart3,
    accent: "violet" as const,
  },
  {
    title: "Full Decision Text",
    description: "Complete BVA decision text with key excerpts",
    icon: FileText,
    accent: "green" as const,
  },
];

const ACCENT_STYLES = {
  blue: {
    box: "bg-accent-blue text-accent-blue",
    hover: "hover-glow-blue",
  },
  teal: {
    box: "bg-accent-teal text-accent-teal",
    hover: "hover-glow-teal",
  },
  violet: {
    box: "bg-accent-violet text-accent-violet",
    hover: "hover-glow-violet",
  },
  green: {
    box: "bg-accent-green text-accent-green",
    hover: "hover-glow-green",
  },
};

const FILTERS = [
  "Outcome",
  "General Condition",
  "Specific Condition",
  "Judge",
  "Year",
  "VA Exam",
  "Buddy Statement",
  "Nexus Letter",
  "Secondary Condition",
  "Combat Veteran",
  "Representation",
  "Hearing Type",
  "Remand History",
  "Service Branch",
  "Toxic Exposure",
  "Legal Reasoning",
];

export function ResultsShowcase() {
  return (
    <div className="relative flex h-full flex-col items-center overflow-y-auto bg-slate-50 px-6 py-10">
      {/* Dot grid background */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      <div className="relative z-10 w-full max-w-lg space-y-10">
        {/* Section A: Database Stats */}
        <FadeIn>
          <div className="text-center">
            <p className="text-eyebrow mb-6">Database</p>
            <div className="flex items-center justify-center gap-6">
              <AnimatedCounter
                end={19000}
                suffix="+"
                label="BVA Decisions"
                numberClassName="text-3xl font-bold text-[#2C5DFF]"
                labelClassName="mt-1 text-xs font-medium text-slate-500"
              />
              <div className="h-10 w-px bg-slate-200" />
              <AnimatedCounter
                end={140}
                suffix="+"
                label="Data Fields"
                numberClassName="text-3xl font-bold text-[#2C5DFF]"
                labelClassName="mt-1 text-xs font-medium text-slate-500"
              />
              <div className="h-10 w-px bg-slate-200" />
              <AnimatedCounter
                end={2024}
                label="Full Year"
                numberClassName="text-3xl font-bold text-[#2C5DFF]"
                labelClassName="mt-1 text-xs font-medium text-slate-500"
              />
            </div>
          </div>
        </FadeIn>

        {/* Section B: Capabilities Grid */}
        <FadeIn delay={0.15}>
          <div>
            <p className="text-eyebrow mb-4 text-center">Capabilities</p>
            <div className="grid grid-cols-2 gap-3">
              {CAPABILITIES.map((cap) => {
                const style = ACCENT_STYLES[cap.accent];
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className={`rounded-xl border border-slate-200/60 bg-white p-4 transition-all duration-300 ${style.hover}`}
                  >
                    <div className={`icon-box-sm ${style.box} mb-3`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {cap.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Section C: Available Filters */}
        <FadeIn delay={0.3}>
          <div>
            <p className="text-eyebrow mb-4 text-center">Filter By</p>
            <div className="flex flex-wrap justify-center gap-2">
              {FILTERS.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Section D: Footer */}
        <FadeIn delay={0.45}>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-powered by Claude + Gemini</span>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
