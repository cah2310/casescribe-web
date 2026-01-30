import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/marketing/section";
import { CTABanner } from "@/components/marketing/cta-banner";
import {
  ShieldCheck,
  Lock,
  Database,
  FileKey,
  Server,
  Eye,
  KeyRound,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security",
  description:
    "CaseScribe is SOC 2 Type II certified with enterprise-grade security. Learn about our data handling, encryption, and compliance practices.",
};

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II Certified",
    description:
      "Independently audited security controls covering availability, confidentiality, and processing integrity.",
  },
  {
    icon: Lock,
    title: "Encryption at Rest & In Transit",
    description:
      "AES-256 encryption for data at rest. TLS 1.3 for all data in transit. Zero plaintext storage of sensitive documents.",
  },
  {
    icon: Database,
    title: "Data Isolation",
    description:
      "Each organization's data is logically isolated. No cross-tenant access. Role-based access controls at every level.",
  },
  {
    icon: FileKey,
    title: "BAA Available",
    description:
      "Business Associate Agreements available for firms handling protected health information under HIPAA.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description:
      "Hosted on SOC 2 compliant infrastructure. Regular penetration testing. Automated vulnerability scanning.",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description:
      "Complete audit trail of all data access and modifications. Exportable logs for your compliance needs.",
  },
  {
    icon: KeyRound,
    title: "Bring Your Own Keys (BYOK)",
    description:
      "Enterprise option to use your own LLM API keys and encryption keys. Maximum control over your data pipeline.",
  },
  {
    icon: FileText,
    title: "Data Portability",
    description:
      "Export all your data at any time in standard formats. No vendor lock-in. Your data belongs to you.",
  },
];

const abaGuidance = [
  "Client confidentiality obligations under Model Rule 1.6",
  "Competence requirements for understanding AI tools (Rule 1.1)",
  "Supervision duties when AI assists in legal work (Rules 5.1, 5.3)",
  "Communication obligations about AI use with clients (Rule 1.4)",
];

export default function SecurityPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Security & Compliance"
          title="Enterprise-Grade Security for Sensitive Legal Data"
          description="We handle your clients' most sensitive information. Our security practices reflect that responsibility."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="rounded-xl border bg-white p-6">
              <div className="icon-box-sm bg-blue-50">
                <feature.icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Data handling */}
      <Section className="bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900">
            How We Handle Your Data
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Document Processing
              </h3>
              <p className="mt-2 text-slate-600">
                Documents are processed through our secure AI pipeline and stored
                encrypted in your organization&apos;s isolated data partition. We
                never use your data to train AI models. Your documents are yours
                alone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                AI Model Usage
              </h3>
              <p className="mt-2 text-slate-600">
                CaseScribe uses leading AI models with data processing agreements
                that prohibit model training on your data. With our BYOK option,
                you can use your own API keys for complete control.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Data Retention
              </h3>
              <p className="mt-2 text-slate-600">
                You control your data retention. Delete individual cases or your
                entire account at any time. Deletion is permanent and
                irreversible — we don&apos;t keep shadow copies.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ABA Guidance */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900">
            ABA Guidance on AI in Legal Practice
          </h2>
          <p className="mt-4 text-slate-600">
            CaseScribe is designed with ABA ethics guidance in mind. Key
            considerations for firms using AI tools:
          </p>
          <ul className="mt-6 space-y-3">
            {abaGuidance.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-700"
              >
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            CaseScribe provides the transparency, audit trails, and data controls
            that firms need to meet these obligations. Our team includes
            disability law practitioners who understand these requirements
            firsthand.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Questions About Security?"
        description="Our team is happy to walk through our security practices, share our SOC 2 report, or discuss a BAA."
        primaryLabel="Contact Security Team"
        primaryHref="/contact"
        secondaryLabel="Book a Demo"
        secondaryHref="/demo"
      />
    </>
  );
}
