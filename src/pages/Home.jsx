import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import DailyLife from "../components/home/DailyLife";
import Gallery from "../components/home/Gallery";
import GetInvolved from "../components/home/GetInvolved";
import Faq from "../components/home/Faq";
import CtaBanner from "../components/home/CtaBanner";
import Environment from "../components/home/Environment";

/** Home page composed from independently reusable content sections. */
export default function Home() {
  return <main>
    <Hero />
    <About />
    <Environment />
    <Services />
    <DailyLife />
    <Gallery />
    <GetInvolved />
    <Faq />
    <CtaBanner />
  </main>;
}
