import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useSiteContent } from "../hooks/useSiteContent";
import { useContact } from "../hooks/useContact";
import PageIntro from "../components/layout/PageIntro";
import Section from "../components/ui/Section";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import Toast from "../components/ui/Toast";

/** Contact details and a mock-API-powered enquiry form. */
export default function ContactPage() {
  const contentQuery = useSiteContent();
  const mutation = useContact();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const pages = contentQuery.data?.pages;
  const page = pages?.contact;
  const footer = contentQuery.data?.footer;
  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    setSubmitError("");
    try {
      const result = await mutation.mutateAsync(values);
      if (result.received) {
        form.reset();
        setSubmitted(true);
      } else {
        setSubmitError(page.failure);
      }
    } catch {
      setSubmitError(page.failure);
    }
  };
  return (
    <main>
      <PageIntro
        page={page}
        isLoading={contentQuery.isLoading}
        isError={contentQuery.isError}
        error={contentQuery.error}
        onRetry={contentQuery.refetch}
      />
      {footer && page && (
        <Section bg="gray">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-3xl font-medium text-brand capitalize">
                {page.formTitle}
              </h2>
              <p className="mt-3 text-base leading-8 text-ink-muted capitalize">
                {page.description}
              </p>
              <address className="mt-7 space-y-4 not-italic">
                <p className="flex items-start gap-3 text-base text-ink-muted">
                  <MapPin
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand"
                  />
                  {footer.address}
                </p>
                <a
                  href={`tel:${footer.phone.replace(/[^\d+]/g, "")}`}
                  className="flex min-h-12 items-center gap-3 text-base text-ink-muted hover:text-brand"
                >
                  <Phone aria-hidden="true" className="h-5 w-5 text-brand" />
                  {footer.phone}
                </a>
                <a
                  href={`mailto:${footer.email}`}
                  className="flex min-h-12 items-center gap-3 text-base text-ink-muted hover:text-brand"
                >
                  <Mail aria-hidden="true" className="h-5 w-5 text-brand" />
                  {footer.email}
                </a>
              </address>
            </div>
            <form
              onSubmit={submit}
              className="space-y-5 rounded-3xl border border-black/5 bg-white p-6 shadow-card sm:p-8"
            >
              <Input
                name="name"
                label={page.nameLabel}
                autoComplete="name"
                required
              />
              <Input
                name="email"
                label={page.emailLabel}
                type="email"
                autoComplete="email"
                required
              />
              <Select
                name="subject"
                label={page.subjectLabel}
                options={page.subjectOptions}
                placeholder={page.subjectPlaceholder}
                required
              />
              <Textarea
                name="message"
                label={page.messageLabel}
                rows={5}
                required
              />
              {(submitError || mutation.isError) && (
                <p role="alert" className="text-base font-medium text-red-800">
                  {submitError || page.failure}
                </p>
              )}
              <Button type="submit" size="lg" loading={mutation.isPending}>
                {page.submit}
              </Button>
            </form>
          </div>
        </Section>
      )}
      <Toast
        message={submitted ? page?.success : ""}
        onClose={() => setSubmitted(false)}
      />
    </main>
  );
}
