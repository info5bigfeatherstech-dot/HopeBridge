import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

/** Single-item accordion row; callers may control the open item from shared state. */
export default function Accordion({ id, title, children, open, onToggle, className = "" }) {
  const panelId = `accordion-panel-${id}`;
  const reduceMotion = useReducedMotion();
  return <div className={`mb-3 rounded-2xl border transition-colors duration-200 ${open ? "border-brand/10 bg-canvas-muted px-4" : "border-transparent border-b-gray-200"} ${className}`}>
    <h3>
      <button
        id={`accordion-trigger-${id}`}
        type="button"
        className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left font-display text-lg font-medium text-brand sm:text-xl capitalize"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
    </h3>
    <div
      id={panelId}
      role="region"
      aria-labelledby={`accordion-trigger-${id}`}
      aria-hidden={!open}
      className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out"
      style={{
        gridTemplateRows: open ? "1fr" : "0fr",
        opacity: open ? 1 : 0,
        transitionDuration: reduceMotion ? "0ms" : undefined
      }}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="pb-5 pr-8 text-base leading-7 text-ink-muted">{children}</div>
      </div>
    </div>
  </div>;
}
