"use client";

import { X } from "lucide-react";

interface FilterPillProps {
  label: string;
  value: string;
  onRemove?: () => void;
}

export function FilterPill({ label, value, onRemove }: FilterPillProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
      <span className="text-blue-500">{label}:</span>
      {value}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-0.5 rounded-full p-0.5 hover:bg-blue-100"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}
