/**
 * Parse [[case_id]] citations in text and return segments for rendering.
 */
export type CitationSegment =
  | { type: "text"; content: string }
  | { type: "citation"; caseId: string };

const CITATION_RE = /\[\[([^\]]+)\]\]/g;

export function parseCitations(text: string): CitationSegment[] {
  const segments: CitationSegment[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(CITATION_RE)) {
    const start = match.index!;
    if (start > lastIndex) {
      segments.push({ type: "text", content: text.slice(lastIndex, start) });
    }
    segments.push({ type: "citation", caseId: match[1] });
    lastIndex = start + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", content: text.slice(lastIndex) });
  }

  return segments;
}
