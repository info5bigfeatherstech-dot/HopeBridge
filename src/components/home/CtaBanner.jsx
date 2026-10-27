import { ArrowRight } from "lucide-react";
import { useHero } from "../../hooks/useHero";
import useUIStore from "../../store/useUIStore";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

/** Final bordered invitation before the site footer. */
export default function CtaBanner() {
  const { data, isLoading, isError, error, refetch } = useHero();
  const openDonate = useUIStore((state) => state.openDonateModal);
  if (isLoading) return <Section><Skeleton lines={3} /></Section>;
  if (isError) return <Section><QueryState error={error} onRetry={refetch} /></Section>;
  if (!data?.cta) return <Section><QueryState isEmpty /></Section>;
  return (
    <Section padding="pt-4 pb-16 md:pt-4 md:pb-24">
      <div className="rounded-3xl border-2 border-brand/15 bg-white px-6 py-10 text-center sm:px-12 sm:py-14">
        <h2 className="font-display text-3xl font-medium text-brand sm:text-4xl capitalize">
          {data.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-ink-muted capitalize">
          {data.cta.description}
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={openDonate} icon={ArrowRight}>
            {data.cta.donate}
          </Button>
          <Button size="lg" variant="outline" asLink href="#contact">
            {data.cta.contact}
          </Button>
        </div>
      </div>
    </Section>
  );
}
