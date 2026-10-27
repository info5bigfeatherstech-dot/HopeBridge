/** Accessible loading placeholder for asynchronous API-backed content. */
export default function Skeleton({ className = "", lines = 1 }) {
  return <div aria-label="Loading content" role="status" className={`animate-pulse space-y-3 ${className}`}><span className="sr-only">Loading</span>{Array.from({ length: lines }, (_, index) => <span key={index} className="block h-5 rounded bg-gray-200" />)}</div>;
}
