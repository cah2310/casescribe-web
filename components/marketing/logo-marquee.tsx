"use client";

import { cn } from "@/lib/utils";

const placeholderLogos = [
  "Hill & Ponton",
  "Veterans Law Group",
  "National VA Claims",
  "Disability Rights Advocates",
  "American Legion",
  "VFW Partners",
  "DAV Alliance",
  "NOVA Members",
];

interface LogoMarqueeProps {
  className?: string;
  label?: string;
}

export function LogoMarquee({
  className,
  label = "Trusted by leading disability law firms",
}: LogoMarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      {label && (
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-slate-400">
          {label}
        </p>
      )}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#1B2036] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#1B2036] to-transparent" />

        <div className="flex animate-marquee items-center gap-12">
          {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex h-10 shrink-0 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/50 px-6"
            >
              <span className="whitespace-nowrap text-sm font-medium text-slate-400">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface LogoMarqueeLightProps {
  className?: string;
  label?: string;
}

export function LogoMarqueeLight({
  className,
  label = "Trusted by leading disability law firms",
}: LogoMarqueeLightProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      {label && (
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          {label}
        </p>
      )}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee items-center gap-12">
          {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex h-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-6"
            >
              <span className="whitespace-nowrap text-sm font-medium text-slate-400">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
