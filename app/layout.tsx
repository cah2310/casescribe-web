import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CaseScribe AI — AI That Finds Opportunities, Not Just Facts",
    template: "%s | CaseScribe AI",
  },
  description:
    "AI-powered document intelligence and case strategy for disability law firms. Process 500 pages in 10 minutes. SOC 2 Type II certified. $85/case, no contracts.",
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://casescribe.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://casescribe.ai",
    siteName: "CaseScribe AI",
    title: "CaseScribe AI — AI That Finds Opportunities, Not Just Facts",
    description:
      "AI-powered document intelligence and case strategy for disability law firms. Process 500 pages in 10 minutes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CaseScribe AI — AI That Finds Opportunities, Not Just Facts",
    description:
      "AI-powered document intelligence and case strategy for disability law firms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${epilogue.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
