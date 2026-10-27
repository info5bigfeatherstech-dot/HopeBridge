import { X } from "lucide-react";
import { Link } from "react-router-dom";
import useUIStore from "../../store/useUIStore";
import { useSiteContent } from "../../hooks/useSiteContent";
import BrandLockup from "./BrandLockup";
import Button from "../ui/Button";

/** Full-height navigation drawer on small screens, controlled by Zustand. */
export default function MobileMenu() {
  const isOpen = useUIStore((state) => state.isMobileMenuOpen);
  const close = useUIStore((state) => state.closeMobileMenu);
  const openDonate = useUIStore((state) => state.openDonateModal);
  const { data } = useSiteContent();
  if (!isOpen) return null;
  const links = data?.navigation ?? [];
  return <div className="fixed inset-0 z-[60] bg-brand text-white md:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
    <div className="flex min-h-20 items-center justify-between border-b border-white/15 px-5">
      <Link to="/" onClick={close} aria-label={data?.organization ?? "HopeBridge Foundation"}><BrandLockup name={data?.organization} /></Link>
      <button type="button" onClick={close} aria-label="Close navigation" className="inline-flex h-12 w-12 items-center justify-center rounded-full hover:bg-white/10"><X aria-hidden="true" /></button>
    </div>
    <nav aria-label="Mobile" className="px-6 py-8">
      <ul className="space-y-2">{links.map((link) => <li key={link.href}><Link to={link.href} onClick={close} className="flex min-h-14 items-center border-b border-white/15 font-display text-2xl">{link.label}</Link></li>)}</ul>
      <Button className="mt-8 w-full" size="lg" onClick={() => { close(); openDonate(); }}>{data?.donate ?? "Donate"}</Button>
    </nav>
  </div>;
}
