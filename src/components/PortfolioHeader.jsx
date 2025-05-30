import { useState } from "react";
import PortfolioNavbar from "./PortfolioNavbar";
import SocialAside from "./SocialAside";
import MobileMenuToggle from "./MobileMenuToggle";

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="flex justify-between items-center p-2 shadow-md bg-blue-400 text-white">
      <SocialAside />
      <PortfolioNavbar />
      <MobileMenuToggle />
    </header>
  );
}
