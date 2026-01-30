import { cn } from "@/lib/utils";

const glowMap = {
  blue: "hover-glow-blue",
  indigo: "hover-glow-indigo",
  emerald: "hover-glow-emerald",
  amber: "hover-glow-amber",
  red: "",
} as const;

const iconBgMap = {
  blue: "bg-blue-50 group-hover:bg-blue-100",
  indigo: "bg-indigo-50 group-hover:bg-indigo-100",
  emerald: "bg-emerald-50 group-hover:bg-emerald-100",
  amber: "bg-amber-50 group-hover:bg-amber-100",
  red: "bg-red-50",
} as const;

const iconColorMap = {
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  emerald: "text-emerald-600",
  amber: "text-amber-600",
  red: "text-red-500",
} as const;

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: "blue" | "indigo" | "emerald" | "amber" | "red";
  layout?: "stacked" | "horizontal";
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  color = "blue",
  layout = "stacked",
  className,
}: FeatureCardProps) {
  if (layout === "horizontal") {
    return (
      <div
        className={cn(
          "group flex gap-4 card-light-hover",
          glowMap[color],
          className
        )}
      >
        <div
          className={cn(
            "icon-box-sm shrink-0 transition-colors",
            iconBgMap[color]
          )}
        >
          <Icon className={cn("h-5 w-5", iconColorMap[color])} />
        </div>
        <div>
          <h3 className="heading-card">{title}</h3>
          <p className="mt-1 text-card-desc">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group card-light-hover",
        glowMap[color],
        className
      )}
    >
      <div
        className={cn(
          "icon-box-sm transition-colors",
          iconBgMap[color]
        )}
      >
        <Icon className={cn("h-5 w-5", iconColorMap[color])} />
      </div>
      <h3 className="mt-4 heading-card">{title}</h3>
      <p className="mt-2 text-card-desc">{description}</p>
    </div>
  );
}
