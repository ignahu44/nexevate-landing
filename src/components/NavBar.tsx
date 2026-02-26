import { useEffect, useState } from "react";
import nexevatelogo from "@/assets/nexevate_logo_primary.png";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detectar si se hizo scroll
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detectar dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Bajando
        setVisible(false);
      } else {
        // Subiendo
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        py-4
        border-b border-white/25
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled ? "bg-[#1D2B45] shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="px-32 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero">
          <img src={nexevatelogo} alt="nexevate logo" className="max-h-10 object-contain opacity-60"/>
        </a>

        {/* Links */}
        <div className="flex gap-6 text-white">
          <a href="#about" className="hover:opacity-80"> About </a>
          <a href="#rule" className="hover:opacity-80"> Rule </a>
          <a href="#format" className="hover:opacity-80"> Format </a>
          <a href="#organizers" className="hover:opacity-80"> Organizers </a>
          <a href="#portfolio" className="hover:opacity-80"> Portfolio </a>
          <a href="#events" className="hover:opacity-80"> Events </a>
          <a href="#support" className="hover:opacity-80"> Support </a>
          <a href="#signup" className="hover:opacity-80"> Signup </a>
        </div>
      </div>
    </nav>
  );
}