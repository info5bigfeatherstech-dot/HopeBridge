import { useState } from "react";
import { useHero } from "../../hooks/useHero";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Tabs from "../ui/Tabs";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

/** Daily routine explorer; switching tabs updates a labeled, accessible tab panel. */
export default function DailyLife() {
  const { data, isLoading, isError, error, refetch } = useHero();
  const [activeId, setActiveId] = useState("morning");
  if (isLoading)
    return (
      <Section bg="gray">
        <Skeleton lines={4} />
      </Section>
    );
  if (isError)
    return (
      <Section bg="gray">
        <QueryState error={error} onRetry={refetch} />
      </Section>
    );
  const life = data?.dailyLife;
  if (!life?.moments?.length)
    return (
      <Section bg="gray">
        <QueryState isEmpty />
      </Section>
    );
  const active =
    life.moments.find((moment) => moment.id === activeId) ?? life.moments[0];
  return (
    <Section bg="gray">
      <SectionHeading
        eyebrow={life.eyebrow}
        title={life.title}
        subtitle={life.description}
      />
      <Tabs
        tabs={life.moments}
        activeId={active.id}
        onChange={setActiveId}
        label={life.title}
        className="mt-7"
      />
      <div
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className="mt-8 grid items-center gap-8 rounded-3xl bg-white p-5 sm:p-8 lg:grid-cols-2 lg:gap-12"
      >
        <img
          src={active.image}
          alt={active.alt}
          loading="lazy"
          className="h-64 w-full rounded-2xl object-cover sm:h-80"
        />
        <div>
          <h3 className="font-display text-2xl font-medium text-brand sm:text-3xl capitalize">
            {active.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-ink-muted capitalize">
            {active.text}
          </p>
        </div>
      </div>
    </Section>
  );
}
