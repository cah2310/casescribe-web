import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  firm: string;
  className?: string;
  variant?: "light" | "dark";
}

export function TestimonialCard({
  quote,
  name,
  title,
  firm,
  className,
  variant = "light",
}: TestimonialCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "group relative rounded-2xl p-8 transition-all duration-300",
        isDark
          ? "border border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50"
          : "border border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
    >
      <Quote
        className={cn(
          "mb-4 h-8 w-8",
          isDark ? "text-blue-400/30" : "text-blue-100"
        )}
      />
      <blockquote
        className={cn(
          "text-lg font-medium leading-relaxed",
          isDark ? "text-slate-200" : "text-slate-800"
        )}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold",
            isDark
              ? "bg-blue-500/20 text-blue-400"
              : "bg-blue-100 text-blue-600"
          )}
        >
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p
            className={cn(
              "text-sm font-semibold",
              isDark ? "text-white" : "text-slate-900"
            )}
          >
            {name}
          </p>
          <p
            className={cn(
              "text-sm",
              isDark ? "text-slate-400" : "text-slate-500"
            )}
          >
            {title}, {firm}
          </p>
        </div>
      </div>
    </div>
  );
}
