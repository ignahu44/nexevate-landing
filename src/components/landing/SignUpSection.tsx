import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
// import { useState } from 'react';

const SignUpSection = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="signup" className="relative py-32 md:py-48 bg-background overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-gold/20 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gold/10 rotate-12" />
      </div>

      <div className="section-container relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">

          {/* Section Label */}
          <p className={`text-xs tracking-ultra uppercase text-cream mb-10 reveal ${isVisible ? 'visible' : ''}`}> Selection </p>

          {/* Headline */}
          <h2 className={`font-display text-4xl md:text-5xl lg:text-5xl font-medium text-gradient-gold mb-8 leading-tight reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            It's Not Networking.
            <br />
            <span className="text-gradient-gold">It's the Room Where It Happens.</span>
          </h2>

          {/* Divider */}
          {/* <div className={`divider-line mx-auto mb-10 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`} /> */}

          {/* Key points */}
          <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mb-12 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-gradient-gold">50–100</p>
              <p className="text-xs tracking-ultra uppercase text-cream-muted mt-2">Seats Per Event</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-gradient-gold">100%</p>
              <p className="text-xs tracking-ultra uppercase text-cream-muted mt-2">Vetted Attendees</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl text-gradient-gold">∞</p>
              <p className="text-xs tracking-ultra uppercase text-cream-muted mt-2">Potential</p>
            </div>
          </div>

          <p className="body-large mb-12 text-foreground/80">
            We don't sell tickets. We extend invitations to those ready to step beyond 
            the glass wall. If you believe you belong in this room, we'd like to know you.
          </p>


          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1.2s' }}
          ></div>
          <button className="btn-hero">
            Sign Up — Be the First to Know When the Next Door Opens
          </button>
          {/* <button className="btn-registration hover:shadow-[0_0_40px_rgba(196,160,80,0.4)]">
            Sign Up — Be the First to Know When the Next Door Opens
          </button> */}
          <p className="text-xs text-muted-foreground mt-4">
            All applications are reviewed. Admission is by invitation only.
          </p>

        </div>
      </div>
    </section>
  );
};

export default SignUpSection;




