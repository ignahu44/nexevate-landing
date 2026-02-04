import organizer2 from "@/assets/organizer-2.jpg";
import organizer3 from "@/assets/organizer-3.jpg";
import organizer4 from "@/assets/organizer-4.jpg";
import organizer5 from "@/assets/organizer-5.jpg";
import organizer6 from "@/assets/organizer-6.jpg";

interface OrganizerCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
}

const OrganizerCard = ({ image, name, role, quote }: OrganizerCardProps) => {
  return (
    <div className="group relative aspect-[3/4] w-72 flex-shrink-0 overflow-hidden bg-card">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Default Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 transition-opacity duration-500 group-hover:opacity-0">
        <h4 className="font-serif text-xl font-medium text-foreground">{name}</h4>
        <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
          {role}
        </p>
      </div>

      {/* Hover Overlay with Quote */}
      <div className="absolute inset-0 flex flex-col justify-end bg-background/95 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
          <div className="mb-4 text-4xl font-serif text-primary/60">"</div>
          <p className="mb-6 font-serif text-lg italic leading-relaxed text-foreground/90">
            {quote}
          </p>
          <div className="border-t border-border pt-4">
            <h4 className="font-serif text-lg font-medium text-foreground">{name}</h4>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const organizers = [
  {
    image: organizer5,
    name: "Richard Thornton",
    role: "Managing Partner",
    quote: "The best investments I've made came from conversations that couldn't happen anywhere else.",
  },
  {
    image: organizer3,
    name: "Elena Chen",
    role: "CEO & Founder",
    quote: "NexEvate is where the real playbook gets written—the one nobody publishes.",
  },
  {
    image: organizer2,
    name: "Marcus Webb",
    role: "Venture Partner",
    quote: "Every seat in this room represents a decade of earned perspective.",
  },
  {
    image: organizer6,
    name: "Sarah Nakamura",
    role: "Chief Strategy Officer",
    quote: "I've built three companies. The insights here accelerated each one.",
  },
  {
    image: organizer4,
    name: "David Park",
    role: "Principal Investor",
    quote: "This isn't networking. It's the transfer of institutional knowledge.",
  },
];

const OrganizersSection = () => {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-narrow mb-12 md:mb-16">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
          The Architects
        </p>
        <h2 className="headline-section text-foreground">
          Organizers & Panelists
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-10 overflow-x-auto pb-8 px-2 md:px-8 scrollbar-hide snap-x snap-mandatory">
          <div className="flex-shrink-0 w-[calc((100vw-1280px)/2+2rem)] hidden 2xl:block" />
          {organizers.map((organizer, index) => (
            <div key={index} className="snap-start">
              <OrganizerCard {...organizer} />
            </div>
          ))}
          <div className="flex-shrink-0 w-8" />
        </div>
      </div>

      {/* Scroll Hint */}
      
      {/* <div className="container-narrow mt-8"> */}
        {/* <p className="font-sans text-xs text-muted-foreground text-center md:text-left">
          ← Scroll to explore →
        </p> */}
      {/* </div> */}
    </section>
  );
};

export default OrganizersSection;
