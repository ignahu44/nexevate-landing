import { useEffect, useState } from 'react';
import heroVideo from "@/assets/hero-video.mp4";


const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // const scrollToNext = () => {
  //   const aboutSection = document.getElementById('about');
  //   aboutSection?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}

        <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl">

          {/* Main Headline */}
          <h1 
            className={`font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-cream mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Information You Can't Search.
            <br />
            <span className="text-gradient-gold">A Journey You Can't Replicate.</span>
          </h1>

          {/* Sub-headline */}
          <p 
            className={`font-display text-xl md:text-2xl text-cream-muted mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            Nexevate marks the end of networking and the beginning of your expansion.
          </p>

          {/* Supporting copy */}
          <p 
            className={`font-body text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            We bring 50–100 vetted leaders into a room with the architects of industry
            to dismantle the glass wall and rebuild the future.
          </p>

          {/* Hook / Emphasis */}
          <p 
            className={`font-body text-sm tracking-wide-custom uppercase text-gold/80 mb-12 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            No business cards. No fluff. This is the room where it happens.
          </p>

          {/* CTA */}
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            <button className="btn-hero"> Apply for the Experience </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
