import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  { name: "Meridian AI", category: "AI Apps", initials: "MA" },
  { name: "Vertex Labs", category: "AI Infra", initials: "VL" },
  { name: "Cartesian", category: "Commerce", initials: "Ca" },
  { name: "Aurum Pay", category: "Fintech", initials: "AP" },
  { name: "Helix Health", category: "Healthcare", initials: "HH" },
  { name: "Forge Industrial", category: "Industrials", initials: "FI" },
  { name: "Sentinel", category: "Security", initials: "Se" },
  { name: "Nova Systems", category: "AI Apps", initials: "NS" },
  { name: "Arcline", category: "AI Infra", initials: "Ar" },
  { name: "Ledger Protocol", category: "Fintech", initials: "LP" },
  { name: "Oasis Bio", category: "Healthcare", initials: "OB" },
  { name: "Bastion", category: "Security", initials: "Ba" },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollReveal(0.05);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section ref={ref} className="section-padding bg-background">
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
            Companies We Champion
          </h2>
          <div className="divider-line mt-6" />
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
                className="group relative aspect-square flex flex-col items-center justify-center rounded-sm border border-border/40 bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]"
              >
                <span className="font-serif text-3xl font-semibold text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                  {item.initials}
                </span>
                <span className="mt-3 font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
