/** Small status/eyebrow pill with predictable reusable color variants. */
export default function Badge({ children, variant = "amber", className = "" }) {
  const styles = { amber: "bg-amber-light text-brand-dark", brand: "bg-brand-light text-brand", neutral: "bg-canvas-muted text-ink" };
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${styles[variant] ?? styles.amber} ${className}`}>{children}</span>;
}
