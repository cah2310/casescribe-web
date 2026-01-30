import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductHeroProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  bgGradient: string;
  radialColor: string;
  shadowColor: string;
  primaryButtonClass?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  mockup: React.ReactNode;
  mockupSide?: "left" | "right";
}

export function ProductHero({
  icon: Icon,
  title,
  description,
  gradient,
  bgGradient,
  radialColor,
  shadowColor,
  primaryButtonClass,
  primaryCta,
  secondaryCta,
  mockup,
  mockupSide = "right",
}: ProductHeroProps) {
  const content = (
    <div className={mockupSide === "left" ? "order-1 lg:order-2" : ""}>
      <div
        className={cn(
          "icon-box-lg mb-6 bg-gradient-to-br shadow-lg",
          gradient,
          shadowColor
        )}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>
      <h1 className="heading-page">{title}</h1>
      <p className="mt-6 text-body">{description}</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button
          size="lg"
          className={cn("shadow-lg", shadowColor, primaryButtonClass)}
          asChild
        >
          <Link href={primaryCta.href}>
            {primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        {secondaryCta && (
          <Button size="lg" variant="outline" asChild>
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        )}
      </div>
    </div>
  );

  const mockupPanel = (
    <div
      className={cn(
        "relative",
        mockupSide === "left" ? "order-2 lg:order-1" : ""
      )}
    >
      {mockup}
    </div>
  );

  return (
    <section
      className={cn("relative overflow-hidden bg-gradient-to-b", bgGradient)}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${radialColor}, transparent)`,
        }}
      />
      <div className="hero-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {mockupSide === "left" ? (
            <>
              {mockupPanel}
              {content}
            </>
          ) : (
            <>
              {content}
              {mockupPanel}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
