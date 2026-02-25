import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import amlogo from "@/assets/AMZN_BIG.png";
import cologo from "@/assets/COST_BIG.png";
import cslogo from "@/assets/CSCO.png";
import orlogo from "@/assets/ORCL_BIG.png";
import tslogo from "@/assets/TSLA_BIG.png";
import wmlogo from "@/assets/WMT_BIG.png";

const categories = [
  "All",
  "AI Apps",
  "AI Infra",
  "Commerce",
  "Fintech",
  "Healthcare",
  "Industrials",
  "Security",
];

const portfolioItems = [
  { name: "Meridian AI", category: "AI Apps", initials: "MA", logoImage: amlogo},
  { name: "Vertex Labs", category: "AI Infra", initials: "VL", logoImage: cologo },
  { name: "Cartesian", category: "Commerce", initials: "Ca", logoImage: cslogo },
  { name: "Aurum Pay", category: "Fintech", initials: "AP", logoImage: orlogo },
  { name: "Helix Health", category: "Healthcare", initials: "HH", logoImage: tslogo },
  { name: "Forge Industrial", category: "Industrials", initials: "FI", logoImage: wmlogo },
  { name: "Sentinel", category: "Security", initials: "Se", logoImage: amlogo},
  { name: "Nova Systems", category: "AI Apps", initials: "NS", logoImage: cologo  },
  { name: "Arcline", category: "AI Infra", initials: "Ar", logoImage: cslogo },
  { name: "Ledger Protocol", category: "Fintech", initials: "LP", logoImage: orlogo },
  { name: "Oasis Bio", category: "Healthcare", initials: "OB", logoImage: tslogo },
  { name: "Bastion", category: "Security", initials: "Ba", logoImage: wmlogo},
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollReveal(0.05);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div
          className={`mb-16 md:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h2 className="headline-section text-foreground">
            Companies That Trust Us
          </h2>
          <div className="divider-line-portfolio mt-6" />
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Left: Category Nav */}
          <nav
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-3 py-2 font-sans text-sm transition-colors duration-300 rounded-sm ${
                      activeCategory === cat
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Card Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {filtered.map((item) => (
              <div
                key={item.name}
                className="group relative aspect-[5/3] flex flex-col items-center justify-center p-8 rounded-sm border border-black/5 bg-card  transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
              >
                <img
                src={item.logoImage}
                alt={item.name}
                className="max-h-16 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
              />
        

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
