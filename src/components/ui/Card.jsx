/** Shared card surface for photo, icon and statistic content. */
export default function Card({ variant = "icon", image, imageAlt = "", icon: Icon, value, title, children, className = "", imageClassName = "" }) {
  const base = "overflow-hidden rounded-2xl border border-black/5 bg-white";
  if (variant === "image") return <article className={`${base} ${className}`}>{image && <img src={image} alt={imageAlt} className={`h-56 w-full object-cover ${imageClassName}`} />}{children && <div className="p-6">{children}</div>}</article>;
  if (variant === "stat") return <article className={`${className}`}><p className="font-display text-3xl font-medium text-brand sm:text-4xl">{value}</p>{title && <p className="mt-2 text-base text-ink-muted">{title}</p>}{children}</article>;
  return <article className={`${base} p-6 shadow-card transition-transform duration-200 hover:-translate-y-1 sm:p-7`}>{Icon && <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-light text-brand"><Icon aria-hidden="true" className="h-7 w-7" /></span>}{title && <h3 className="font-display text-xl font-medium text-brand">{title}</h3>}{children && <div className="mt-3 text-base leading-7 text-ink-muted">{children}</div>}</article>;
}
