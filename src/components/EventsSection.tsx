import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
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

const EventsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const events = useMemo(() => {
    return [...apiEvents].sort((a, b) => a.dateSort - b.dateSort).slice(0, 3);
  }, []);

  const [activeId, setActiveId] = useState(events[0]?.id ?? "");
  const activeEvent = events.find((e) => e.id === activeId) ?? events[0];

  return (
    <section
      ref={ref}
      className={`section-padding bg-background transition-all duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container-narrow mb-12 md:mb-16">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Upcoming Events
        </p>
        <h2 className="headline-section text-foreground">
          Where It Happens
        </h2>
      </div>

      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 min-h-[520px] md:min-h-[600px] overflow-hidden rounded-sm border border-border">
          {/* LEFT — Accordion */}
          <div className="flex flex-col bg-card">
            {events.map((event) => {
              const isOpen = event.id === activeId;
              return (
                <button
                  key={event.id}
                  onClick={() => setActiveId(event.id)}
                  className={`w-full text-left border-b border-border transition-colors duration-300 ${
                    isOpen ? "bg-secondary/50" : "hover:bg-secondary/30"
                  }`}
                >
                  <div className="px-6 md:px-8 py-5 md:py-6">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-primary mb-1">
                          {event.label}
                        </p>
                        <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground leading-tight">
                          {event.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            {event.date}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground mt-1 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Expanded content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4">
                            <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                              <MapPin className="h-3.5 w-3.5 text-primary" />
                              {event.city} · {event.venue}
                            </span>
                            <p className="body-editorial text-sm leading-relaxed line-clamp-3">
                              {event.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — Dynamic Hero */}
          <div className="relative min-h-[400px] lg:min-h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* BG Image */}
                <img
                  src={activeEvent.image}
                  alt={activeEvent.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-background/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-primary mb-3">
                      {activeEvent.label}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-[1.1] mb-3">
                      {activeEvent.name}
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {activeEvent.date}
                      </span>
                      <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {activeEvent.city}
                      </span>
                    </div>
                    <p className="body-editorial text-sm leading-relaxed max-w-md mb-8">
                      {activeEvent.description}
                    </p>

                    {/* Speakers */}
                    <div>
                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-primary mb-4">
                        Speakers
                      </p>
                      <div className="flex gap-3">
                        {activeEvent.speakers.map((speaker, i) => (
                          <motion.div
                            key={speaker.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.35,
                              delay: 0.2 + i * 0.08,
                            }}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-border hover:border-primary transition-colors duration-300"
                          >
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
