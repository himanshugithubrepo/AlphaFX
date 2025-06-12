import { useState } from "react";
import PortfolioNavbar from "./PortfolioNavbar";
import SocialAside from "./SocialAside";
import MobileMenuToggle from "./MobileMenuToggle";

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    
    
    <header
      className="flex justify-between items-center w-full fixed z-[24] px-6 py-3
  backdrop-blur-md bg-black/30 border-b border-white/20 shadow-lg
  text-white font-sans"
    >
      <SocialAside />
      <PortfolioNavbar />
      <MobileMenuToggle />
    </header>
    
  
    
  );
}
