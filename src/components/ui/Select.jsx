/** Labeled native select, preserving native keyboard and screen-reader behavior. */
export default function Select({ label, id, options = [], placeholder, className = "", ...props }) {
  const selectId = id ?? props.name;
  return <div className={className}>{label && <label htmlFor={selectId} className="mb-2 block font-medium text-ink">{label}</label>}
    <select id={selectId} className="min-h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-base text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-amber" {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  </div>;
}
