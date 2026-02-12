import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import OrganizersSection from "@/components/OrganizersSection";
import PartnersSection from "@/components/PartnersSection";
import PortfolioSection from "@/components/PortfolioSection";
import RuleSection from "@/components/RuleSection";
import SignUpSection from "@/components/SignUpSection";
import SparkSection from "@/components/SparkSection";
import SupportSection from "@/components/SupportSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <RuleSection />
      <SparkSection />
      <OrganizersSection />
      <PortfolioSection />
      <LocationSection />
      <PartnersSection />
      <SupportSection />
      <SignUpSection />
      <Footer />
    </main>
  );
};

export default Index;
