import { useScrollReveal } from '@/hooks/useScrollReveal';

const PhilosophySection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="about" className="relative py-32 md:py-40 bg-background">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            {/* Section Label */}
            <p className="text-xs tracking-ultra uppercase text-cream mb-6">
              The Philosophy
            </p>

            {/* Headline */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-gradient-gold mb-8 leading-tight">
              Beyond the
              <br />
              <span className="text-gradient-gold">Glass Wall</span>
            </h2>

            {/* Divider */}
            <div className="divider-line mb-8" />

            {/* Copy */}
            <div className="space-y-6 manifesto-text">
              <p>
                There exists a divide between <strong>surface-level networking</strong> and 
                the inner sanctum where decisions that shape industries are made. 
                Most never cross it.
              </p>
              <p>
                Nexevate is a <strong>sanctuary for Founders, C-Suite executives, 
                and Investors</strong> — a curated space where the gatekeepers become 
                collaborators and the impossible becomes inevitable.
              </p>
              <p>
                We practice what we call <strong>3D Stacking</strong>: vertical expansion 
                through mentorship and knowledge transfer, horizontal growth through 
                peer networks that transcend industry silos.
              </p>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* Abstract geometric element */}
              <div className="aspect-square relative">
                {/* Outer ring */}
                <div className="absolute inset-0 border border-border rounded-full" />
                
                {/* Middle ring */}
                <div className="absolute inset-8 border border-gold/30 rounded-full" />
                
                {/* Inner ring */}
                <div className="absolute inset-16 border border-gold/50 rounded-full" />
                
                {/* Center element */}
                <div className="absolute inset-24 bg-gradient-to-br from-gold/20 to-transparent rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-display text-5xl md:text-6xl text-[#CA9440] font-medium">50</p>
                    <p className="text-xs tracking-ultra uppercase text-cream-muted mt-2">Select Few</p>
                  </div>
                </div>

                {/* Decorative lines */}
                <div className="absolute top-1/2 left-0 w-8 h-px bg-gradient-to-r from-gold to-transparent" />
                <div className="absolute top-1/2 right-0 w-8 h-px bg-gradient-to-l from-gold to-transparent" />
                <div className="absolute left-1/2 top-0 w-px h-8 bg-gradient-to-b from-gold to-transparent" />
                <div className="absolute left-1/2 bottom-0 w-px h-8 bg-gradient-to-t from-gold to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
    </section>
  );
};

export default PhilosophySection;
