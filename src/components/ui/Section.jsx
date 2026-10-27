import Container from "./Container";

/** Semantic section wrapper with the site's restrained white/gray backgrounds. */
export default function Section({ children, id, bg = "white", padding = "py-16 md:py-24", className = "", containerClassName = "" }) {
  const backgrounds = { white: "bg-white", gray: "bg-canvas-muted" };
  return <section id={id} className={`${backgrounds[bg] ?? backgrounds.white} ${padding} ${className}`}><Container className={containerClassName}>{children}</Container></section>;
}
