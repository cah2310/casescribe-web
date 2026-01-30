import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "blue-indigo" | "shimmer";
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  children,
  className,
  variant = "default",
  as: Tag = "span",
}: GradientTextProps) {
  const variantClass = {
    default: "gradient-text",
    "blue-indigo": "gradient-text-blue-indigo",
    shimmer: "gradient-text-shimmer",
  }[variant];

  return <Tag className={cn(variantClass, className)}>{children}</Tag>;
}
