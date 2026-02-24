import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building2 } from "lucide-react";
import venueBg from "@/assets/venue-bg.jpg";
import organizer2 from "@/assets/organizer-2.jpg";
import organizer3 from "@/assets/organizer-3.jpg";

interface EventData {
  id: string;
  label: string;
  name: string;
  description: string;
  date: string;
  city: string;
  venue: string;
  image: string;
}

const upcomingEvents: EventData[] = [
  {
    id: "evt-1",
    label: "NEXT EVENT",
    name: "The Obsidian Summit",
    description:
      "An invitation-only convergence of 80 operators, investors, and architects of industry — held in a private penthouse suspended above the Manhattan skyline.",
    date: "September 18, 2026",
    city: "New York City",
    venue: "The Apex Room",
    image: venueBg,
  },
  {
    id: "evt-2",
    label: "UPCOMING",
    name: "The Meridian Exchange",
    description:
      "A curated evening of un-googleable insight, connecting founders and allocators across emerging verticals in a landmark London venue.",
    date: "November 7, 2026",
    city: "London",
    venue: "The Cartography House",
    image: organizer2,
  },
  {
    id: "evt-3",
    label: "UPCOMING",
    name: "The Pacific Thesis",
    description:
      "Where Asia-Pacific's sharpest minds meet transatlantic capital — 60 seats, zero spectators, one evening that redefines trajectories.",
    date: "January 22, 2027",
    city: "Singapore",
    venue: "The Lumen Terrace",
    image: organizer3,
  },
];

const EventsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const featured = upcomingEvents[featuredIndex];
  const secondary = upcomingEvents.filter((_, i) => i !== featuredIndex);

  const handleSelectEvent = useCallback(
    (index: number) => {
      if (index === featuredIndex || isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setFeaturedIndex(index);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 300);
    },
    [featuredIndex, isTransitioning]
  );

  return (
    <section ref={ref} className="relative w-full overflow-hidden section-padding">
      {/* Background Image */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={featured.image}
          alt={featured.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow">
        {/* Featured Event */}
        <div className="max-w-xl mb-16 lg:mb-20">
          <div
            className={`transition-all duration-700 ${
              isVisible && !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {featured.label}
            </p>
            <h2 className="headline-section text-foreground mb-6">
              {featured.name}
            </h2>
            <div className="divider-line mb-8" />
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible && !isTransitioning
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="body-editorial mb-8">{featured.description}</p>

            <div className="flex flex-col gap-3 mb-8">
              <p className="font-sans text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                {featured.date}
              </p>
              <p className="font-sans text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {featured.city}
              </p>
              <p className="font-sans text-sm text-muted-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                {featured.venue}
              </p>
            </div>

            <Button variant="heroOutline" size="lg">
              View Details
            </Button>
          </div>
        </div>

        {/* Secondary Events */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            More Events
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {secondary.map((event) => {
              const originalIndex = upcomingEvents.findIndex(
                (e) => e.id === event.id
              );
              return (
                <button
                  key={event.id}
                  onClick={() => handleSelectEvent(originalIndex)}
                  className="group relative overflow-hidden rounded-sm border border-border/30 bg-card/60 backdrop-blur-sm text-left transition-all duration-500 hover:border-primary/30 hover:bg-card/80 focus:outline-none focus:ring-1 focus:ring-primary/40"
                >
                  <div className="flex gap-4 p-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-background/30" />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h3 className="font-serif text-base font-semibold text-foreground mb-1 truncate">
                        {event.name}
                      </h3>
                      <p className="font-sans text-xs text-muted-foreground mb-0.5">
                        {event.date}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary/70" />
                        {event.city}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
