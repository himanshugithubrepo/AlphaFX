export default function PortfolioNavbar() {
  return (
    
      <ul className="box-border lg:flex space-x-6 items-center justify-end w-full px-4 py-2 hidden ">
        <li className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 cursor-pointer">Home</li>
        <li className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 cursor-pointer">Projects</li>
        <li className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 cursor-pointer">Tech Stack</li>
        <li className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 cursor-pointer">About</li>
        <a href="/Himanshu_Sharma_Resume.pdf" download><li className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-500 cursor-pointer">Download Resume</li></a>
      </ul>
      
   
  );
}

