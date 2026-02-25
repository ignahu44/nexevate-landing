import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, Users } from 'lucide-react';

const SupportSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="support" className="relative py-32 md:py-40 bg-charcoal">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="section-container">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Support Block */}
          <div className={`relative p-10 lg:p-14 bg-background border border-border reveal flex flex-col ${isVisible ? 'visible' : ''}`}>
            <div className="mb-8">
              <Shield className="w-10 h-10 text-gold stroke-[1.5]" />
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
              Support
            </h3>
            
            <p className="text-cream-muted mb-8 leading-relaxed">
              Ensuring the integrity of the room. Our support network maintains 
              the standards that make Nexevate a sanctuary for meaningful exchange.
            </p>

            <button className="btn-ghost mt-auto">
              Learn More
            </button>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/30" />
          </div>

          {/* Volunteer Block */}
          <div className={`relative p-10 lg:p-14 bg-background border border-border reveal flex flex-col reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="mb-8">
              <Users className="w-10 h-10 text-gold stroke-[1.5]" />
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl text-cream mb-4">
              Volunteer
            </h3>
            
            <p className="text-cream-muted mb-8 leading-relaxed">
              Nexevate Ground Crew Behind every seamless experience is a team that cares about the details. Our Ground Crew are not volunteers in the traditional sense—they are future leaders gaining access through contribution.
              If you're building something and believe in the power of proximity to exceptional people, this is your entry point. Help us create the environment where transformation happens, and you'll find yourself transformed in the process.
            </p>

            <button className="btn-ghost mt-auto">
              Join the Crew
            </button>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/30" />
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default SupportSection;
