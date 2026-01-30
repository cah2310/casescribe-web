"use client";

interface CitationLinkProps {
  caseId: string;
  onClick: () => void;
}

export function CitationLink({ caseId, onClick }: CitationLinkProps) {
  return (
    <button
      onClick={onClick}
      className="mx-0.5 inline-flex items-center rounded bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 underline-offset-2 hover:bg-blue-100 hover:underline"
    >
      {caseId}
    </button>
  );
}
