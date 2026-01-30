import { cn } from "@/lib/utils";

interface DarkSectionProps {
  children: React.ReactNode;
  className?: string;
  grain?: boolean;
  id?: string;
}

export function DarkSection({
  children,
  className,
  grain = true,
  id,
}: DarkSectionProps) {
  return (
    <section
      id={id}
      className={cn("section-dark", grain && "grain-overlay", className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(92,212,244,0.06),transparent)]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
