import { useSiteContent } from "../hooks/useSiteContent";
import PageIntro from "../components/layout/PageIntro";
import Gallery from "../components/home/Gallery";
import DailyLife from "../components/home/DailyLife";

export default function GalleryPage() {
  const query = useSiteContent();
  return <main>
    <PageIntro page={query.data?.pages.gallery} isLoading={query.isLoading} isError={query.isError} error={query.error} onRetry={query.refetch} />
    <Gallery />
    <DailyLife />
  </main>;
}
