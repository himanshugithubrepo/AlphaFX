import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenuToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger / Close Button */}
      <button
        className="block lg:hidden p-2 bg-gray-900 text-2xl text-gray-200 rounded z-[50]"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* AnimatePresence handles exit animations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col lg:hidden z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative ml-[20px] mt-[75px] rounded-t-2xl shadow-xl pb-10 w-[90vw] h-full overflow-y-visible z-[1000]"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()} // prevent overlay from closing
            >
              <ul className="text-base h-36 px-6 py-6 rounded  bg-white">
                <li className="block text-gray-700 border-b border-gray-200 h-[50%] ">
                  <Link to="/contacts" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </li>
                <Link to="/courses" onClick={() => setIsOpen(false)}>
                  <li className="border border-gray-300 rounded-full px-4 py-3 text-center bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">
                    Enroll to our Courses
                  </li>
                </Link>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
