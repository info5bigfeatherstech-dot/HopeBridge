/** Consistent, responsive content width shared by every page section. */
export default function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-content px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}
