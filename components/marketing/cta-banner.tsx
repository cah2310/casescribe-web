import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  description,
  primaryLabel = "Book a Demo",
  primaryHref = "/demo",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2C5DFF] via-[#0080A3] to-[#5CD4F4]">
      {/* Floating decorative elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="heading-section text-white">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-[#2C5DFF] shadow-lg shadow-black/10 hover:bg-blue-50"
            asChild
          >
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/60 bg-white/10 text-white hover:bg-white/20"
            asChild
          >
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
