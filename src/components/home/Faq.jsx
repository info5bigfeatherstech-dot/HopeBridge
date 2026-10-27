import { useFaqs } from "../../hooks/useFaqs";
import { useHero } from "../../hooks/useHero";
import useUIStore from "../../store/useUIStore";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

/** FAQ list with its expanded item kept in Zustand for cross-page continuity. */
export default function Faq() {
  const query = useFaqs();
  const heading = useHero();
  const openFaqId = useUIStore((state) => state.openFaqId);
  const setOpenFaqId = useUIStore((state) => state.setOpenFaqId);
  if (query.isLoading)
    return (
      <Section>
        <Skeleton lines={5} />
      </Section>
    );
  if (query.isError)
    return (
      <Section>
        <QueryState error={query.error} onRetry={query.refetch} />
      </Section>
    );
  const faqs = query.data ?? [];
  if (!faqs.length)
    return (
      <Section>
        <QueryState isEmpty />
      </Section>
    );
  const title = heading.data?.faqSection;
  return (
    <Section>
      <SectionHeading
        eyebrow={title?.eyebrow}
        title={title?.title}
        align="center"
        className="mx-auto capitalize"
      />
      <div className="mx-auto mt-8 max-w-3xl capitalize">
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            id={faq.id}
            title={faq.question}
            open={openFaqId === faq.id}
            onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
          >
            {faq.answer}
          </Accordion>
        ))}
      </div>
    </Section>
  );
}
