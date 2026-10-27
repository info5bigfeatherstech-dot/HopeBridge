import { useSiteContent } from "../hooks/useSiteContent";
import PageIntro from "../components/layout/PageIntro";
import Services from "../components/home/Services";
import DailyLife from "../components/home/DailyLife";
import GetInvolved from "../components/home/GetInvolved";

export default function CarePage() {
  const query = useSiteContent();
  return <main>
    <PageIntro page={query.data?.pages.care} isLoading={query.isLoading} isError={query.isError} error={query.error} onRetry={query.refetch} />
    <Services />
    <DailyLife />
    <GetInvolved />
  </main>;
}
