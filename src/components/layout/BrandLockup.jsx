import BrandMark from "./BrandMark";

/** Reusable responsive logo and wordmark for the header, drawer and footer. */
export default function BrandLockup({ name = "HopeBridge Foundation", className = "" }) {
  const [first, ...rest] = name.split(" ");
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BrandMark />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-lg font-medium sm:text-xl">{first}</span>
        <span className="text-xs font-medium tracking-[0.08em] text-white/75 sm:text-sm">
          {rest.join(" ")}
        </span>
      </span>
    </span>
  );
}
