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
    align: "center",
    loop: true,
    skipSnaps: false,
    startIndex: 0,
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
    <section ref={ref} className="relative w-full overflow-hidden section-padding">
      {/* Section Header */}
      <div
        className={`container-narrow mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Upcoming Events
        </p>
        <h2 className="headline-section text-foreground">Where We Convene</h2>
        <div className="divider-line mt-6" />
      </div>

      {/* Stacked Carousel */}
      <div
        className={`transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {upcomingEvents.map((event, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={event.id}
                  className="relative flex-[0_0_80%] sm:flex-[0_0_70%] md:flex-[0_0_60%] lg:flex-[0_0_55%] min-w-0 px-2 md:px-3 transition-all duration-500 ease-out"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(0.88)",
                    opacity: isActive ? 1 : 0.45,
                    filter: isActive ? "none" : "brightness(0.7)",
                  }}
                >
                  {/* Card */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/10] overflow-hidden rounded-sm">
                    {/* Background Image */}
                    <img
                      src={event.image}
                      alt={event.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-background/70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-10 lg:p-12">
                      <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
                        {event.label}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-3">
                        {event.name}
                      </h3>

                      {/* Description – only visible on active slide */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: isActive ? "80px" : "0px",
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        <p className="body-editorial line-clamp-2 mb-4">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          {event.date}
                        </span>
                        <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          {event.city}
                        </span>
                      </div>

                      {/* CTA – only on active slide */}
                      <div
                        className="transition-all duration-500"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? "translateY(0)" : "translateY(8px)",
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
        <div className="flex justify-center gap-2 mt-8">
          {upcomingEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                index === activeIndex
                  ? "w-8 bg-primary"
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
