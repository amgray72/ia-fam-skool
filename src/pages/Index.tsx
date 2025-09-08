import { BackToSchoolPromo } from "@/components/BackToSchoolPromo";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WeeklyChallengesSection } from "@/components/WeeklyChallengesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BackToSchoolPromo />
      <HeroSection />
      <FeaturesSection />
      <WeeklyChallengesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;