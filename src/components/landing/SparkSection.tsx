import { useScrollReveal } from '@/hooks/useScrollReveal';

const SparkSection = () => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="format" className="relative py-32 md:py-40 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-20">
          <p className={`text-xs tracking-ultra uppercase text-cream mb-6 reveal ${isVisible ? 'visible' : ''}`}>
            The Format
          </p>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium text-gradient-gold reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            The Spark
          </h2>
          <p className={`font-display text-xl md:text-2xl text-cream-muted mt-4 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            Three Hours of High-Velocity Growth
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">

          {/* First Block - 60 Minutes of Raw Truth */}
          <div className={`relative p-8 lg:p-12 bg-card border border-border reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            {/* Number badge */}
            <div className="absolute -top-6 left-8 flex items-end gap-1">
              <span className="font-display text-7xl md:text-8xl font-medium text-gold/20">60</span>
              <p className="text-xs tracking-ultra uppercase text-gradient-gold">MIN</p>
            </div>
            
            <div className="pt-8">
              <h3 className="font-display text-2xl md:text-3xl text-cream mb-6"> Raw Truth </h3>
              
              <div className="divider-line mb-6" />
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1 h-1 mt-2 bg-gold flex-shrink-0" />
                  <p className="text-cream-muted">Un-Googleable insights from industry architects</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1 h-1 mt-2 bg-gold flex-shrink-0" />
                  <p className="text-cream-muted">Unfiltered perspectives on emerging opportunities</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1 h-1 mt-2 bg-gold flex-shrink-0" />
                  <p className="text-cream-muted">Strategic foresight from those shaping the future</p>
                </li>
              </ul>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/30" />
          </div>


          {/* Second Block - 60 Minutes of 3D Stacking */}
          <div className={`relative p-8 lg:p-12 bg-card border border-border reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>

            {/* Number badge */}
            <div className="absolute -top-6 left-8 flex items-end gap-2">
              <span className="font-display text-7xl md:text-8xl font-medium text-gold/20">120</span>
              <p className="text-xs tracking-ultra uppercase text-gradient-gold">min</p>
            </div>
            
            <div className="pt-8">
              <h3 className="font-display text-2xl md:text-3xl text-gradient-golds mb-6">
                3D Stacking
              </h3>
              
              <div className="divider-line mb-6" />
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 mt-2 bg-gold flex-shrink-0" />
                  <p className="text-cream-muted">Panelists, VCs, and industry titans in the room</p>
                </li>

                {/* <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="body-editorial">Un-Googleable insights from industry architects</span>
                </li> */}

                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 mt-2 bg-gold flex-shrink-0" />
                  <p className="text-cream-muted">Curated attendees across Tech, Retail, Real Estate & Finance</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1 h-1 mt-2 bg-gold flex-shrink-0" />
                  <p className="text-cream-muted">Vertical expansion meets horizontal growth</p>
                </li>
              </ul>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/30" />
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className={`mt-16 text-center reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <p className="font-display text-lg md:text-xl text-cream-muted italic">
            "Three hours that compound into decades of advantage."
          </p>
        </div>
      </div>
    </section>
  );
};

export default SparkSection;
