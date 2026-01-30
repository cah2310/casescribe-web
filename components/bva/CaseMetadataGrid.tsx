"use client";

const DISPLAY_FIELDS: { key: string; label: string }[] = [
  { key: "case_id", label: "Case ID" },
  { key: "citation_nr", label: "Citation" },
  { key: "docket_no", label: "Docket No." },
  { key: "decision_date", label: "Decision Date" },
  { key: "judge_canonical", label: "Judge" },
  { key: "counsel", label: "Counsel" },
  { key: "service_branch", label: "Service Branch" },
  { key: "service_era", label: "Service Era" },
  { key: "mos_title", label: "MOS" },
  { key: "general_condition_38", label: "General Condition" },
  { key: "specific_condition_38", label: "Specific Condition" },
  { key: "secondary_to", label: "Secondary To" },
  { key: "special_benefit", label: "Special Benefit" },
  { key: "diagnostic_code_used", label: "Diagnostic Code" },
  { key: "rating_percentage_granted", label: "Rating %" },
  { key: "needed_to_approve", label: "Needed to Approve" },
];

interface CaseMetadataGridProps {
  metadata: Record<string, unknown>;
}

export function CaseMetadataGrid({ metadata }: CaseMetadataGridProps) {
  const entries = DISPLAY_FIELDS.filter(
    ({ key }) =>
      metadata[key] != null &&
      metadata[key] !== "" &&
      String(metadata[key]) !== "nan",
  );

  if (entries.length === 0) return null;

  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        Case Details
      </h4>
      <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2">
        {entries.map(({ key, label }) => (
          <div key={key}>
            <dt className="text-[11px] text-slate-400">{label}</dt>
            <dd className="text-sm text-slate-800">
              {String(metadata[key])}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
