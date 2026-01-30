import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const revalidate = 3600; // ISR: revalidate every hour

const BVA_API_URL = process.env.BVA_API_URL || "";

interface CaseDetail {
  case_id: string;
  metadata: Record<string, unknown>;
  full_text: string | null;
  chunk_count: number;
}

async function fetchCase(citation: string): Promise<CaseDetail | null> {
  if (!BVA_API_URL) return null;
  try {
    const res = await fetch(
      `${BVA_API_URL}/api/cases/${encodeURIComponent(citation)}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citation: string }>;
}): Promise<Metadata> {
  const { citation } = await params;
  return { title: `BVA Decision ${citation}` };
}

export default async function BVADecisionPage({
  params,
}: {
  params: Promise<{ citation: string }>;
}) {
  const { citation } = await params;
  const detail = await fetchCase(citation);

  if (!detail) {
    return (
      <Section>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/resources/bva-decisions"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to BVA Decisions
          </Link>
          <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <h1 className="text-2xl font-bold text-slate-900">
              BVA Decision: {citation}
            </h1>
            <p className="mt-4 text-slate-500">
              This decision could not be loaded. It may not exist in our database
              yet, or the API service may be unavailable.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/resources/bva-decisions">Back to Decisions</Link>
              </Button>
              <Button asChild>
                <Link href="/explore">Open Explorer</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  const m = detail.metadata as Record<string, string | number | boolean | null>;

  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <Link
          href="/resources/bva-decisions"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to BVA Decisions
        </Link>

        <div className="mt-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {String(m.specific_condition_38 || m.general_condition_38 || `Case ${citation}`)}
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                {String(m.judge_canonical ?? "")} &middot;{" "}
                {String(m.year ?? "")} &middot; Case ID: {detail.case_id}
              </p>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${
                m.outcome === "Granted"
                  ? "bg-green-100 text-green-800"
                  : m.outcome === "Denied"
                    ? "bg-red-100 text-red-800"
                    : "bg-amber-100 text-amber-800"
              }`}
            >
              {String(m.outcome || "Unknown")}
            </span>
          </div>

          {/* Summary */}
          {m.case_summary && (
            <div className="mt-6 rounded-lg border bg-white p-4">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Summary
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {String(m.case_summary)}
              </p>
            </div>
          )}

          {/* Rationale */}
          {m.rationale && (
            <div className="mt-4 rounded-lg border bg-white p-4">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Rationale
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {String(m.rationale)}
              </p>
            </div>
          )}

          {/* Key metadata */}
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Service Branch", value: m.service_branch },
              { label: "Special Benefit", value: m.special_benefit },
              { label: "Diagnostic Code", value: m.diagnostic_code_used },
              { label: "Docket No.", value: m.docket_no },
            ]
              .filter((f) => f.value)
              .map((f) => (
                <div key={f.label} className="rounded-lg border bg-white p-3">
                  <dt className="text-[11px] text-slate-400">{f.label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-slate-800">
                    {String(f.value)}
                  </dd>
                </div>
              ))}
          </div>

          {/* Full text */}
          {detail.full_text && (
            <div className="mt-6 rounded-lg border bg-white p-4">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Full Decision Text
              </h2>
              <pre className="mt-2 max-h-[600px] overflow-y-auto whitespace-pre-wrap text-xs leading-relaxed text-slate-700">
                {detail.full_text}
              </pre>
            </div>
          )}

          {/* Explore CTA */}
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href={`/explore?case=${encodeURIComponent(detail.case_id)}`}>
                Analyze in BVA Explorer
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
