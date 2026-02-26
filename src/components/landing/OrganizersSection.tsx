import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SiLinkedin } from "react-icons/si";


interface Organizer {
  name: string;
  role: string;
  image: string;
  quote: string;
  linkedinUrl: string;
}

const organizers: Organizer[] = [
  {
    name: "Alexandra Chen",
    role: "Managing Partner, Apex Ventures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    quote: "The greatest deals I've closed started with a handshake in rooms like this.",
    linkedinUrl: "https://www.linkedin.com/in/marielof?trk=org-employees"
  },
  {
    name: "Marcus Webb",
    role: "CEO, Meridian Holdings",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    quote: "Information asymmetry is the ultimate competitive advantage.",
    linkedinUrl: "https://www.linkedin.com/in/marielof?trk=org-employees"
  },
  {
    name: "Sophia Laurent",
    role: "Investor & Board Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    quote: "Networks aren't built at conferences. They're forged in sanctuaries.",
    linkedinUrl: "https://www.linkedin.com/in/marielof?trk=org-employees"
  },
  {
    name: "David Okonkwo",
    role: "Founder, Strategos Capital",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    quote: "The right conversation at the right time changes everything.",
    linkedinUrl: "https://www.linkedin.com/in/marielof?trk=org-employees"
  },
];

const OrganizerCard = ({ organizer }: { organizer: Organizer }) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={organizer.image}
          alt={organizer.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>

      {/* LinkedIn Icon */}
      <a
        href={organizer.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`LinkedIn de ${organizer.name}`}
        className="absolute bottom-4 right-4 z-20
                   bg-charcoal/80 backdrop-blur
                   p-2 rounded-full
                   text-[#CA9440] hover:text-cream
                   transition-all duration-300
                   hover:scale-105"
      >
        <SiLinkedin size={16} />
      </a>

      {/* Default Bottom Overlay (Name & Role) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-card">
        <p className="font-display text-lg text-cream">{organizer.name}</p>
        <p className="text-xs tracking-wide uppercase text-[#CA9440] mt-1">{organizer.role}</p>
      </div>

      {/* Hover Overlay with Quote */}
      <div className="card-overlay flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-8 h-px bg-gold mx-auto mb-6" />
          <p className="font-display text-lg md:text-xl text-cream italic leading-relaxed">
            "{organizer.quote}"
          </p>
          <div className="w-8 h-px bg-gold mx-auto mt-6" />
          <p className="text-xs tracking-ultra uppercase text-gold mt-6">{organizer.name}</p>
        </div>
      </div>
    </div>
  );
};

const OrganizersSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="organizers" className="relative py-32 md:py-40 bg-charcoal">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="section-container">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <p className={`text-xs tracking-ultra uppercase text-cream mb-6 reveal ${isVisible ? 'visible' : ''}`}>
            The Architects
          </p>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium text-gradient-gold reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            Organizers & Panelists
          </h2>
          <p className={`font-body text-cream mt-4 max-w-2xl mx-auto reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            Industry leaders who have shaped markets and created the pathways others follow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          {organizers.map((organizer, index) => (
            <OrganizerCard key={index} organizer={organizer} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default OrganizersSection;
