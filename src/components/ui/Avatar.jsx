/** Human portrait with accessible fallback initials when a photo is unavailable. */
export default function Avatar({ src, alt = "", name, size = "md", className = "" }) {
  const sizes = { sm: "h-10 w-10", md: "h-14 w-14", lg: "h-20 w-20" };
  return src ? <img src={src} alt={alt || name || ""} className={`rounded-full object-cover ${sizes[size] ?? sizes.md} ${className}`} /> :
    <span aria-label={name} className={`inline-flex items-center justify-center rounded-full bg-brand-light font-semibold text-brand ${sizes[size] ?? sizes.md} ${className}`}>{name?.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>;
}
