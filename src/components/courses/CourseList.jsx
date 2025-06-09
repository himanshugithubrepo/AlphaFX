import { useState } from "react";
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobecreativecloud,
  SiBlender,
  SiDavinciresolve,
  SiAutodeskmaya,
  SiNuke,
  SiUnrealengine,
} from "react-icons/si";

import silhaute from "../../assets/silhaute.png";
import equalizer from "../../assets/equalizer.webp";
import course1 from "../../assets/course1.webp";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import course4 from "../../assets/course4.webp";
import course5 from "../../assets/course5.jpg";
import course6 from "../../assets/course6.jpeg";

const iconMap = {
  photoshop: SiAdobephotoshop,
  premiere: SiAdobepremierepro,
  aftereffects: SiAdobeaftereffects,
  creativecloud: SiAdobecreativecloud,
  unreal: SiUnrealengine,
  blender: SiBlender,
  davinci: SiDavinciresolve,
  maya: SiAutodeskmaya,
  nuke: SiNuke,
};

export default function CourseList() {
  const courses = [
    {
      title: "AI-Powered Video Editing",
      shortDesc: "Learn the art and craft of video editing from industry professionals...",
      fullDesc:
        "Learn the art and craft of video editing from industry professionals. This course is designed to take you from the fundamentals to advanced storytelling techniques using industry-standard software...",
      duration: "2 months",
      level: "Intermediate",
      image: course1,
      price: "5000",
      originalPrice: "15000",
      free: ["creativecloud"],
      tools: ["photoshop", "premiere"],
    },
    {
      title: "AI-Assisted Video Editing & Motion Graphics",
      shortDesc: "Master the art of storytelling through visuals in this all-in-one course...",
      fullDesc:
        "Master the art of storytelling through visuals in this all-in-one course covering both professional video editing and dynamic motion graphics...",
      duration: "3 months",
      level: "Intermediate",
      image: course3,
      price: "10000",
      originalPrice: "20000",
      free: ["creativecloud"],
      tools: ["photoshop", "aftereffects", "premiere"],
    },
    {
      title: "AI-Driven 3D Modeling & Animation",
      shortDesc: "Dive into the dynamic world of 3D art, modeling, and animation...",
      fullDesc:
        "Dive into the dynamic world of 3D art, modeling, and animation. This course is designed for aspiring 3D artists, animators, and visual storytellers...",
      duration: "3-4 months",
      level: "Beginner to Advanced",
      image: course2,
      price: "25000",
      originalPrice: "50000",
      free: ["creativecloud"],
      tools: ["maya", "blender"],
    },
    {
      title: "AI-Enhanced Professional Color Grading",
      shortDesc: "Grade like a pro using DaVinci Resolve and cinematic LUTs...",
      fullDesc:
        "Grade like a pro using DaVinci Resolve and cinematic LUTs. Includes project-based training.",
      duration: "1 month",
      level: "All Levels",
      image: course4,
      price: "Free",
      originalPrice: "5000",
      free: ["creativecloud"],
      tools: ["davinci"],
    },
    {
      title: "AI-Augmented VFX",
      shortDesc: "Our Visual Effects (VFX) course is designed for aspiring VFX artists...",
      fullDesc:
        "Our Visual Effects (VFX) course is designed for aspiring VFX artists, filmmakers, animators, and digital storytellers who want to master the art of creating stunning, photorealistic effects...",
      duration: "4 months",
      level: "Intermediate",
      image: course5,
      price: "10000",
      originalPrice: "20000",
      free: ["blender", "creativecloud"],
      tools: ["photoshop", "premiere", "aftereffects"],
    },
    {
      title: "AI-Advanced VFX",
      shortDesc: "Advanced VFX refers to the digital creation or enhancement of imagery...",
      fullDesc:
        "Advanced VFX refers to the digital creation, manipulation, or enhancement of imagery that cannot be achieved through traditional filming or live-action alone...",
      duration: "4-6 months",
      level: "Intermediate",
      image: course6,
      price: "25000",
      originalPrice: "50000",
      free: ["unreal", "blender", "creativecloud"],
      tools: [
        "photoshop",
        "premiere",
        "aftereffects",
        "nuke",
        "silhaute",
        "equalizer",
        "unreal",
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const renderToolIcon = (tool, index) => {
    const IconComponent = iconMap[tool];
    if (IconComponent) {
      return <IconComponent key={index} className="text-xl text-green-400" title={tool} />;
    } else if (tool === "silhaute" || tool === "equalizer") {
      const image = tool === "silhaute" ? silhaute : equalizer;
      return (
        <img
          key={index}
          src={image}
          alt={tool}
          title={tool}
          className="w-6 h-6 object-contain"
        />
      );
    }
    return null;
  };

  return (
    <section className="min-h-screen pt-24 bg-slate-950 backdrop-blur-md pb-16 px-4 md:px-20 text-white font-body">
      <h2 className="text-2xl md:text-4xl font-body text-center text-[#cccccc] uppercase mb-12 tracking-wider">
        Our Courses
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div
              key={idx}
              className="relative bg-gray-900 border border-gray-500/30 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Background Image Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${course.image})` }}
              ></div>

              {/* Free Tools Label */}
              {course.free?.length > 0 && (
                <div className="absolute top-2 right-2 bg-white-300 px-3 py-1 text-xs rounded-full z-10 font-semibold text-green-400">
                  <span className=" my-auto">Free {" "}</span>
                  <span className="inline-flex gap-2 ml-1">
                    {course.free.map((tool, i) => renderToolIcon(tool, i))}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="relative p-6 mt-2 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-300 text-sm mb-2">
                  {isExpanded ? course.fullDesc : course.shortDesc}
                </p>

                <button
                  className="text-sm text-blue-400 underline mb-4"
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                >
                  {isExpanded ? "View Less" : "View More"}
                </button>

                <div className="text-sm text-gray-400 mb-2">
                  ⏳ Duration:{" "}
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  📈 Level: <span className="text-white">{course.level}</span>
                </div>

                {/* Tools */}
                <div className="flex gap-3 items-center text-white mb-4 flex-wrap">
                  {course.tools?.map((tool, i) => renderToolIcon(tool, i))}
                </div>

                {/* Price */}
                <div className="text-sm text-gray-400 mb-4">
                  💰 Price:{" "}
                  <span className="text-white">
                    Discounted - ₹{course.price}{" "}
                    <s>Original - ₹{course.originalPrice}</s>
                  </span>
                </div>

                <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfy6Y5nd3kJg3bMmrzBTfkxYuAVC_yoeAPZ8AQHGWrNX0eLIA/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-center w-full px-4 py-2 rounded-full bg-slate-950 hover:bg-slate-800 text-white transition-all duration-200 tracking-wide"
>
  Book For Free Demo Class
</a>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
