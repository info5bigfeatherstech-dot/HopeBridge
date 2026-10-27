import { useSiteContent } from "../hooks/useSiteContent";
import PageIntro from "../components/layout/PageIntro";
import About from "../components/home/About";
import Environment from "../components/home/Environment";

export default function AboutPage() {
  const query = useSiteContent();
  return <main>
    <PageIntro page={query.data?.pages.about} isLoading={query.isLoading} isError={query.isError} error={query.error} onRetry={query.refetch} />
    <About />
    <Environment />
  </main>;
}
