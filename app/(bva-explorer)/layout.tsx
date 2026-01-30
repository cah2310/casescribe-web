import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BVA Explorer | CaseScribe AI",
  description:
    "Search, filter, and analyze Board of Veterans' Appeals decisions with AI-powered research tools.",
};

export default function BVAExplorerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
