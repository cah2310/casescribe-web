import type { Metadata } from "next";
import { Section } from "@/components/marketing/section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CaseScribe AI Terms of Service.",
};

export default function TermsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: January 29, 2026
        </p>

        <div className="mt-8 space-y-6 text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing or using CaseScribe AI (&ldquo;the Service&rdquo;),
              you agree to be bound by these Terms of Service. If you do not
              agree, do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              2. Description of Service
            </h2>
            <p className="mt-2">
              CaseScribe provides AI-powered document intelligence and case
              strategy tools for legal professionals. The Service processes legal
              documents, extracts data, and provides analytical insights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              3. Your Data
            </h2>
            <p className="mt-2">
              You retain all rights to the documents and data you upload to the
              Service. We do not claim ownership of your data. You may export or
              delete your data at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Pricing & Payment
            </h2>
            <p className="mt-2">
              CaseScribe is billed per case as described on our{" "}
              <a href="/pricing" className="text-blue-600 hover:underline">
                Pricing page
              </a>
              . There are no annual contracts or minimum commitments. We offer a
              90-day money-back guarantee.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Not Legal Advice
            </h2>
            <p className="mt-2">
              CaseScribe provides analytical tools and information. The Service
              does not provide legal advice. All case decisions and legal
              strategies should be reviewed and approved by qualified legal
              professionals.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p className="mt-2">
              CaseScribe&apos;s liability is limited to the fees paid for the
              Service during the 12 months preceding the claim. We are not liable
              for indirect, incidental, or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Contact
            </h2>
            <p className="mt-2">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:legal@casescribe.ai"
                className="text-blue-600 hover:underline"
              >
                legal@casescribe.ai
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
