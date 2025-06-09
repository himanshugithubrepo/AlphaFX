import { Link } from "react-router-dom";

export default function PortfolioNavbar() {
  return (
    <ul className="box-border lg:flex space-x-6 items-center justify-end w-full px-4 py-2 hidden font-ui ">
      
        {/* <li className="border-b-2 border-transparent cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li> */}
      
      
        <li className="border-b-2 border-transparent cursor-pointer">
          <Link to="/contacts">Contact</Link>
        </li>
      
      
        <li className="border border-gray-500/30 rounded-full px-4 py-2 
    backdrop-blur-md bg-gray-800/40 text-white 
    hover:bg-gray-700/40 hover:border-gray-400 transition duration-300 
    shadow-lg hover:shadow-xl cursor-pointer font-medium tracking-wide">
          <Link to="/courses">Enroll to our Courses</Link>
        </li>
      
    </ul>
  );
}
