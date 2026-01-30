"use client";

const EVIDENCE_FLAGS: { key: string; label: string; positive?: boolean }[] = [
  { key: "has_va_exam", label: "VA Exam" },
  { key: "has_va_exam_favorable", label: "VA Exam Favorable", positive: true },
  { key: "has_va_exam_unfavorable", label: "VA Exam Unfavorable" },
  { key: "has_private_medical_opinion", label: "Private Medical" },
  { key: "has_treating_physician_opinion", label: "Treating Physician" },
  { key: "has_service_records", label: "Service Records" },
  { key: "has_lay_statement", label: "Lay Statement" },
  { key: "has_buddy_statement", label: "Buddy Statement" },
  { key: "nexus_positive", label: "Nexus Positive", positive: true },
  { key: "nexus_negative", label: "Nexus Negative" },
  { key: "benefit_of_doubt_applied", label: "Benefit of Doubt", positive: true },
  { key: "credibility_positive", label: "Credibility Positive", positive: true },
  { key: "credibility_negative", label: "Credibility Negative" },
  { key: "has_herbicide_exposure", label: "Herbicide Exposure" },
  { key: "has_burn_pit_exposure", label: "Burn Pit Exposure" },
  { key: "is_mst_related", label: "MST Related" },
  { key: "combat_service", label: "Combat Service" },
  { key: "condition_is_secondary", label: "Secondary Condition" },
  { key: "is_tdiu_claim", label: "TDIU Claim" },
  { key: "is_increased_rating_claim", label: "Increased Rating" },
];

interface CaseEvidenceIndicatorsProps {
  metadata: Record<string, unknown>;
}

export function CaseEvidenceIndicators({ metadata }: CaseEvidenceIndicatorsProps) {
  const present = EVIDENCE_FLAGS.filter(({ key }) => metadata[key] === true);

  if (present.length === 0) return null;

  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        Evidence &amp; Indicators
      </h4>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {present.map(({ key, label, positive }) => (
          <span
            key={key}
            className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
              positive
                ? "bg-green-50 text-green-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
