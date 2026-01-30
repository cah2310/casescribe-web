"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, Building2, Award } from "lucide-react";

const credentials = [
  {
    icon: Mic,
    label: "AI for PI Law Conference Speaker",
  },
  {
    icon: Building2,
    label: "Hill & Ponton, 30+ Years",
  },
  {
    icon: Award,
    label: "Founder & CEO",
  },
];

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Photo placeholder */}
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-500/20 text-3xl font-bold text-blue-400">
                  CH
                </div>
                <p className="text-lg font-semibold text-white">Chad Hill</p>
                <p className="mt-1 text-sm text-slate-400">
                  Founder & CEO, CaseScribe AI
                </p>
                <p className="mt-4 text-xs text-slate-500">
                  Professional photo — 400×500px
                </p>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          {/* Content */}
          <div>
            <p className="text-eyebrow">
              Your Guide
            </p>
            <h2 className="mt-3 heading-section">
              Built by Someone Who&apos;s Done the Work
            </h2>
            <blockquote className="mt-6 border-l-2 border-blue-500 pl-4 text-lg italic text-slate-600">
              &ldquo;I&apos;ve spent my career at the intersection of disability
              law and technology. CaseScribe exists because I saw firsthand how
              much opportunity gets buried in paperwork.&rdquo;
            </blockquote>
            <p className="mt-6 text-slate-600">
              Chad grew up in a family that dedicated their careers to
              veterans&apos; rights. With decades of experience at Hill &
              Ponton, one of America&apos;s leading disability law firms, he
              founded CaseScribe to bridge the gap between what AI could do and
              what disability law actually needs.
            </p>

            {/* Credentials strip */}
            <div className="mt-8 flex flex-wrap gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="badge-credential"
                >
                  <cred.icon className="h-4 w-4 text-blue-600" />
                  {cred.label}
                </div>
              ))}
            </div>

            {/* Personal CTA */}
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/demo">
                  Book a Call with Chad{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Video placeholder */}
            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <div className="flex h-48 items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-500">
                    Founder intro video coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
