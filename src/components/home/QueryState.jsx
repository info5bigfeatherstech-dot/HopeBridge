/** Explicit query failure/empty feedback; never disguises a failed request as success. */
export default function QueryState({ error, isEmpty, onRetry }) {
  if (!error && !isEmpty) return null;
  return <div role={error ? "alert" : "status"} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
    <p className="font-medium text-brand">{error ? "We couldn't load this information right now." : "There is no information to show yet."}</p>
    {error && onRetry && <button type="button" onClick={onRetry} className="mt-3 min-h-12 rounded-full px-5 font-semibold text-brand underline underline-offset-4">Try again</button>}
  </div>;
}
