import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full bg-[#0b0b0b] text-[#cccccc] py-2 gap-4 px-4">
        {/* Left Column */}
        <div className="flex flex-col justify-center lg:justify-end w-full gap-2">
          <div>
            <div className="text-4xl lg:text-3xl font-bold text-center lg:text-end">
              Alpha<span className="text-green-400">FX</span>
            </div>
            <div className="text-2xl lg:text-xl text-center lg:text-end">Studio</div>
          </div>
          <div className="text-center lg:text-end">Chandigarh, India</div>
          <div className="text-center lg:text-end">rahulkanwar617@gmail.com</div>
        </div>

        {/* Center Column (Social Icons) */}
        <div className="flex justify-center items-center gap-4 w-full">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-slate-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-xl hover:text-slate-300" />
          </a>
          <a href="mailto:rahulkanwar617@gmail.com">
            <SiGmail className="text-xl hover:text-slate-300" />
          </a>
        </div>

        {/* Right Column (Quick Links) */}
        <div className="flex flex-col justify-center lg:justify-start w-full gap-2">
          <div className="text-4xl lg:text-3xl text-center lg:text-start font-bold">Quick Menu</div>
          
          <Link to="/courses">
            <div className="text-2xl lg:text-xl text-center lg:text-start font-light cursor-pointer">
              Courses
            </div>
          </Link>

          <Link to="/contacts">
            <div className="text-2xl lg:text-xl text-center lg:text-start font-light cursor-pointer">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
