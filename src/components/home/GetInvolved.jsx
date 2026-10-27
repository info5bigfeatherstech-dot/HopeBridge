import { HandHeart, Heart, UsersRound } from "lucide-react";
import { useHero } from "../../hooks/useHero";
import useUIStore from "../../store/useUIStore";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";
import QueryState from "./QueryState";

const icons = { Heart, HandHeart, UsersRound };

/** Three practical ways supporters can contribute to the foundation. */
export default function GetInvolved() {
  const { data, isLoading, isError, error, refetch } = useHero();
  const openDonate = useUIStore((state) => state.openDonateModal);
  if (isLoading)
    return (
      <Section id="get-involved" bg="gray">
        <Skeleton lines={4} />
      </Section>
    );
  if (isError)
    return (
      <Section id="get-involved" bg="gray">
        <QueryState error={error} onRetry={refetch} />
      </Section>
    );
  const content = data?.involvement;
  if (!content?.items?.length)
    return (
      <Section id="get-involved" bg="gray">
        <QueryState isEmpty />
      </Section>
    );
  return (
    <Section id="get-involved" bg="gray">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.description}
        align="center"
        className="mx-auto capitalize"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {content.items.map((item) => (
          <Card
            key={item.id}
            icon={icons[item.icon]}
            title={item.title}
            className="flex flex-col capitalize"
          >
            <p className="min-h-[84px] capitalize">{item.text}</p>
            <Button
              className="mt-5 self-start"
              variant={item.id === "donate" ? "primary" : "outline"}
              onClick={
                item.id === "donate"
                  ? openDonate
                  : () => {
                      window.location.hash = "contact";
                    }
              }
            >
              {item.action}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
