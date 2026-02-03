import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import { LayoutShell } from "@/components/layout/layout-shell";
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
    default: "CaseScribe AI — Turn C-Files Into Case Strategy",
    template: "%s | CaseScribe AI",
  },
  description:
    "AI for veterans disability law firms. Upload a 5,000-page C-file and get secondary conditions, 3.156(c) opportunities, and a medical timeline in 10 minutes. $85/case.",
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://casescribe.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://casescribe.ai",
    siteName: "CaseScribe AI",
    title: "CaseScribe AI — Turn C-Files Into Case Strategy",
    description:
      "AI for veterans disability law firms. Upload a C-file, get secondary conditions, 3.156(c) opportunities, and a medical timeline in minutes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CaseScribe AI — Turn C-Files Into Case Strategy",
    description:
      "AI for veterans disability law firms. Upload a C-file, get secondary conditions, 3.156(c) opportunities, and a medical timeline in minutes.",
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
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
