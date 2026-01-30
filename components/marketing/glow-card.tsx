"use client";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "indigo" | "emerald" | "amber";
  hover?: boolean;
  span?: number;
}

export function GlowCard({
  children,
  className,
  glowColor = "blue",
  hover = true,
  span,
}: GlowCardProps) {
  const glowClasses = {
    blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    indigo: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    emerald: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    amber: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 transition-all duration-300",
        hover && "hover:-translate-y-0.5 hover:border-blue-200/60",
        hover && glowClasses[glowColor],
        span && `col-span-${span}`,
        className
      )}
    >
      {/* Gradient border effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-blue-400/20 via-transparent to-indigo-400/20" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
