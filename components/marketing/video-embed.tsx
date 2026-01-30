import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  className?: string;
  title?: string;
  aspectRatio?: "16/9" | "4/3";
}

export function VideoEmbed({
  className,
  title = "See it in action",
  aspectRatio = "16/9",
}: VideoEmbedProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-slate-100",
        className
      )}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ aspectRatio }}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-lg transition-transform hover:scale-105">
            <svg
              className="ml-1 h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="mt-1 text-xs text-slate-400">
            Demo video coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
