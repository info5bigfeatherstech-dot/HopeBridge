import { CalendarHeart, Globe2, Sprout } from "lucide-react";
import { useSiteContent } from "../../hooks/useSiteContent";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

const icons = { Sprout, CalendarHeart, Globe2 };

/** Community environmental stewardship and intercultural celebrations. */
export default function Environment() {
  const { data, isLoading, isError, error, refetch } = useSiteContent();
  const content = data?.pages.environment;
  if (isLoading)
    return (
      <Section id="environment" bg="gray">
        <Skeleton lines={4} />
      </Section>
    );
  if (isError)
    return (
      <Section id="environment" bg="gray">
        <QueryState error={error} onRetry={refetch} />
      </Section>
    );
  if (!content?.initiatives?.length)
    return (
      <Section id="environment" bg="gray">
        <QueryState isEmpty />
      </Section>
    );
  return (
    <Section id="environment" bg="gray">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.description}
      />
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <img
          src={content.image}
          alt={content.imageAlt}
          loading="lazy"
          className="h-full min-h-64 max-h-[440px] w-full rounded-3xl object-cover md:row-span-2"
        />
        {content.initiatives.map((item) => (
          <Card key={item.id} icon={icons[item.icon]} title={item.title}>
            {item.text}
          </Card>
        ))}
      </div>
      <p className="mt-7 rounded-2xl border border-brand/15 bg-white px-6 py-5 font-display text-xl font-medium text-brand sm:text-2xl">
        {content.closing}
      </p>
    </Section>
  );
}
