"use client";

import { FilterPill } from "./FilterPill";

interface FilterBarProps {
  filters: Record<string, string>;
  onRemove?: (key: string) => void;
}

export function FilterBar({ filters, onRemove }: FilterBarProps) {
  const activeFilters = Object.entries(filters).filter(
    ([, v]) => v !== "(All)" && v !== "",
  );

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex gap-1.5 overflow-x-auto px-4 py-2">
      {activeFilters.map(([key, value]) => (
        <FilterPill
          key={key}
          label={key}
          value={value}
          onRemove={onRemove ? () => onRemove(key) : undefined}
        />
      ))}
    </div>
  );
}
