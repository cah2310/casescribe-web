"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FileSearch,
  Upload,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function Analyzer3156cPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Free Tool"
          title="3.156(c) Service Record Analyzer"
          description="Upload old and new service records to identify previously unfiled conditions now supported by newly associated evidence under 38 C.F.R. § 3.156(c)."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          {!submitted ? (
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FileSearch className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Analyze Service Records
                </h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <Label>Original Service Records</Label>
                  <div className="mt-1.5 rounded-lg border-2 border-dashed border-slate-200 p-6 text-center hover:border-blue-300 transition-colors">
                    <Upload className="mx-auto h-6 w-6 text-slate-400" />
                    <p className="mt-2 text-sm text-slate-500">
                      Upload original service records (PDF, TIFF, JPG)
                    </p>
                    <Input type="file" className="mt-3" accept=".pdf,.tiff,.jpg,.png" />
                  </div>
                </div>

                <div>
                  <Label>New Service Records</Label>
                  <div className="mt-1.5 rounded-lg border-2 border-dashed border-slate-200 p-6 text-center hover:border-blue-300 transition-colors">
                    <Upload className="mx-auto h-6 w-6 text-slate-400" />
                    <p className="mt-2 text-sm text-slate-500">
                      Upload newly obtained service records
                    </p>
                    <Input type="file" className="mt-3" accept=".pdf,.tiff,.jpg,.png" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="conditions">Claimed Conditions</Label>
                  <Textarea
                    id="conditions"
                    placeholder="List claimed conditions (e.g., PTSD, hearing loss, tinnitus)"
                    className="mt-1.5"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email (for results)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@lawfirm.com"
                    required
                    className="mt-1.5"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Analyze Records <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-slate-400 text-center">
                  Free tier: 1 analysis per month. CaseScribe customers get
                  unlimited access.
                </p>
              </form>
            </div>
          ) : (
            <div className="rounded-2xl border bg-white p-8 shadow-sm text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <AlertCircle className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Tool Coming Soon
              </h3>
              <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                The 3.156(c) analyzer is currently in beta. We&apos;ll notify you
                at the email provided when it&apos;s available.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                In the meantime, CaseScribe customers have full access to
                3.156(c) analysis as part of the Case Strategy product.
              </p>
              <Button className="mt-6" asChild>
                <a href="/demo">Book a Demo</a>
              </Button>
            </div>
          )}
        </div>
      </Section>

      {/* How it works */}
      <Section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900">
            What is 38 C.F.R. &sect; 3.156(c)?
          </h2>
          <p className="mt-4 text-slate-600">
            Under 38 C.F.R. &sect; 3.156(c), when relevant official service
            department records are obtained that existed but were not associated
            with the claims file when the VA previously decided a claim, the VA
            must reconsider the claim. This can result in earlier effective dates
            and retroactive benefits.
          </p>
          <p className="mt-4 text-slate-600">
            CaseScribe&apos;s 3.156(c) analyzer compares old and new service
            records to identify conditions that may qualify for reconsideration
            under this regulation — a frequently overlooked opportunity that can
            result in significant retroactive benefits for veterans.
          </p>
          <ul className="mt-6 space-y-2">
            {[
              "Compares original and newly obtained service records",
              "Identifies conditions supported by new evidence",
              "Cites specific service record entries with quotes",
              "Recommends filing strategy for 3.156(c) claims",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-slate-700"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CTABanner
        title="Get Unlimited 3.156(c) Analysis"
        description="CaseScribe customers get unlimited 3.156(c) analysis as part of the Case Strategy product."
        primaryLabel="Book a Demo"
        primaryHref="/demo"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
