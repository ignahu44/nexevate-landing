import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/PhilosophySection';
import ProtocolSection from '@/components/landing/ProtocolSection';
import SparkSection from '@/components/landing/SparkSection';
import OrganizersSection from '@/components/landing/OrganizersSection';
import SupportSection from '@/components/landing/SupportSection';
import SignUpSection from '@/components/landing/SignUpSection';
import Footer from '@/components/landing/Footer';
import PortfolioSection from '@/components/landing/PortfolioSection';
import LocationSection from '@/components/landing/LocationSection';
import PartnersSection from '@/components/landing/PartnersSection';
import PartnersCardsSection from '@/components/landing/PartnersCardsSection';
import Navbar from '@/components/NavBar';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProtocolSection />
        <SparkSection />
        <OrganizersSection />
        <PortfolioSection />
        <LocationSection />
        <SupportSection />
        <SignUpSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
 