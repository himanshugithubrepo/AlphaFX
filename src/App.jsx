import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Enroll from "./pages/Enroll";
import CustomCursor from "./components/common/CustomCursor";


function App() {
  return (
    <>
      
<div className="relative">
      <CustomCursor/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projects" element={<Project />} /> */}
        <Route path="/courses" element={<Course />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </div>
      
    </>
  );
}

export default App;
