import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="block lg:hidden p-2 bg-gray-900 text-2xl text-gray-200 rounded z-[50]"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex flex-col lg:hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Scrollable content */}
          <div className="relative mt-[64px] bg-white rounded-t-2xl shadow-xl px-6 pt-6 pb-10 w-full h-full overflow-y-auto z-[1001]">
            <ul className="space-y-6 text-base">
              <li className="block text-gray-700 border-b border-gray-200 pb-2">
                <Link to="/contacts" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="block border border-gray-300 rounded-full px-4 py-3 text-center bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">
                <Link to="/courses" onClick={() => setIsOpen(false)}>
                  Enroll to our Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
