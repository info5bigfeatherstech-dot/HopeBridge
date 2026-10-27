import { ChevronLeft, ChevronRight } from "lucide-react";

/** Accessible compact pagination control for future listing pages. */
export default function Pagination({ page, pageCount, onChange, className = "" }) {
  if (pageCount <= 1) return null;
  return <nav aria-label="Pagination" className={`flex items-center justify-center gap-2 ${className}`}>
    <button type="button" aria-label="Previous page" disabled={page <= 1} onClick={() => onChange(page - 1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-brand disabled:opacity-40"><ChevronLeft aria-hidden="true" /></button>
    <span aria-live="polite" className="px-3 text-base text-ink">Page {page} of {pageCount}</span>
    <button type="button" aria-label="Next page" disabled={page >= pageCount} onClick={() => onChange(page + 1)} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-brand disabled:opacity-40"><ChevronRight aria-hidden="true" /></button>
  </nav>;
}
