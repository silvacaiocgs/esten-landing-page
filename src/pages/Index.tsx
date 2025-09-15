import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProductsSection } from "../components/ProductsSection";
import { FinalCtaSection } from "../components/FinalCtaSection";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <FinalCtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Index;
