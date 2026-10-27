/** Labeled form input with optional hint and accessible error messaging. */
export default function Input({ label, id, error, hint, className = "", ...props }) {
  const inputId = id ?? props.name;
  return <div className={className}>{label && <label htmlFor={inputId} className="mb-2 block font-medium text-ink">{label}</label>}
    <input id={inputId} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined} className="min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-base text-ink placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-amber" {...props} />
    {hint && !error && <p id={`${inputId}-hint`} className="mt-2 text-sm text-ink-muted">{hint}</p>}
    {error && <p id={`${inputId}-error`} role="alert" className="mt-2 text-sm font-medium text-red-800">{error}</p>}
  </div>;
}
