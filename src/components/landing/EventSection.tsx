import { useState } from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import pavacenter from "@/assets/events_location/pava_center.jpg";
import nashcenter from "@/assets/events_location/nashville_ec.jpg";
import warnertheatre from "@/assets/events_location/warner_theatre.jpg";
import fillmore from "@/assets/events_location/fillmoresilverspring.jpg";

const events = [
    {
      title: "Nexevate Conference 2026",
      location: "320 W 29th St #200, Baltimore",
      date: "March 15 · 6:00 pm",
      image: pavacenter,
      description: "It's a test event on March",
    },
    {
      title: "Ideas for a better future",
      location: "41 Peabody St, Nashville",
      date: "April 5 · 8:30pm",
      image: nashcenter,
      description: "It's a test event on April.",
    },
    {
      title: "Tech Conference 2026",
      location: "513 13th St NW, Washington",
      date: "April 15 · 8:00pm",
      image: warnertheatre,
      description: "It's a test event on April.",
    },
    {
      title: "Festival Cultural",
      location: "8656 Colesville Rd, Silver Spring",
      date: "May 5 · 8:30pm",
      image: fillmore,
      description: "It's a test event on May",
    }
]

export default function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="events" className="w-full min-h-screen border-t border-border bg-background text-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

    {/* LEFT SIDE */}
    {/* LEFT SIDE */}
<div className="flex flex-col h-full px-8 md:px-16 py-16 border-r border-border">

  {events.map((event, index) => {
    const isActive = index === activeIndex;

    return (
      <motion.div
        key={event.title}
        layout
        onClick={() => setActiveIndex(index)}
        transition={{
          layout: {
            // type: "",
            stiffness: 120,
            damping: 20,
          },
        }}
        className={`
          border-b border-border cursor-pointer
          flex flex-col justify-center
          ${isActive ? "flex-1 py-10" : "flex-none py-6"}
        `}
      >
        {/* TÍTULO (MISMO TAMAÑO SIEMPRE) */}
        <h3 className="text-3xl md:text-4xl font-light">
          {event.title}
        </h3>

        {/* CONTENIDO EXPANDIDO */}
        {isActive && (
          <div className="mt-6 text-muted-foreground">
            <p>{event.location}</p>
            <p>{event.date}</p>

            <p className="mt-4 max-w-md">
              {event.description}
            </p>
          </div>
        )}
      </motion.div>
    );
  })}

</div>

        {/* RIGHT SIDE */}
        <div className="relative h-full overflow-hidden">

        <AnimatePresence mode="wait">
            <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            >
            {/* IMAGE FULL */}
            <img
                src={events[activeIndex].image}
                alt={events[activeIndex].title}
                className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY (para legibilidad) */}
            <div className="absolute inset-0 bg-gradient-hero" />

            {/* TEXT OVER IMAGE */}
            <div className="absolute bottom-12 left-12 right-12 text-white">
                <h4 className="text-3xl md:text-5xl font-light mb-4">
                {events[activeIndex].title}
                </h4>

                <p className="max-w-xl text-lg opacity-90">
                {events[activeIndex].description}
                </p>
            </div>
            </motion.div>
        </AnimatePresence>

        </div>

      </div>
    </section>
  );
}