import { useEffect, useRef, useState } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";
import { useStats } from "../../hooks/useStats";
import { useHero } from "../../hooks/useHero";
import Section from "../ui/Section";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

function AnimatedValue({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);
  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) { setCount(value); return undefined; }
    let frame;
    const start = performance.now();
    const duration = 1100;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

/** Scroll-triggered counters with reduced-motion support. */
export default function Stats() {
  const query = useStats();
  const heading = useHero();
  return <Section bg="white">
    <div className="mx-auto max-w-3xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-amber-dark">{heading.data?.statsSection.eyebrow}</p><h2 className="font-display text-3xl font-medium leading-tight text-brand sm:text-4xl">{heading.data?.statsSection.title}</h2></div>
    {query.isLoading ? <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton key={index} lines={2} />)}</div> :
      query.isError ? <div className="mt-10"><QueryState error={query.error} onRetry={query.refetch} /></div> :
      !query.data?.length ? <div className="mt-10"><QueryState isEmpty /></div> :
      <div className="mt-12 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">{query.data.map((stat, index) => <motion.div key={stat.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35, delay: index * 0.06 }} className={`px-4 text-center ${index % 2 !== 0 ? "sm:border-l sm:border-gray-200" : ""} ${index > 1 ? "lg:border-l lg:border-gray-200" : ""}`}><p className="font-display text-3xl font-medium text-brand sm:text-4xl"><AnimatedValue value={stat.value} suffix={stat.suffix} /></p><p className="mt-2 text-base text-ink-muted">{stat.label}</p></motion.div>)}</div>}
  </Section>;
}
