/** HopeBridge mark: a welcoming bridge over two companions, crowned with a heart-leaf. */
export default function BrandMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 48"
      role="img"
      aria-label="HopeBridge bridge, companions and heart-leaf mark"
      className={`h-11 w-14 shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 29C12 14.5 21 9 32 9s20 5.5 25 20M10 24v6m44-6v6M7 30h50"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23" cy="36" r="3.2" fill="currentColor" />
      <circle cx="41" cy="36" r="3.2" fill="currentColor" />
      <path
        d="M17 45c.4-4.2 2.5-6.3 6-6.3s5.6 2.1 6 6.3m6 0c.4-4.2 2.5-6.3 6-6.3s5.6 2.1 6 6.3"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M32 7.3c-1.6-2.1-5.3-1.3-5.3 1.5 0 2.4 5.3 5.2 5.3 5.2s5.3-2.8 5.3-5.2c0-2.8-3.7-3.6-5.3-1.5Z"
        fill="#F59E0B"
      />
      <path
        d="M32 12.5c1.8-2.3 3.4-3.7 5.1-4.1-.1 2.6-1.8 4.1-5.1 4.1Z"
        fill="#FCD34D"
      />
    </svg>
  );
}
