import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    startIndex: 0,
    containScroll: false,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      {/* Full-width cinematic carousel */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {upcomingEvents.map((event, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={event.id}
                  className="relative flex-[0_0_90%] md:flex-[0_0_85%] lg:flex-[0_0_80%] min-w-0 transition-all duration-600 ease-out"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.95)",
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  {/* Full cinematic slide */}
                  <div className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={event.image}
                      alt={event.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* Dark Overlays */}
                    <div className="absolute inset-0 bg-background/65" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/60 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/60 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex-col justify-end container-narrow pb-16 md:pb-24 lg:pb-32">
                      <p className="mb-4 font-sans text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-primary">
                        {event.label}
                      </p>
                      <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] mb-4 md:mb-6">
                        {event.name}
                      </h3>

                      {/* Description – active slide only */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: isActive ? "100px" : "0px",
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        <p className="body-editorial line-clamp-2 max-w-2xl mb-6">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <span className="font-sans text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          {event.date}
                        </span>
                        <span className="font-sans text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          {event.city} · {event.venue}
                        </span>
                      </div>

                      {/* CTA – active only */}
                      <div
                        className="transition-all duration-500"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? "translateY(0)" : "translateY(12px)",
                          pointerEvents: isActive ? "auto" : "none",
                        }}
                      >
                        <Button variant="heroOutline" size="lg">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2.5 mt-8 md:mt-12 pb-16 md:pb-24">
          {upcomingEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                index === activeIndex
                  ? "w-10 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
