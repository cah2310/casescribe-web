import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className={dark ? "text-eyebrow-dark" : "text-eyebrow"}>
          {eyebrow}
        </p>
      )}
      <h2
        className={
          dark
            ? "mt-2 heading-section-dark sm:text-3xl"
            : "mt-2 heading-section"
        }
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg", dark ? "text-slate-400" : "text-slate-600")}>
          {description}
        </p>
      )}
    </div>
  );
}
