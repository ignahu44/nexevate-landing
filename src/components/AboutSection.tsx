const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
            About
          </p>
          <h2 className="headline-section text-foreground">
            Beyond the Glass Wall
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <p className="body-large text-foreground/90">
              There's information you can find on the internet. There's insight you can glean 
              from books and podcasts. And then there's the knowledge that exists only in rooms 
              most people will never enter.
            </p>
            <p className="body-editorial">
              NexEvate is not another conference. It's not a networking event dressed in 
              better lighting. It is a sanctuary—a carefully curated inner sanctum where 
              founders, C-suite executives, and investors shed titles and speak with raw candor.
            </p>
          </div>

          <div className="space-y-8">
            <p className="body-editorial">
              We practice what we call <span className="font-serif italic text-foreground">3D Stacking</span>—the 
              simultaneous pursuit of vertical mastery and horizontal expansion. It's not about 
              climbing a single ladder; it's about building an entire scaffolding of influence, 
              insight, and opportunity.
            </p>
            <p className="body-editorial">
              Beyond the glass wall lies a world of un-googleable truths, battle-tested wisdom, 
              and connections forged not through exchange of cards, but through the exchange 
              of vulnerability.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                For Founders, C-Suite & Investors
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
