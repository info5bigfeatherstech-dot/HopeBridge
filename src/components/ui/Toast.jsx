import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

/** Dismissible, screen-reader-announced feedback message for reusable forms. */
export default function Toast({ message, onClose, variant = "success", className = "" }) {
  useEffect(() => {
    if (!message) return undefined;
    const timer = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);
  if (!message) return null;
  return <div role="status" className={`fixed bottom-5 right-5 z-[80] flex max-w-sm items-center gap-3 rounded-xl bg-brand px-5 py-4 text-white shadow-xl ${className}`}>
    <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-amber" /><span>{message}</span><button type="button" onClick={onClose} aria-label="Dismiss message" className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-white/10"><X aria-hidden="true" /></button>
  </div>;
}
