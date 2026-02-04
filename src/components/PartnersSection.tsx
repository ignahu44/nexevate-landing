import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Sequoia Capital",
  "Andreessen Horowitz",
  "Accel Partners",
  "Benchmark",
  "Index Ventures",
  "Lightspeed",
  "General Catalyst",
  "Founders Fund",
  "Greylock",
  "NEA",
  "Bessemer",
  "Tiger Global",
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="network" className="py-24 bg-background overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-8"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
          Our Network
        </p>
        <h2 className="headline-md text-foreground">
          Trusted by industry leaders
        </h2>
      </motion.div>

      {/* Infinite Slider */}
      <div className="pause-on-hover">
        <div className="slider-track flex gap-16 w-max">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center px-8 py-4"
            >
              <span className="font-display text-xl md:text-2xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center px-8 py-4"
            >
              <span className="font-display text-xl md:text-2xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-16 mx-8 md:mx-16 border-b border-border" />
    </section>
  );
};

export default PartnersSection;



// const partners = [
//   { name: "Apex Ventures", initials: "AV" },
//   { name: "Horizon Capital", initials: "HC" },
//   { name: "Sterling Partners", initials: "SP" },
//   { name: "Nova Fund", initials: "NF" },
//   { name: "Meridian Group", initials: "MG" },
//   { name: "Catalyst Labs", initials: "CL" },
// ];

// const PartnersSection = () => {
//   return (
//     <section className="section-padding bg-background">
//       <div className="container-narrow">
//         {/* Section Header */}
//         <div className="mb-16 md:mb-20 text-center">
//           <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
//             Partners & Sponsors
//           </p>
//           <h2 className="headline-section text-foreground mb-6">
//             The Ecosystem
//           </h2>
//           <p className="body-editorial max-w-2xl mx-auto">
//             Our partners share our vision: that meaningful growth happens through 
//             intentional connection. Together, we're building long-term journeys, 
//             not transactional moments.
//           </p>
//         </div>

//         {/* Logo Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
//           {partners.map((partner, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center p-6 border border-border/30 bg-card/50 hover:border-primary/30 transition-colors duration-300"
//             >
//               {/* Placeholder logo using initials */}
//               <div className="mb-4 h-16 w-16 flex items-center justify-center border border-muted-foreground/20 rounded-sm">
//                 <span className="font-serif text-xl font-medium text-muted-foreground">
//                   {partner.initials}
//                 </span>
//               </div>
//               <p className="font-sans text-xs font-medium text-muted-foreground text-center">
//                 {partner.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnersSection;

