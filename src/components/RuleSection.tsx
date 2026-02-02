const RuleSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <p className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
            The Rule
          </p>

          {/* Main Headline */}
          <h2 className="headline-section mb-12 text-foreground">
            No Business Cards
          </h2>

          {/* Manifesto Content */}
          <div className="space-y-8">
            <p className="body-large text-foreground/90">
              Business cards are prohibited at NexEvate events.
            </p>

            <div className="py-8 border-y border-border/50">
              <p className="font-serif text-2xl md:text-3xl font-medium leading-relaxed text-foreground italic">
                "We believe in the weight of human presence over the noise of digital exchange."
              </p>
            </div>

            <p className="body-editorial max-w-2xl mx-auto">
              If a conversation doesn't earn a follow-up through its substance alone, 
              it was never a NexEvate connection. We don't facilitate transactions—we 
              cultivate relationships that matter.
            </p>

            <p className="body-editorial max-w-2xl mx-auto">
              When you leave this room, you will carry with you not a stack of rectangles, 
              but the memory of dialogues that shifted your perspective. That is the currency 
              of NexEvate.
            </p>
          </div>

          {/* Visual Divider */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-primary/40" />
            <div className="h-2 w-2 rotate-45 border border-primary/60" />
            <div className="h-px w-16 bg-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RuleSection;
