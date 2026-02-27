import Navbar from '@/components/NavBar';
import HeroSection from '@/components/landing/HeroSection';
import PhilosophySection from '@/components/landing/PhilosophySection';
import ProtocolSection from '@/components/landing/ProtocolSection';
import FormatSection from '@/components/landing/SparkSection';
import ArchitectsSection from '@/components/landing/OrganizersSection';
import SupportSection from '@/components/landing/SupportSection';
import SelectionSection from '@/components/landing/SignUpSection';
import Footer from '@/components/landing/Footer';
import PortfolioSection from '@/components/landing/PortfolioSection';
import EventsSection from '@/components/landing/EventSection';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProtocolSection />
        <FormatSection />
        <ArchitectsSection />
        <PortfolioSection />
        <EventsSection/>
        <SupportSection />
        <SelectionSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
 