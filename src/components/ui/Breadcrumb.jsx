import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/** Semantic breadcrumb trail suitable for nested future routes. */
export default function Breadcrumb({ items = [], className = "" }) {
  return <nav aria-label="Breadcrumb" className={className}><ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">{items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 && <ChevronRight aria-hidden="true" className="h-4 w-4" />}{item.to && index < items.length - 1 ? <Link to={item.to} className="min-h-10 inline-flex items-center hover:text-brand">{item.label}</Link> : <span aria-current={index === items.length - 1 ? "page" : undefined} className="font-medium text-brand">{item.label}</span>}</li>)}</ol></nav>;
}
