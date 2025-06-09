import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex w-full bg-[#0b0b0b] text-[#cccccc] py-2 ">
        <div className="flex flex-col justify-end w-full ">
          <div>
            <div className="text-4xl lg:text-3xl font-bold text-end">Alpha<span className="text-green-400">FX</span></div>
            <div className="text-2xl lg:text-xl text-end">Studio</div>
          </div>
          <div className="text-end">
            <span>
              <img src="" alt="" />
            </span>
            Chandigarh,India
          </div>
          <div className="text-end">
            <span>
              <img src="" alt="" />
            </span>
            rahulkanwar617@gmail.com
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
         
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2"
          >
            <FaLinkedin className="hover:text-slate-800" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2"
          >
            <FaXTwitter className="hover:text-slate-800" />
          </a>
          <a href="mailto:rahulkanwar617@gmail.com" className="px-2">
            <SiGmail className="hover:text-slate-100" />
          </a>
        </div>
        <div className="flex flex-col justify-start w-full">
          <div className="text-4xl lg:text-3xl font-bold">Quick Menu</div>

          {/* <Link to="/projects">
        <div className="text-2xl lg:text-xl font-light cursor-pointer">Projects</div>
      </Link> */}

      <Link to="/courses">
        <div className="text-2xl lg:text-xl font-light cursor-pointer">Courses</div>
      </Link>

      <Link to="/contacts">
        <div className="text-2xl lg:text-xl font-light cursor-pointer">Contact Us</div>
      </Link>
          
          
        </div>
      </div>
    </>
  );
}
