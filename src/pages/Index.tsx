import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MarqueeSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;