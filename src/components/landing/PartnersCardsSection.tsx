import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import amlogo from "@/assets/png/AMZN_BIG.png";
// import cologo from "@/assets/png/COST_BIG.png";
// import cslogo from "@/assets/png/CSCO.png";
// import orlogo from "@/assets/png/ORCL_BIG.png";
// import tslogo from "@/assets/png/TSLA_BIG.png";
// import wmlogo from "@/assets/png/WMT_BIG.png";

// const partners = [
//   { name: "Meridian AI", logoImage: amlogo},
//   { name: "Vertex Labs",logoImage: cologo },
//   { name: "Cartesian", logoImage: cslogo },
//   { name: "Aurum Pay", logoImage: orlogo },
//   { name: "Helix Health", logoImage: tslogo },
//   { name: "Forge Industrial", logoImage: wmlogo },
//   { name: "Sentinel", logoImage: amlogo},
//   { name: "Nova Systems", logoImage: cologo  },
//   { name: "Arcline",  logoImage: cslogo },
//   { name: "Ledger Protocol",  logoImage: orlogo },
//   { name: "Oasis Bio",  logoImage: tslogo },
//   { name: "Bastion", logoImage: wmlogo},
// ];

import amazonlogo from "@/assets/svg/amazonlogo.svg"
import behancelogo from "@/assets/svg/behancelogo.svg"
import discordlogo from "@/assets/svg/discordlogo.svg"
import metalogo from "@/assets/svg/metalogo.svg"
import oraclelogo from "@/assets/svg/oraclelogo.svg"


const partners = [
  { name: "Meridian AI", logoImage: amazonlogo},
  { name: "Vertex Labs",logoImage: behancelogo },
  { name: "Cartesian", logoImage: discordlogo },
  { name: "Aurum Pay", logoImage: metalogo },
  { name: "Helix Health", logoImage: oraclelogo },
  { name: "Forge Industrial", logoImage: amazonlogo },
  { name: "Sentinel", logoImage: behancelogo},
  { name: "Nova Systems", logoImage: discordlogo  },
  { name: "Arcline",  logoImage: metalogo },
  { name: "Ledger Protocol",  logoImage: oraclelogo },
  { name: "Oasis Bio",  logoImage: amazonlogo },
  { name: "Bastion", logoImage: behancelogo},
];



const PartnersCardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="network" className="py-18 bg-background overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-8"
      >
        <p className="text-[#CA9440] text-sm font-medium tracking-widest uppercase mb-4">
          Our Network
        </p>
        <h2 className="headline-md text-foreground">
          Trusted by industry leaders
        </h2>
      </motion.div>

      {/* Infinite Slider */}
      <div className="pause-on-hover">
        <div className="slider-track flex gap-10 w-max">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
            >
              <div className="group w-40 h-24 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* <img src={partner.logoImage} alt={partner.name} className="max-h-12 object-contain grayscale brightness-75 opacity-70 transition-all hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 
                  group-hover:opacity-100 duration-300 px-2"/> */}
                  <img
                      src={partner.logoImage}
                      alt={partner.name}
                      className=" 
                        max-h-12 object-contain px-2 transition-all duration-300  sepia hue-rotate-[10deg] saturate-[8] brightness-110
                        group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100
                      "
                    />

              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Bottom Border */}
      {/* <div className="mt-16 mx-8 md:mx-16 border-b border-border" /> */}
    </section>
  );
};



export default PartnersCardsSection;

