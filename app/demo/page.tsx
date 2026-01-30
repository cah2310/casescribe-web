import type { Metadata } from "next";
import { Section } from "@/components/marketing/section";
import { CheckCircle, Clock, Users, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See CaseScribe AI in action. Book a personalized demo and learn how AI can transform your disability law practice.",
};

const benefits = [
  {
    icon: Clock,
    title: "30-Minute Walkthrough",
    description: "See the full platform tailored to your practice area.",
  },
  {
    icon: Users,
    title: "Personalized Demo",
    description: "We'll show you CaseScribe with your actual workflow in mind.",
  },
  {
    icon: ShieldCheck,
    title: "No Commitment",
    description: "Ask questions, see the product, decide on your own time.",
  },
];

export default function DemoPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left: info */}
        <div>
          <p className="text-eyebrow">
            Book a Demo
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            See CaseScribe in Action
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Get a personalized walkthrough of how CaseScribe processes documents,
            identifies opportunities, and builds case strategy — all in under 30
            minutes.
          </p>

          <div className="mt-8 space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="icon-box-sm shrink-0 bg-blue-50">
                  <b.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border bg-slate-50 p-4">
            <p className="text-sm text-slate-600">
              <strong className="text-slate-900">What to expect:</strong> A
              member of our team will walk you through the platform, answer your
              questions, and help you determine if CaseScribe is right for your
              firm.
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {[
              "Process 5,000 pages in 10 minutes",
              "AI-powered condition detection & case strategy",
              "$85/case with no contracts",
              "SOC 2 Type II certified",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-slate-700"
              >
                <CheckCircle className="h-4 w-4 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Calendar embed placeholder */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <div className="flex min-h-[500px] items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50">
            <div className="text-center px-4">
              <p className="text-sm font-medium text-slate-500">
                Calendar Booking Widget
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Cal.com or Calendly embed will be placed here
              </p>
              <div className="mt-4 rounded-md bg-slate-100 p-3">
                <code className="text-xs text-slate-500">
                  {`<!-- Replace with Cal.com embed -->`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
