import PageContainer from "../components/layout/PageContainer";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CTASection from "../components/home/CTASection";

// página inicial do produto
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* barra superior */}
      <Navbar />

      {/* conteúdo principal */}
      <main>
        <PageContainer>
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <CTASection />
        </PageContainer>
      </main>

      {/* rodapé */}
      <Footer />
    </div>
  );
}