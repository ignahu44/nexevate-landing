import { useScrollReveal } from '@/hooks/useScrollReveal';

const RuleSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-32 md:py-40 bg-charcoal">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      
      <div className="section-container">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <p className={`text-xs tracking-ultra uppercase text-gold mb-8 reveal ${isVisible ? 'visible' : ''}`}>
            The Protocol
          </p>

          {/* Headline */}
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cream mb-12 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            The Rule:
            <br />
            <span className="text-gradient-gold">No Business Cards</span>
          </h2>

          {/* Divider */}
          <div className={`divider-line mx-auto mb-12 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`} />

          {/* Manifesto statements */}
          <div className={`space-y-8 reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
            <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed">
              Business cards are <span className="text-gold">prohibited</span>.
            </p>
            
            <p className="font-display text-2xl md:text-3xl text-cream-muted leading-relaxed">
              Human presence over digital noise.
            </p>
            
            <p className="font-display text-2xl md:text-3xl text-cream-muted leading-relaxed">
              Conversations must <span className="text-cream">earn</span> their follow-up.
            </p>
          </div>

          {/* Visual separator */}
          <div className={`mt-16 flex items-center justify-center gap-4 reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
            <div className="w-2 h-2 bg-gold/30 rotate-45" />
            <div className="w-3 h-3 bg-gold/50 rotate-45" />
            <div className="w-4 h-4 bg-gold rotate-45" />
            <div className="w-3 h-3 bg-gold/50 rotate-45" />
            <div className="w-2 h-2 bg-gold/30 rotate-45" />
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default RuleSection;
