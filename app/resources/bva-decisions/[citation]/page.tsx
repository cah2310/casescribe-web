import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/marketing/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "BVA Decision",
};

export default async function BVADecisionPage({
  params,
}: {
  params: Promise<{ citation: string }>;
}) {
  const { citation } = await params;

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <Link
          href="/resources/bva-decisions"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to BVA Search
        </Link>
        <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            BVA Decision: {citation}
          </h1>
          <p className="mt-4 text-slate-500">
            Individual BVA decision pages will be available once the database is
            connected.
          </p>
          <Button className="mt-6" variant="outline" asChild>
            <Link href="/resources/bva-decisions">Back to Search</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
