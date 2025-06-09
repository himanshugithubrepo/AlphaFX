import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import spectacular from "../../assets/spectacular.png";
import videdit1 from "../../assets/videdit1.jpg";
import videdit2 from "../../assets/videdit2.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";
import d4 from "../../assets/d4.jpg";
import ThreeD1 from "../../assets/ThreeD1.jpg";
import ThreeD2 from "../../assets/ThreeD2.jpg";
import ThreeD3 from "../../assets/ThreeD3.jpg";
import ThreeD4 from "../../assets/ThreeD4.jpg";

const images = [spectacular, d2, d3, d4, videdit1, videdit2,ThreeD1,ThreeD2,ThreeD3,ThreeD4];

export default function HorizontalScroller() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 px-6 mt-24 bg-gray-950 text-white relative">
      <h2 className="text-xl font-semibold mb-8">Our Works</h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-md"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-md"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-none scroll-smooth"
      >
        <div className="flex space-x-6 w-max">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className="h-60 w-96 rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
