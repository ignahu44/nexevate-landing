import { useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import venueBg from "@/assets/venue-bg.jpg";
import organizer2 from "@/assets/organizer-2.jpg";
import organizer3 from "@/assets/organizer-3.jpg";
import speaker1 from "@/assets/speaker-1.jpg";
import speaker2 from "@/assets/speaker-2.jpg";
import speaker3 from "@/assets/speaker-3.jpg";
import speaker4 from "@/assets/speaker-4.jpg";
import speaker5 from "@/assets/speaker-5.jpg";

interface Speaker {
  id: string;
  name: string;
  image: string;
}

interface EventData {
  id: string;
  label: string;
  name: string;
  description: string;
  date: string;
  dateSort: number;
  city: string;
  venue: string;
  image: string;
  speakers: Speaker[];
}

// Simulated API data — replace with real fetch
const apiEvents: EventData[] = [
  {
    id: "evt-1",
    label: "NEXT EVENT",
    name: "The Obsidian Summit",
    description:
      "An invitation-only convergence of 80 operators, investors, and architects of industry — held in a private penthouse suspended above the Manhattan skyline.",
    date: "September 18, 2026",
    dateSort: new Date("2026-09-18").getTime(),
    city: "New York City",
    venue: "The Apex Room",
    image: venueBg,
    speakers: [
      { id: "s1", name: "James Crawford", image: speaker1 },
      { id: "s2", name: "Mei Lin", image: speaker2 },
      { id: "s3", name: "Hiroshi Tanaka", image: speaker3 },
      { id: "s4", name: "Amara Obi", image: speaker4 },
      { id: "s5", name: "Laurent Duval", image: speaker5 },
    ],
  },
  {
    id: "evt-2",
    label: "UPCOMING",
    name: "The Meridian Exchange",
    description:
      "A curated evening of un-googleable insight, connecting founders and allocators across emerging verticals in a landmark London venue.",
    date: "November 7, 2026",
    dateSort: new Date("2026-11-07").getTime(),
    city: "London",
    venue: "The Cartography House",
    image: organizer2,
    speakers: [
      { id: "s2", name: "Mei Lin", image: speaker2 },
      { id: "s4", name: "Amara Obi", image: speaker4 },
      { id: "s5", name: "Laurent Duval", image: speaker5 },
    ],
  },
  {
    id: "evt-3",
    label: "UPCOMING",
    name: "The Pacific Thesis",
    description:
      "Where Asia-Pacific's sharpest minds meet transatlantic capital — 60 seats, zero spectators, one evening that redefines trajectories.",
    date: "January 22, 2027",
    dateSort: new Date("2027-01-22").getTime(),
    city: "Singapore",
    venue: "The Lumen Terrace",
    image: organizer3,
    speakers: [
      { id: "s1", name: "James Crawford", image: speaker1 },
      { id: "s3", name: "Hiroshi Tanaka", image: speaker3 },
      { id: "s5", name: "Laurent Duval", image: speaker5 },
    ],
  },
];

const MAX_VISIBLE = 3;

const EventCard = ({
  event,
  index,
}: {
  event: EventData;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-sm min-h-[420px] md:min-h-[460px] flex flex-col justify-end"
  >
    {/* Background image */}
    <img
      src={event.image}
      alt={event.name}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-background/60 transition-colors duration-500 group-hover:bg-background/70" />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

    {/* Content */}
    <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
      {/* Label */}
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
        {event.label}
      </p>

      {/* Title */}
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight">
        {event.name}
      </h3>

      {/* Description */}
      <p className="body-editorial text-sm leading-relaxed text-muted-foreground line-clamp-2 max-w-lg">
        {event.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-5">
        <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-primary" />
          {event.date}
        </span>
        <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {event.city} · {event.venue}
        </span>
      </div>

      {/* Speakers */}
      <div className="pt-2">
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-primary mb-3">
          Speakers
        </p>
        <div className="flex -space-x-2">
          {event.speakers.map((speaker, i) => (
            <Tooltip key={speaker.id}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + i * 0.07,
                  }}
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-background ring-1 ring-border hover:ring-primary hover:z-10 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                className="bg-popover text-popover-foreground text-xs"
              >
                {speaker.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const EventsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.05);

  const events = useMemo(() => {
    return [...apiEvents].sort((a, b) => a.dateSort - b.dateSort).slice(0, MAX_VISIBLE);
  }, []);

  const hasMore = apiEvents.length > MAX_VISIBLE;

  return (
    <section
      ref={ref}
      className={`section-padding bg-background transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Header */}
      <div className="container-narrow mb-12 md:mb-16">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Upcoming Events
        </p>
        <h2 className="headline-section text-foreground">Where It Happens</h2>
      </div>

      {/* Event cards grid */}
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* View More */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <Button variant="heroOutline" size="lg" className="gap-2">
              View More Events
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
