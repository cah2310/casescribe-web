import { cn } from "@/lib/utils";

const glowMap = {
  blue: "hover-glow-blue",
  teal: "hover-glow-teal",
  green: "hover-glow-green",
  violet: "hover-glow-violet",
} as const;

const iconBgMap = {
  blue: "bg-accent-blue group-hover:brightness-95",
  teal: "bg-accent-teal group-hover:brightness-95",
  green: "bg-accent-green group-hover:brightness-95",
  violet: "bg-accent-violet group-hover:brightness-95",
} as const;

const iconColorMap = {
  blue: "text-accent-blue",
  teal: "text-accent-teal",
  green: "text-accent-green",
  violet: "text-accent-violet",
} as const;

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: "blue" | "teal" | "green" | "violet";
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
