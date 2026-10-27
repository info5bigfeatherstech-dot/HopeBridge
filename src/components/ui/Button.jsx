import { Link } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

const variants = {
  primary: "bg-amber text-brand-dark hover:bg-amber-dark hover:text-white",
  secondary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  ghost: "text-brand hover:bg-brand-light"
};
const sizes = { sm: "min-h-12 px-4 text-sm", md: "min-h-12 px-5 text-base", lg: "min-h-14 px-7 text-base sm:text-lg" };

/** Accessible action control, supporting router links, icons and async loading states. */
export default function Button({ children, variant = "primary", size = "md", icon: Icon, loading = false, asLink = false, to, href, type = "button", className = "", onClick, disabled, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`;
  const content = <>{loading ? <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" /> : Icon && <Icon aria-hidden="true" className="h-5 w-5" />}{children}</>;
  if (asLink && to) return <Link className={classes} to={to} onClick={onClick} aria-disabled={disabled || loading} {...props}>{content}</Link>;
  if (asLink && href) return <a className={classes} href={href} onClick={onClick} aria-disabled={disabled || loading} {...props}>{content}</a>;
  return <button className={classes} type={type} onClick={onClick} disabled={disabled || loading} {...props}>{content}</button>;
}
