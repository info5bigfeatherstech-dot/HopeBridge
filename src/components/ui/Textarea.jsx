/** Labeled multiline form field matching the shared input treatment. */
export default function Textarea({ label, id, error, hint, className = "", rows = 4, ...props }) {
  const inputId = id ?? props.name;
  return <div className={className}>{label && <label htmlFor={inputId} className="mb-2 block font-medium text-ink">{label}</label>}
    <textarea id={inputId} rows={rows} aria-invalid={Boolean(error)} aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-ink placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-2 focus:ring-amber" {...props} />
    {hint && !error && <p id={`${inputId}-hint`} className="mt-2 text-sm text-ink-muted">{hint}</p>}
    {error && <p id={`${inputId}-error`} role="alert" className="mt-2 text-sm font-medium text-red-800">{error}</p>}
  </div>;
}
