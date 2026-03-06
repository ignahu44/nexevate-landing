import { useState } from "react";
import { motion, AnimatePresence, easeIn } from "framer-motion";
import pavacenter from "@/assets/events_location/pava_center.jpg";
import nashcenter from "@/assets/events_location/nashville_ec.jpg";
import warnertheatre from "@/assets/events_location/warner_theatre.jpg";
import fillmore from "@/assets/events_location/fillmoresilverspring.jpg";
import speaker1 from "@/assets/speakers/speaker-1.jpg"
import speaker2 from "@/assets/speakers/speaker-2.jpg"
import speaker3 from "@/assets/speakers/speaker-3.jpg"
import speaker4 from "@/assets/speakers/speaker-4.jpg"
import speaker5 from "@/assets/speakers/speaker-5.jpg"

const events = [
  {
    title: "Nexevate Conference 2026",
    location: "320 W 29th St #200, Baltimore",
    date: "March 15 · 6:00 pm",
    image: pavacenter,
    description: "Nexevate Conference 2026 brings together founders, investors, and industry leaders for an immersive experience focused on innovation, startup growth, and scalable business strategies. The event features inspiring keynotes, venture capital panels, and curated networking sessions designed to spark meaningful connections. Ideal for entrepreneurs looking to accelerate their ventures and expand their professional network",
    speakers: [
      {
        "id" : 1,
        "image" : speaker1, 
        "name": "Raul"
      },
      {
        "id" : 2,
        "image" : speaker2, 
        "name": "Laura"
      },
      {
        "id" : 3,
        "image" : speaker3, 
        "name": "Augusto"
      }
    ]
  },
  {
    title: "Ideas for a better future",
    location: "41 Peabody St, Nashville",
    date: "April 5 · 8:30pm",
    image: nashcenter,
    description: "A collaborative gathering where entrepreneurs, creatives, and changemakers explore forward-thinking ideas aimed at building a better and more sustainable future. The event includes interactive ideation workshops, open pitch sessions, and rapid mentorship opportunities with experienced business and tech professionals. Perfect for innovators seeking feedback, partnerships, and inspiration",
    speakers: [
      {
        "id" : 1,
        "image" : speaker1, 
        "name": "Raul"
      },
      {
        "id" : 2,
        "image" : speaker2, 
        "name": "Laura"
      },
      {
        "id" : 3,
        "image" : speaker3, 
        "name": "Augusto"
      },
      {
        "id" : 4,
        "image" : speaker4, 
        "name": "Cristina"
      },
      {
        "id" : 5,
        "image" : speaker5, 
        "name": "Matt"
      }
    ]
  },
  {
    title: "Tech Conference 2026",
    location: "513 13th St NW, Washington",
    date: "April 15 · 8:00pm",
    image: warnertheatre,
    description: "Tech Conference 2026 is a premier event focused on emerging technologies, digital transformation, and startup ecosystems. Attendees will gain insights from tech founders, product leaders, and investors while exploring topics such as AI, SaaS growth, and product-market fit. A must-attend event for tech-driven entrepreneurs looking to stay ahead of industry trends",
    speakers: [
      {
        "id" : 1,
        "image" : speaker2, 
        "name": "Laura"
      },
      {
        "id" : 2,
        "image" : speaker4, 
        "name": "Cristina"
      },
      {
        "id" : 3,
        "image" : speaker5, 
        "name": "Matt"
      }
    ]
  },
  // {
  //   title: "Festival Cultural",
  //   location: "8656 Colesville Rd, Silver Spring",
  //   date: "May 5 · 8:30pm",
  //   image: fillmore,
  //   description: "Festival Cultural blends entrepreneurship with creativity, celebrating innovation across art, technology, and community initiatives. The event highlights local startups, creative founders, and cultural entrepreneurs through showcases, live talks, and networking experiences. A vibrant space where business meets culture and new collaborations are born",
  // }
];

export default function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="events"
      className="w-full min-h-screen border-t border-border text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* LEFT SIDE */}
        <div className="flex flex-col h-full px-8 md:px-16 py-16 border-r border-border">
          {/* HEADER SUPERIOR */}
          <div className="mb-12">
            <p className="text-xs tracking-ultra uppercase text-cream mb-6">
              {" "}
              Events{" "}
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-gradient-gold mb-8 leading-tight">
              Check our next events
            </h2>
          </div>

          {/* ACORDEÓN (OCUPA EL RESTO DEL ESPACIO) */}
          <div className="flex-1 flex flex-col">
            {events.map((event, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={event.title}
                  layout
                  onClick={() => setActiveIndex(index)}
                  transition={{
                    layout: {
                      type: "keyframes",
                      stiffness: 90,
                      damping: 25,
                    },
                  }}
                  className={`
            border-b border-border cursor-pointer
            flex flex-col justify-center
            ${isActive ? "flex-1 py-10" : "flex-none py-6"}
          `}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light">
                      {event.title}
                    </h3>
                    <p> {event.date} </p>
                  </div>

                  {isActive && (
                    <div className="mt-6 text-muted-foreground">
                      <p>{event.location}</p>
                      <p>{event.date}</p>

                      <p className="mt-4 max-w-md">{event.description}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
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

                <div className="my-8">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-primary mb-4">
                    Speakers
                  </p>
                  <div className="flex gap-3">
                    {events[activeIndex].speakers.map((speaker, i) => (
                      <motion.div
                        key={speaker.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.35,
                          delay: 0.2 + i * 0.08,
                        }}
                        className="w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-border hover:border-primary transition-colors duration-300"
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

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}





// import { useMemo } from "react";
// import { motion } from "framer-motion";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import { Calendar, MapPin, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "@/components/ui/tooltip";
// import pavacenter from "@/assets/events_location/pava_center.jpg";
// import nashcenter from "@/assets/events_location/nashville_ec.jpg";
// import warnertheatre from "@/assets/events_location/warner_theatre.jpg";
// import fillmore from "@/assets/events_location/fillmoresilverspring.jpg";
// import speaker1 from "@/assets/speakers/speaker-1.jpg"
// import speaker2 from "@/assets/speakers/speaker-2.jpg"
// import speaker3 from "@/assets/speakers/speaker-3.jpg"
// import speaker4 from "@/assets/speakers/speaker-4.jpg"
// import speaker5 from "@/assets/speakers/speaker-5.jpg"

// interface Speaker {
//   id: string;
//   name: string;
//   image: string;
// }

// interface EventData {
//   id: string;
//   label: string;
//   name: string;
//   description: string;
//   date: string;
//   dateSort: number;
//   city: string;
//   venue: string;
//   image: string;
//   speakers: Speaker[];
// }

// // Simulated API data — replace with real fetch
// const apiEvents: EventData[] = [
//   {
//     id: "evt-1",
//     label: "NEXT EVENT",
//     name: "The Obsidian Summit",
//     description:
//       "An invitation-only convergence of 80 operators, investors, and architects of industry — held in a private penthouse suspended above the Manhattan skyline.",
//     date: "September 18, 2026",
//     dateSort: new Date("2026-09-18").getTime(),
//     city: "New York City",
//     venue: "The Apex Room",
//     image: pavacenter,
//     speakers: [
//       { id: "s1", name: "James Crawford", image: speaker1 },
//       { id: "s2", name: "Mei Lin", image: speaker2 },
//       { id: "s3", name: "Hiroshi Tanaka", image: speaker3 },
//       { id: "s4", name: "Amara Obi", image: speaker4 },
//       { id: "s5", name: "Laurent Duval", image: speaker5 },
//     ],
//   },
//   {
//     id: "evt-2",
//     label: "UPCOMING",
//     name: "The Meridian Exchange",
//     description:
//       "A curated evening of un-googleable insight, connecting founders and allocators across emerging verticals in a landmark London venue.",
//     date: "November 7, 2026",
//     dateSort: new Date("2026-11-07").getTime(),
//     city: "London",
//     venue: "The Cartography House",
//     image: nashcenter,
//     speakers: [
//       { id: "s2", name: "Mei Lin", image: speaker2 },
//       { id: "s4", name: "Amara Obi", image: speaker4 },
//       { id: "s5", name: "Laurent Duval", image: speaker5 },
//     ],
//   },
//   {
//     id: "evt-3",
//     label: "UPCOMING",
//     name: "The Pacific Thesis",
//     description:
//       "Where Asia-Pacific's sharpest minds meet transatlantic capital — 60 seats, zero spectators, one evening that redefines trajectories.",
//     date: "January 22, 2027",
//     dateSort: new Date("2027-01-22").getTime(),
//     city: "Singapore",
//     venue: "The Lumen Terrace",
//     image: warnertheatre,
//     speakers: [
//       { id: "s1", name: "James Crawford", image: speaker1 },
//       { id: "s3", name: "Hiroshi Tanaka", image: speaker3 },
//       { id: "s5", name: "Laurent Duval", image: speaker5 },
//     ],
//   },
//   {
//     id: "evt-3",
//     label: "UPCOMING",
//     name: "The Pacific Thesis",
//     description:
//       "Where Asia-Pacific's sharpest minds meet transatlantic capital — 60 seats, zero spectators, one evening that redefines trajectories.",
//     date: "January 22, 2027",
//     dateSort: new Date("2027-01-22").getTime(),
//     city: "Singapore",
//     venue: "The Lumen Terrace",
//     image: warnertheatre,
//     speakers: [
//       { id: "s1", name: "James Crawford", image: speaker1 },
//       { id: "s3", name: "Hiroshi Tanaka", image: speaker3 },
//       { id: "s5", name: "Laurent Duval", image: speaker5 },
//     ],
//   },
// ];

// const MAX_VISIBLE = 3;

// const EventCard = ({
//   event,
//   index,
// }: {
//   event: EventData;
//   index: number;
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, amount: 0.2 }}
//     transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
//     className="group relative overflow-hidden rounded-sm min-h-[420px] md:min-h-[460px] flex flex-col justify-end"
//   >
//     {/* Background image */}
//     <img
//       src={event.image}
//       alt={event.name}
//       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//     />

//     {/* Dark overlay */}
//     <div className="absolute inset-0 bg-background/60 transition-colors duration-500 group-hover:bg-background/70" />
//     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

//     {/* Content */}
//     <div className="relative z-10 p-6 md:p-8 flex flex-col gap-4">
//       {/* Label */}
//       <p className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-primary">
//         {event.label}
//       </p>

//       {/* Title */}
//       <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight">
//         {event.name}
//       </h3>

//       {/* Description */}
//       <p className="body-editorial text-sm leading-relaxed text-muted-foreground line-clamp-2 max-w-lg">
//         {event.description}
//       </p>

//       {/* Meta */}
//       <div className="flex items-center gap-5">
//         <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
//           <Calendar className="h-3.5 w-3.5 text-primary" />
//           {event.date}
//         </span>
//         <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
//           <MapPin className="h-3.5 w-3.5 text-primary" />
//           {event.city} · {event.venue}
//         </span>
//       </div>

//       {/* Speakers */}
//       <div className="pt-2">
//         <p className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-primary mb-3">
//           Speakers
//         </p>
//         <div className="flex -space-x-2">
//           {event.speakers.map((speaker, i) => (
//             <Tooltip key={speaker.id}>
//               <TooltipTrigger asChild>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.7 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.3,
//                     delay: 0.3 + i * 0.07,
//                   }}
//                   className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-background ring-1 ring-border hover:ring-primary hover:z-10 transition-all duration-300 cursor-pointer"
//                 >
//                   <img
//                     src={speaker.image}
//                     alt={speaker.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               </TooltipTrigger>
//               <TooltipContent
//                 side="top"
//                 className="bg-popover text-popover-foreground text-xs"
//               >
//                 {speaker.name}
//               </TooltipContent>
//             </Tooltip>
//           ))}
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// const EventsSection = () => {
//   const { ref, isVisible } = useScrollReveal(0.05);

//   const events = useMemo(() => {
//     return [...apiEvents].sort((a, b) => a.dateSort - b.dateSort).slice(0, MAX_VISIBLE);
//   }, []);

//   const hasMore = apiEvents.length > MAX_VISIBLE;

//   return (
//     <section
//       ref={ref}
//       id="events"
//       className={`section-padding bg-background transition-all duration-700 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {/* Header */}
//       <div className="container-narrow mb-12 md:mb-16">
//         <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
//           Upcoming Events
//         </p>
//         <h2 className="headline-section text-foreground">Where It Happens</h2>
//       </div>

//       {/* Event cards grid */}
//       <div className="container-narrow">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event, i) => (
//             <EventCard key={event.id} event={event} index={i} />
//           ))}
//         </div>

//         {/* View More */}
//         {hasMore && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="mt-12 flex justify-center"
//           >
//             <Button size="lg" className="gap-2">
//               View More Events
//               <ArrowRight className="h-4 w-4" />
//             </Button>
//             {/* <Button variant="heroOutline" size="lg" className="gap-2">
//               View More Events
//               <ArrowRight className="h-4 w-4" />
//             </Button> */}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EventsSection;
