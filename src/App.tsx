import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { SocialProof } from "@/components/sections/social-proof";
import { Audience } from "@/components/sections/audience";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Faq } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { LeadModal } from "@/components/lead-modal";
import { BackToTop } from "@/components/back-to-top";

export default function App() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:font-bold focus:text-ink-deep">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <TrustStats />
        <SocialProof />
        <Services />
        <Audience />
        <HowItWorks />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <BackToTop />
      <LeadModal />
    </>
  );
}
