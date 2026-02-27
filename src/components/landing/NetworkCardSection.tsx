import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import amlogo from "@/assets/AMZN_BIG.png";
import cologo from "@/assets/COST_BIG.png";
import cslogo from "@/assets/CSCO.png";
import orlogo from "@/assets/ORCL_BIG.png";
import tslogo from "@/assets/TSLA_BIG.png";
import wmlogo from "@/assets/WMT_BIG.png";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "Sequoia Capital",
    logo: amlogo,
  },
  {
    name: "Andreessen Horowitz",
    logo: cologo,
  },
  {
    name: "Accel Partners",
    logo: cslogo,
  },
  {
    name: "Benchmark",
    logo: orlogo,
  },
  {
    name: "Index Ventures",
    logo: tslogo,
  },
  {
    name: "Lightspeed",
    logo: wmlogo,
  },
];

const PartnersCardsSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="relative overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div key={index} className="flex-shrink-0">
            <div
              className="group w-48 h-28  flex items-center justify-center bg-muted/20
                        border border-border
                        rounded-xl
                        backdrop-blur
                        transition-all duration-500
                        hover:border-primary"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 object-contain
                          opacity-60 grayscale
                          transition-all duration-500
                          group-hover:opacity-100
                          group-hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </motion.div>

</div>

  );

};

export default PartnersCardsSection;
