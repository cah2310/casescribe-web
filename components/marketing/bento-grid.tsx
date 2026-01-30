import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
  variant?: "default" | "dark" | "accent";
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  variant = "default",
}: BentoCardProps) {
  const colClasses = {
    1: "",
    2: "sm:col-span-2",
  };
  const rowClasses = {
    1: "",
    2: "sm:row-span-2",
  };
  const variantClasses = {
    default:
      "border border-slate-200/60 bg-white hover:border-blue-200/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
    dark: "border border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50",
    accent:
      "border border-blue-200/60 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5",
        colClasses[colSpan],
        rowClasses[rowSpan],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
