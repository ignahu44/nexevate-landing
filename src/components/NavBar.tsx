import { useEffect, useState } from "react";
import nexevatelogo from "@/assets/logo/nexevate_logo_primary.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "#about", label: "About" },
    { href: "#rule", label: "Protocol" },
    { href: "#format", label: "Format" },
    { href: "#organizers", label: "Organizers" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#events", label: "Events" },
    { href: "#support", label: "Support" },
    { href: "#signup", label: "Signup" },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      border-b border-white/25
      ${visible ? "translate-y-0" : "-translate-y-full"}
      bg-[#1D2B45]/85
    ${scrolled ? "md:bg-[#1D2B45]/85" : "lg:bg-transparent"}
    `}
    >
      <div className="px-6 lg:px-32 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero">
          <img
            src={nexevatelogo}
            alt="nexevate logo"
            className="max-h-10 object-contain opacity-80"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 text-white">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#EDCB7A] hover:opacity-85 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full
          bg-[#1D2B45]/85
          border-b border-white/25
          transition-all duration-300 overflow-hidden
          ${mobileOpen ? "max-h-screen py-6" : "max-h-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 text-white">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#EDCB7A] transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}