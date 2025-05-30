import { FaBars } from "react-icons/fa"; // Hamburger icon

export default function MobileMenuToggle() {
  return (
    <button
      className="block lg:hidden bg-blue-400 text-2xl text-gray-700"
      
      aria-label="Toggle menu"
    >
      <FaBars />
    </button>
  );
}
