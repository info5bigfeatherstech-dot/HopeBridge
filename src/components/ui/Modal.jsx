import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

/** Modal dialog with escape/backdrop dismissal and basic focus restoration. */
export default function Modal({ open, onClose, title, children, className = "" }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const previousFocus = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") { onClose?.(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) { event.preventDefault(); dialogRef.current.focus(); }
      else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("button, input, select, textarea, a[href]")?.focus();
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; previousFocus?.focus?.(); };
  }, [open, onClose]);
  if (!open) return null;
  return createPortal(<div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose?.(); }}>
    <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} className={`relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-9 ${className}`}>
      <button type="button" onClick={onClose} aria-label="Close dialog" className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full text-brand hover:bg-brand-light"><X aria-hidden="true" /></button>
      {title && <h2 id="modal-title" className="pr-12 font-display text-3xl font-medium text-brand">{title}</h2>}
      <div className={title ? "mt-5" : ""}>{children}</div>
    </section>
  </div>, document.body);
}
