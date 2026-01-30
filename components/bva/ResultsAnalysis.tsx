"use client";

interface ResultsAnalysisProps {
  analysis: string;
  question: string;
}

export function ResultsAnalysis({ analysis, question }: ResultsAnalysisProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white">
      <div className="border-b border-slate-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-slate-900">Analysis</h3>
        <p className="mt-0.5 text-xs text-slate-500">{question}</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="prose prose-sm prose-slate max-w-none">
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
            {analysis}
          </div>
        </div>
      </div>
    </div>
  );
}
