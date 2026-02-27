import { useRef } from "react";

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

  return (
    <div className="py-18 overflow-hidden" ref={ref}>
      <h2 className="headline-md text-foreground text-center mb-4"> Trusted by industry leaders </h2>

      {/* Infinite Slider */}
      <div className="pause-on-hover">
        <div className="slider-track flex gap-10 w-max">
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="group w-40 h-24 bg-card border border-border rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <img src={partner.logoImage} alt={partner.name}
                      className=" 
                        max-h-12 object-contain px-2 transition-all duration-300  sepia hue-rotate-[10deg] saturate-[4] brightness-110
                        group-hover:sepia-0 group-hover:hue-rotate-0 group-hover:saturate-100 group-hover:brightness-100
                      "
                    />

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};



export default PartnersCardsSection;
