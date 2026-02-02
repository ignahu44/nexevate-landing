import { Button } from "@/components/ui/button";

const SignUpSection = () => {
  return (
    <section id="signup" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary/20 rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary/20 rotate-12" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Label */}
          <p className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Selection
          </p>

          {/* Main Headline */}
          <h2 className="headline-section mb-8 text-foreground">
            It's Not Networking.
            <br />
            <span className="text-gradient-gold">It's the Room Where It Happens.</span>
          </h2>

          {/* Key Points */}
          <div className="mb-12 flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-light text-primary">50–100</p>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mt-2">
                Seats Per Event
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-light text-primary">100%</p>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mt-2">
                Vetted Attendees
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl md:text-5xl font-light text-primary">2</p>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground mt-2">
                Hours of Impact
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="body-large mb-12 text-foreground/80">
            We don't sell tickets. We extend invitations to those ready to step beyond 
            the glass wall. If you believe you belong in this room, we'd like to know you.
          </p>

          {/* CTA */}
          <Button variant="gold" size="xl" className="mb-8">
            Sign Up — Be the First to Know When the Next Door Opens
          </Button>

          {/* Footer Note */}
          <p className="font-sans text-xs text-muted-foreground">
            All applications are reviewed. Admission is by invitation only.
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default SignUpSection;
