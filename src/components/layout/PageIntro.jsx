import { motion } from "framer-motion";
import Container from "../ui/Container";
import Skeleton from "../ui/Skeleton";
import QueryState from "../home/QueryState";

/** Reusable page banner whose title, introduction and photo are supplied by API data. */
export default function PageIntro({
  page,
  isLoading,
  isError,
  error,
  onRetry,
}) {
  if (isLoading)
    return (
      <section className="py-12 md:py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Skeleton lines={4} />
          <Skeleton className="h-72 rounded-3xl" />
        </Container>
      </section>
    );
  if (isError)
    return (
      <section className="py-12 md:py-16">
        <Container>
          <QueryState error={error} onRetry={onRetry} />
        </Container>
      </section>
    );
  if (!page)
    return (
      <section className="py-12 md:py-16">
        <Container>
          <QueryState isEmpty />
        </Container>
      </section>
    );
  return (
    <section className="bg-white py-12 md:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-amber-dark">
            {page.eyebrow}
          </p>
          <h1 className="font-display text-3xl font-medium leading-tight text-brand sm:text-4xl capitalize">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted capitalize">
            {page.description}
          </p>
        </motion.div>
        <img
          src={page.image}
          alt={page.imageAlt}
          className="h-64 w-full rounded-3xl object-cover sm:h-80 lg:h-[360px]"
        />
      </Container>
    </section>
  );
}
