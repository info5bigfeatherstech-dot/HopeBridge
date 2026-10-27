/** Small controlled tablist with keyboard-friendly native buttons. */
export default function Tabs({ tabs, activeId, onChange, label = "Choose a tab", className = "" }) {
  return <div role="tablist" aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>{tabs.map((tab) => <button key={tab.id} id={`tab-${tab.id}`} type="button" role="tab" aria-selected={activeId === tab.id} aria-controls={`panel-${tab.id}`} onClick={() => onChange(tab.id)} className={`min-h-12 rounded-full px-5 font-semibold transition-colors ${activeId === tab.id ? "bg-brand text-white" : "bg-canvas-muted text-brand hover:bg-brand-light"}`}>{tab.label}</button>)}</div>;
}
