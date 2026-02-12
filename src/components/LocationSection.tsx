import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import venueBg from "@/assets/venue-bg.jpg";

const LocationSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative w-full overflow-hidden section-padding">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={venueBg}
          alt="NexEvate venue interior"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/60" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow">
        <div className="max-w-xl">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Location
            </p>
            <h2 className="headline-section text-foreground mb-6">
              The Apex Room
            </h2>
            <div className="divider-line mb-8" />
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="body-editorial mb-6">
              A private penthouse venue suspended above the city skyline — designed
              for conversations that reshape industries. Intimate, soundproofed,
              and invisible to the public.
            </p>

            <p className="font-sans text-sm text-muted-foreground mb-8 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Upper East Side, New York City
            </p>

            <Button variant="heroOutline" size="lg">
              View on Map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
