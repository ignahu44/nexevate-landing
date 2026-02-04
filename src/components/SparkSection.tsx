const SparkSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
            The Format
          </p>
          <h2 className="headline-section text-foreground">
            The Spark
          </h2>
          <p className="mt-6 body-large max-w-2xl mx-auto">
            Two hours of high-velocity growth, designed for maximum impact.
          </p>
        </div>

        {/* Two Blocks */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Block 1: 60 Minutes of Raw Truth */}
          <div className="group p-8 md:p-12 bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500">
            <div className="mb-6 flex items-baseline gap-4">
              <span className="font-serif text-5xl md:text-6xl font-light text-primary">60</span>
              <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Minutes
              </span>
            </div>
            
            <h3 className="mb-6 font-serif text-2xl md:text-3xl font-medium text-foreground">
              Raw Truth
            </h3>

            <div className="divider-line mb-6" />
            
            <div className="space-y-4">
              {/* <p className="body-editorial">
                Un-googleable insights from the architects of industry. Our panelists—VCs, 
                founders who've exited, and operators who've scaled—share the failures 
                they don't post about.
              </p> */}
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="body-editorial">Un-Googleable insights from industry architects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="body-editorial">Unfiltered perspectives on emerging opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="body-editorial">Strategic foresight from those shaping the future</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 2: 60 Minutes of 3D Stacking */}
          <div className="group p-8 md:p-12 bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500">
            <div className="mb-6 flex items-baseline gap-4">
              <span className="font-serif text-5xl md:text-6xl font-light text-primary">60</span>
              <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Minutes
              </span>
            </div>
            
            <h3 className="mb-6 font-serif text-2xl md:text-3xl font-medium text-foreground">
              3D Stacking
            </h3>

            <div className="divider-line mb-6" />
            
            <div className="space-y-4">
              {/* <p className="body-editorial">
                Curated cross-industry connection. Every attendee is vetted, every 
                introduction intentional. This is where vertical expertise meets 
                horizontal opportunity.
              </p> */}
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="body-editorial">Panelists, VCs, and industry titans in the room</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="body-editorial">Curated attendees across Tech, Retail, Real Estate & Finance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="body-editorial">Vertical expansion meets horizontal growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;