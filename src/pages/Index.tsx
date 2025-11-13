import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AlertBanner } from "@/components/AlertBanner";
import { AboutSection } from "@/components/AboutSection";
import { WhySection } from "@/components/WhySection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { TeachersSection } from "@/components/TeachersSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Chatbot } from "@/components/Chatbot";
import { Footer } from "@/components/Footer";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AlertBanner />
      <AboutSection />
      <WhySection />
      <CurriculumSection />
      <TeachersSection />
      <BlogSection />
      <ContactSection />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Index;
