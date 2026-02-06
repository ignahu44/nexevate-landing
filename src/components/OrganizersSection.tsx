// import organizer2 from "@/assets/organizer-2.jpg";
// import organizer3 from "@/assets/organizer-3.jpg";
// import organizer4 from "@/assets/organizer-4.jpg";
// import organizer5 from "@/assets/organizer-5.jpg";
// import organizer6 from "@/assets/organizer-6.jpg";

// interface OrganizerCardProps {
//   image: string;
//   name: string;
//   role: string;
//   quote: string;
// }

// const OrganizerCard = ({ image, name, role, quote }: OrganizerCardProps) => {
//   return (
//     <div className="group relative aspect-[3/4] w-72 flex-shrink-0 overflow-hidden bg-card">
//       {/* Image */}
//       <img
//         src={image}
//         alt={name}
//         className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//       />

//       {/* Default Bottom Overlay */}
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 transition-opacity duration-500 group-hover:opacity-0">
//         <h4 className="font-serif text-xl font-medium text-foreground">{name}</h4>
//         <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
//           {role}
//         </p>
//       </div>

//       {/* Hover Overlay with Quote */}
//       <div className="absolute inset-0 flex flex-col justify-end bg-background/95 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
//         <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
//           <div className="mb-4 text-4xl font-serif text-primary/60">"</div>
//           <p className="mb-6 font-serif text-lg italic leading-relaxed text-foreground/90">
//             {quote}
//           </p>
//           <div className="border-t border-border pt-4">
//             <h4 className="font-serif text-lg font-medium text-foreground">{name}</h4>
//             <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary">
//               {role}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const organizers = [
//   {
//     image: organizer5,
//     name: "Richard Thornton",
//     role: "Managing Partner",
//     quote: "The best investments I've made came from conversations that couldn't happen anywhere else.",
//   },
//   {
//     image: organizer3,
//     name: "Elena Chen",
//     role: "CEO & Founder",
//     quote: "NexEvate is where the real playbook gets written—the one nobody publishes.",
//   },
//   {
//     image: organizer2,
//     name: "Marcus Webb",
//     role: "Venture Partner",
//     quote: "Every seat in this room represents a decade of earned perspective.",
//   },
//   {
//     image: organizer6,
//     name: "Sarah Nakamura",
//     role: "Chief Strategy Officer",
//     quote: "I've built three companies. The insights here accelerated each one.",
//   },
//   {
//     image: organizer4,
//     name: "David Park",
//     role: "Principal Investor",
//     quote: "This isn't networking. It's the transfer of institutional knowledge.",
//   },
// ];

// const OrganizersSection = () => {
//   return (
//     <section className="section-padding bg-card overflow-hidden">
//       <div className="container-narrow mb-12 md:mb-16">
//         <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-primary">
//           The Architects
//         </p>
//         <h2 className="headline-section text-foreground">
//           Organizers & Panelists
//         </h2>
//       </div>

//       {/* Horizontal Scroll Container */}
//       <div className="relative">
//         <div className="flex gap-10 overflow-x-auto pb-8 px-2 md:px-8 scrollbar-hide snap-x snap-mandatory">
//           <div className="flex-shrink-0 w-[calc((100vw-1280px)/2+2rem)] hidden 2xl:block" />
//           {organizers.map((organizer, index) => (
//             <div key={index} className="snap-start">
//               <OrganizerCard {...organizer} />
//             </div>
//           ))}
//           <div className="flex-shrink-0 w-8" />
//         </div>
//       </div>

//       {/* Scroll Hint */}
      
//       {/* <div className="container-narrow mt-8"> */}
//         {/* <p className="font-sans text-xs text-muted-foreground text-center md:text-left">
//           ← Scroll to explore →
//         </p> */}
//       {/* </div> */}
//     </section>
//   );
// };

// export default OrganizersSection;


import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Organizer {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const organizers: Organizer[] = [
  {
    name: "Alexandra Chen",
    role: "Managing Partner, Apex Ventures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    quote: "The greatest deals I've closed started with a handshake in rooms like this.",
  },
  {
    name: "Marcus Webb",
    role: "CEO, Meridian Holdings",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    quote: "Information asymmetry is the ultimate competitive advantage.",
  },
  {
    name: "Sophia Laurent",
    role: "Investor & Board Advisor",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    quote: "Networks aren't built at conferences. They're forged in sanctuaries.",
  },
  {
    name: "David Okonkwo",
    role: "Founder, Strategos Capital",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    quote: "The right conversation at the right time changes everything.",
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

      {/* Default Bottom Overlay (Name & Role) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-card">
        <p className="font-display text-lg text-cream">{organizer.name}</p>
        <p className="text-xs tracking-wide uppercase text-gold mt-1">{organizer.role}</p>
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
    <section className="relative py-32 md:py-40 bg-charcoal">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="section-container">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-16">
          <p className={`text-xs tracking-ultra uppercase text-gold mb-6 reveal ${isVisible ? 'visible' : ''}`}>
            The Architects
          </p>
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cream reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            Organizers & Panelists
          </h2>
          <p className={`font-body text-cream-muted mt-4 max-w-2xl mx-auto reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
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
