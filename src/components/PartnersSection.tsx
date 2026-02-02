const partners = [
  { name: "Apex Ventures", initials: "AV" },
  { name: "Horizon Capital", initials: "HC" },
  { name: "Sterling Partners", initials: "SP" },
  { name: "Nova Fund", initials: "NF" },
  { name: "Meridian Group", initials: "MG" },
  { name: "Catalyst Labs", initials: "CL" },
];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Partners & Sponsors
          </p>
          <h2 className="headline-section text-foreground mb-6">
            The Ecosystem
          </h2>
          <p className="body-editorial max-w-2xl mx-auto">
            Our partners share our vision: that meaningful growth happens through 
            intentional connection. Together, we're building long-term journeys, 
            not transactional moments.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border border-border/30 bg-card/50 hover:border-primary/30 transition-colors duration-300"
            >
              {/* Placeholder logo using initials */}
              <div className="mb-4 h-16 w-16 flex items-center justify-center border border-muted-foreground/20 rounded-sm">
                <span className="font-serif text-xl font-medium text-muted-foreground">
                  {partner.initials}
                </span>
              </div>
              <p className="font-sans text-xs font-medium text-muted-foreground text-center">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
