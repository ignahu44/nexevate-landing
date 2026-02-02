import heroVideo from "@/assets/hero-video.mp4";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          {/* Pre-headline */}
          <p className="animate-fade-up mb-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary opacity-0 delay-100">
            Invitation Only
          </p>

          {/* Main Headline */}
          <h1 className="animate-fade-up headline-display mb-8 text-foreground opacity-0 delay-200">
            Information You Can't Search.
            <br />
            <span className="text-gradient-gold">A Journey You Can't Replicate.</span>
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-up body-large mb-6 max-w-3xl mx-auto text-foreground/80 opacity-0 delay-300">
            NexEvate marks the end of networking and the beginning of your expansion.
          </p>

          {/* Supporting copy */}
          <p className="animate-fade-up body-editorial mb-4 max-w-2xl mx-auto opacity-0 delay-400">
            We bring 50–100 vetted leaders into a room with the architects of industry 
            to dismantle the glass wall and rebuild the future.
          </p>

          {/* Hook text */}
          <p className="animate-fade-up mb-10 font-serif text-lg italic text-ivory-muted opacity-0 delay-500">
            "No business cards. No fluff. This is the room where it happens."
          </p>

          {/* CTA */}
          <div className="animate-fade-up opacity-0 delay-600">
            <Button variant="hero" size="xl">
              Apply for the Experience
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-scroll-indicator">
          <ChevronDown className="h-8 w-8 text-foreground/40" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
