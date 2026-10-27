import { useState } from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteContent } from "../../hooks/useSiteContent";
import useUIStore from "../../store/useUIStore";
import BrandLockup from "./BrandLockup";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

/** Shared site footer with API-backed contact/link content and newsletter feedback. */
export default function Footer() {
  const { data } = useSiteContent();
  const footer = data?.footer;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const openDonate = useUIStore((state) => state.openDonateModal);
  if (!footer)
    return (
      <footer className="bg-brand py-12 text-white" aria-label="Footer">
        <p className="text-center">HopeBridge Foundation</p>
      </footer>
    );
  const submitNewsletter = (event) => {
    event.preventDefault();
    setEmail("");
    setMessage(footer.newsletterSuccess);
  };
  return (
    <footer id="contact" className="bg-brand py-14 text-white sm:py-16">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              aria-label={data.organization}
              className="inline-flex min-h-12 items-center"
            >
              <BrandLockup name={data.organization} />
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-white/80">
              {footer.about}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={footer.socialLinks[0].href}
                aria-label={footer.socialLinks[0].label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <Instagram aria-hidden="true" />
              </a>
              <a
                href={footer.socialLinks[1].href}
                aria-label={footer.socialLinks[1].label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 hover:bg-white/10"
              >
                <Facebook aria-hidden="true" />
              </a>
              <span className="text-sm text-white/80">
                {footer.socialLabel}
              </span>
            </div>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium capitalize">
              {footer.quickLinksTitle}
            </h2>
            <ul className="mt-4 space-y-2 capitalize">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="inline-flex min-h-10 items-center text-white/80 hover:text-amber capitalize"
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium capitalize">
              {footer.servicesTitle}
            </h2>
            <ul className="mt-4 space-y-2">
              {footer.services.map((link) => (
                <li key={link.label}>
                  <Link
                    className="inline-flex min-h-10 items-center text-white/80 hover:text-amber capitalize"
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-lg font-medium capitalize">
              {footer.contactTitle}
            </h2>
            <address className="mt-4 space-y-3 not-italic text-white/80">
              <p className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-amber"
                />
                <span>{footer.address}</span>
              </p>
              <a
                className="flex min-h-10 items-center gap-3 hover:text-amber"
                href={`tel:${footer.phone.replace(/[^\d+]/g, "")}`}
              >
                <Phone
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-amber"
                />
                {footer.phone}
              </a>
              <a
                className="flex min-h-10 items-center gap-3 hover:text-amber"
                href={`mailto:${footer.email}`}
              >
                <Mail
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-amber"
                />
                {footer.email}
              </a>
            </address>
            <Button
              variant="primary"
              size="sm"
              className="mt-5"
              onClick={openDonate}
            >
              {data.donate}
            </Button>
          </div>
        </div>
        <div className="mt-12 grid gap-6 border-t border-white/20 pt-8 md:grid-cols-2 md:items-end">
          <form onSubmit={submitNewsletter} className="max-w-lg">
            <h2 className="font-display text-lg font-medium">
              {footer.newsletterTitle}
            </h2>
            <p className="mt-1 text-sm text-white/80">
              {footer.newsletterText}
            </p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                label={undefined}
                aria-label={footer.newsletterPlaceholder}
                placeholder={footer.newsletterPlaceholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="flex-1"
              />
              <Button type="submit" variant="primary">
                {footer.newsletterAction}
              </Button>
            </div>
          </form>
          <p className="text-sm text-white/75 md:text-right">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
        </div>
      </div>
      <Toast message={message} onClose={() => setMessage("")} />
    </footer>
  );
}
