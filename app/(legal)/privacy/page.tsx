import type { Metadata } from "next";
import { Section } from "@/components/marketing/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CaseScribe AI Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Last updated: January 29, 2026
        </p>

        <div className="mt-8 space-y-6 text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              1. Information We Collect
            </h2>
            <p className="mt-2">
              We collect information you provide directly, including your name,
              email address, firm name, and any documents you upload for
              processing. We also collect usage data and analytics to improve our
              services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">
              We use your information to provide and improve our services,
              process your documents, communicate with you, and ensure the
              security of your data. We never use your uploaded documents to
              train AI models.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              3. Data Security
            </h2>
            <p className="mt-2">
              We implement industry-standard security measures including AES-256
              encryption at rest, TLS 1.3 for data in transit, and SOC 2 Type II
              certified infrastructure. See our{" "}
              <a href="/security" className="text-blue-600 hover:underline">
                Security page
              </a>{" "}
              for more details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              4. Data Retention
            </h2>
            <p className="mt-2">
              You control your data retention. You may delete individual cases or
              your entire account at any time. Upon deletion, data is permanently
              removed from our systems.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              5. Third-Party Services
            </h2>
            <p className="mt-2">
              We use third-party AI model providers for document processing.
              These providers are bound by data processing agreements that
              prohibit the use of your data for model training.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              6. Your Rights
            </h2>
            <p className="mt-2">
              You have the right to access, correct, export, or delete your
              personal data at any time. Contact us at{" "}
              <a
                href="mailto:privacy@casescribe.ai"
                className="text-blue-600 hover:underline"
              >
                privacy@casescribe.ai
              </a>{" "}
              for any privacy-related requests.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              7. Contact Us
            </h2>
            <p className="mt-2">
              For questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:privacy@casescribe.ai"
                className="text-blue-600 hover:underline"
              >
                privacy@casescribe.ai
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
