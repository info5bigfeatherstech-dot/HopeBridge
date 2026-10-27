import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import useUIStore from "../../store/useUIStore";
import { useSiteContent } from "../../hooks/useSiteContent";
import BrandLockup from "./BrandLockup";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

/** Sticky brand navigation with a mobile drawer and donation entry point. */
export default function Navbar() {
  const { data } = useSiteContent();
  const toggleMenu = useUIStore((state) => state.toggleMobileMenu);
  const isMenuOpen = useUIStore((state) => state.isMobileMenuOpen);
  const openDonate = useUIStore((state) => state.openDonateModal);
  return <>
    <header className="sticky top-0 z-50 bg-brand text-white shadow-sm">
      <div className="mx-auto flex min-h-[76px] max-w-content items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link to="/" aria-label={data?.organization ?? "HopeBridge Foundation"} className="flex min-h-12 items-center"><BrandLockup name={data?.organization} /></Link>
        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {(data?.navigation ?? []).map((link) => <NavLink key={link.href} to={link.href} end={link.href === "/"} className={({ isActive }) => `inline-flex min-h-12 items-center text-sm font-medium transition-colors hover:text-amber ${isActive ? "text-amber" : "text-white/90"}`}>{link.label}</NavLink>)}
          <Button size="md" onClick={openDonate}>{data?.donate ?? "Donate"}</Button>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <Button size="sm" onClick={openDonate}>{data?.donate ?? "Donate"}</Button>
          <button type="button" onClick={toggleMenu} aria-label="Open navigation menu" aria-expanded={isMenuOpen} className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white hover:bg-white/10"><Menu aria-hidden="true" /></button>
        </div>
      </div>
    </header>
    <MobileMenu />
  </>;
}
