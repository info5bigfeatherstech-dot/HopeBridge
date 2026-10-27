/** Reusable section title block; accepts content from page data without markup assumptions. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-amber-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-medium leading-tight text-brand sm:text-4xl capitalize">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-8 text-ink-muted capitalize">{subtitle}</p>
      )}
    </div>
  );
}
