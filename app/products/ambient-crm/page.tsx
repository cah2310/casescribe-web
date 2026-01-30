"use client";

import { useState } from "react";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Headphones,
  ClipboardList,
  Clock,
  MessageSquare,
  Zap,
  CheckCircle,
} from "lucide-react";

const upcoming = [
  {
    icon: ClipboardList,
    title: "Auto-Populated Case Forms",
    description:
      "Case intake forms that pre-fill from your existing documents and client data.",
  },
  {
    icon: Clock,
    title: "Intelligent Deadline Tracking",
    description:
      "Never miss a filing deadline. AI-powered tracking that understands VA, SSA, and WC timelines.",
  },
  {
    icon: MessageSquare,
    title: "Client Communication Hub",
    description:
      "Centralized communication history with contextual case information always at hand.",
  },
  {
    icon: Zap,
    title: "Task Automation",
    description:
      "Automate repetitive workflows — follow-ups, status updates, and document requests.",
  },
];

export default function AmbientCRMPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <Headphones className="h-7 w-7 text-blue-600" />
          </div>
          <div className="mb-4 inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
            Coming Soon
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Ambient CRM
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            A case management system that learns from your cases, auto-populates
            forms, tracks deadlines, and surfaces the right information at the
            right time.
          </p>

          {/* Waitlist */}
          {joined ? (
            <div className="mx-auto mt-8 max-w-md rounded-xl border border-green-200 bg-green-50 p-6">
              <CheckCircle className="mx-auto h-8 w-8 text-green-600" />
              <p className="mt-2 text-sm font-medium text-green-900">
                You&apos;re on the list!
              </p>
              <p className="mt-1 text-sm text-green-700">
                We&apos;ll notify you when Ambient CRM is ready.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
              className="mx-auto mt-8 flex max-w-md gap-3"
            >
              <Input
                type="email"
                placeholder="you@lawfirm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit">Join Waitlist</Button>
            </form>
          )}
        </div>
      </Section>

      {/* Upcoming features */}
      <Section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            What&apos;s Coming
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {upcoming.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-white p-6"
              >
                <feature.icon className="h-6 w-6 text-blue-600" />
                <h3 className="mt-3 text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
