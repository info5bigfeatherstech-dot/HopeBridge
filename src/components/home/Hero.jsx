import { ArrowDown, Heart, House, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useHero } from "../../hooks/useHero";
import useUIStore from "../../store/useUIStore";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

const trustIcons = [House, Heart, ShieldCheck];

/** Landing statement, primary actions and practical trust indicators. */
export default function Hero() {
  const { data, isLoading, isError, error, refetch } = useHero();
  const openDonate = useUIStore((state) => state.openDonateModal);
  if (isLoading)
    return (
      <Section id="home" padding="py-16 md:py-24">
        <Skeleton lines={5} className="max-w-2xl" />
      </Section>
    );
  if (isError)
    return (
      <Section id="home">
        <QueryState error={error} onRetry={refetch} />
      </Section>
    );
  if (!data)
    return (
      <Section id="home">
        <QueryState isEmpty />
      </Section>
    );
  return (
    <Section
      id="home"
      padding="py-12 md:py-20 lg:py-24"
      containerClassName="grid items-center gap-10 lg:grid-cols-[1fr_1.04fr] lg:gap-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-amber-dark sm:text-base">
          {data.eyebrow}
        </p>
        <h1 className="max-w-2xl font-display text-3xl font-medium leading-[1.08] text-brand sm:text-4xl">
          {data.title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-ink-muted capitalize">
          {data.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="md" icon={Heart} onClick={openDonate}>
            {data.primaryAction}
          </Button>
          <Button
            size="md"
            variant="outline"
            asLink
            href="#contact"
            icon={ArrowDown}
          >
            {data.secondaryAction}
          </Button>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {data.trustPoints.map((point, index) => {
            const Icon = trustIcons[index] ?? ShieldCheck;
            return (
              <li key={point.title} className="flex min-h-[88px] items-center gap-2 rounded-xl border border-brand/15 bg-white p-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand-light text-brand">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 text-left">
                  <strong className="block text-xs font-semibold leading-4 text-brand">
                    {point.title}
                  </strong>
                  <span className="mt-1 block text-xs leading-4 text-ink-muted">
                    {point.detail}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <div className="relative">
        <img
          src={data.heroImage.src}
          alt={data.heroImage.alt}
          className="h-[340px] w-full rounded-[2rem] object-cover sm:h-[480px] lg:h-[560px]"
        />
        <div className="absolute -bottom-5 left-5 max-w-[230px] rounded-2xl bg-white p-4 shadow-card sm:bottom-7 sm:-left-6 sm:max-w-[270px] sm:p-5">
          <p className="font-display text-lg font-medium text-brand capitalize">
            {data.reassurance.title}
          </p>
          <p className="mt-1 text-sm leading-6 text-ink-muted capitalize">
            {data.reassurance.description}
          </p>
        </div>
      </div>
    </Section>
  );
}
