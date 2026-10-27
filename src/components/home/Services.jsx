import {
  FileHeart,
  Flower2,
  HeartPulse,
  House,
  MessagesSquare,
  PartyPopper,
} from "lucide-react";
import { useServices } from "../../hooks/useServices";
import { useHero } from "../../hooks/useHero";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

const icons = {
  House,
  HeartPulse,
  MessagesSquare,
  Flower2,
  PartyPopper,
  FileHeart,
};

/** Data-driven service cards with skeleton, retry and empty states. */
export default function Services() {
  const query = useServices();
  const heading = useHero();
  if (query.isLoading)
    return (
      <Section id="services">
        <SectionHeading title={heading.data?.servicesSection.title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton
              key={index}
              lines={3}
              className="rounded-2xl border p-6"
            />
          ))}
        </div>
      </Section>
    );
  return (
    <Section id="services">
      <SectionHeading
        eyebrow={heading.data?.servicesSection.eyebrow}
        title={heading.data?.servicesSection.title}
        subtitle={heading.data?.servicesSection.subtitle}
        align="center"
        className="mx-auto"
      />
      {query.isError ? (
        <div className="mt-10">
          <QueryState error={query.error} onRetry={query.refetch} />
        </div>
      ) : !query.data?.length ? (
        <div className="mt-10">
          <QueryState isEmpty />
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 capitalize">
          {query.data.map((service) => (
            <Card
              key={service.id}
              icon={icons[service.icon]}
              title={service.title}
            >
              {service.text}
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
