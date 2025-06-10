import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="block lg:hidden p-2 bg-gray-900 text-2xl text-gray-200 rounded"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Mobile Modal Content - No Header */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Clickable background to close modal */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Navigation Items Container */}
          <div className="absolute top-[64px] w-full bg-white rounded-t-2xl shadow-xl overflow-y-auto px-6 pt-4 pb-10 h-[calc(100%-64px)] transition-all duration-300">
            <ul className="space-y-4 text-base">
  <li className="border-b-2 border-transparent cursor-pointer text-gray-700 hover:border-gray-700 transition">
    <Link to="/contacts" onClick={() => setIsOpen(false)}>Contact</Link>
  </li>
  <li className="border border-gray-500/30 rounded-full px-4 py-2 
    backdrop-blur-md bg-gray-800/90 text-gray-900 
    hover:bg-gray-700/40 hover:border-gray-400 transition duration-300 
    shadow-lg hover:shadow-xl cursor-pointer font-medium tracking-wide text-center">
    <Link to="/courses" onClick={() => setIsOpen(false)}>Enroll to our Courses</Link>
  </li>
</ul>

          </div>
        </div>
      )}
    </>
  );
}
