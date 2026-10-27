import { CheckCircle2 } from "lucide-react";
import { useHero } from "../../hooks/useHero";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

/** Foundation story and mission/vision in a reusable split layout. */
export default function About() {
  const { data, isLoading, isError, error, refetch } = useHero();
  if (isLoading)
    return (
      <Section id="about" bg="gray">
        <Skeleton lines={5} />
      </Section>
    );
  if (isError)
    return (
      <Section id="about" bg="gray">
        <QueryState error={error} onRetry={refetch} />
      </Section>
    );
  if (!data?.about)
    return (
      <Section id="about" bg="gray">
        <QueryState isEmpty />
      </Section>
    );
  const about = data.about;
  return (
    <Section
      id="about"
      bg="gray"
      containerClassName="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
    >
      <div className="relative min-h-[390px] sm:min-h-[500px]">
        <img
          src={about.images[0].src}
          alt={about.images[0].alt}
          loading="lazy"
          className="absolute left-0 top-0 h-[78%] w-[76%] rounded-3xl object-cover"
        />
        <img
          src={about.images[1].src}
          alt={about.images[1].alt}
          loading="lazy"
          className="absolute bottom-0 right-0 h-[48%] w-[54%] rounded-3xl border-8 border-canvas-muted object-cover shadow-card"
        />
      </div>
      <div>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} />
        <p className="mt-5 text-base leading-8 text-ink-muted">{about.body}</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-brand/10 bg-white p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-medium text-brand">
              <CheckCircle2
                aria-hidden="true"
                className="h-5 w-5 text-amber-dark"
              />
              {about.missionTitle}
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink-muted">
              {about.mission}
            </p>
          </article>
          <article className="rounded-2xl border border-brand/10 bg-white p-5">
            <h3 className="flex items-center gap-2 font-display text-lg font-medium text-brand">
              <CheckCircle2
                aria-hidden="true"
                className="h-5 w-5 text-amber-dark"
              />
              {about.visionTitle}
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink-muted">
              {about.vision}
            </p>
          </article>
        </div>
        <Button
          asLink
          to="/our-care"
          variant="secondary"
          size="lg"
          className="mt-7"
        >
          {about.action}
        </Button>
      </div>
    </Section>
  );
}
