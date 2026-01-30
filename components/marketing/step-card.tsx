import { cn } from "@/lib/utils";

interface StepCardProps {
  step: string | number;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  layout?: "card" | "inline";
  gradient?: string;
}

export function StepCard({
  step,
  title,
  description,
  icon: Icon,
  layout = "card",
  gradient = "from-blue-500 to-indigo-600",
}: StepCardProps) {
  if (layout === "inline") {
    return (
      <div className="flex gap-4">
        <div
          className={cn(
            "step-number",
            gradient !== "from-blue-500 to-indigo-600" &&
              `bg-gradient-to-br ${gradient}`
          )}
        >
          {step}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-card-desc">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group card-light-hover">
      <div
        className={cn(
          "mb-4 step-number",
          gradient !== "from-blue-500 to-indigo-600" &&
            `bg-gradient-to-br ${gradient}`
        )}
      >
        {step}
      </div>
      {Icon && <Icon className="h-6 w-6 text-blue-600" />}
      <h3 className={cn("heading-card-lg", Icon ? "mt-3" : "")}>
        {title}
      </h3>
      <p className="mt-2 text-card-desc">{description}</p>
    </div>
  );
}
