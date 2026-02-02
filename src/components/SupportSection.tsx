const SupportSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Support Block */}
          <div className="space-y-6">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Support
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              Maintaining the Integrity of the Room
            </h3>
            <p className="body-editorial">
              Every NexEvate experience requires resources—not to profit, but to preserve. 
              Your support ensures that the sanctity of this space remains uncompromised: 
              world-class venues, carefully curated experiences, and the infrastructure 
              that makes real connection possible.
            </p>
            <p className="body-editorial">
              We are not interested in scale for scale's sake. We are interested in depth. 
              Your contribution is an investment in a community that values substance 
              over spectacle.
            </p>
            <a 
              href="#signup" 
              className="inline-block font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors border-b border-primary/30 hover:border-primary/60 pb-1"
            >
              Learn About Supporting →
            </a>
          </div>

          {/* Volunteer Block */}
          <div className="space-y-6">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Volunteer
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              NexEvate Ground Crew
            </h3>
            <p className="body-editorial">
              Behind every seamless experience is a team that cares about the details. 
              Our Ground Crew are not volunteers in the traditional sense—they are 
              future leaders gaining access through contribution.
            </p>
            <p className="body-editorial">
              If you're building something and believe in the power of proximity to 
              exceptional people, this is your entry point. Help us create the 
              environment where transformation happens, and you'll find yourself 
              transformed in the process.
            </p>
            <a 
              href="#signup" 
              className="inline-block font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors border-b border-primary/30 hover:border-primary/60 pb-1"
            >
              Apply for Ground Crew →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
