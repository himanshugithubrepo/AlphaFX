
import AboutUs from "../components/aboutus/AboutUs";
import TeamSection from "../components/common/TeamSection";
import Footer from "../components/Footer";
import HorizontalScroller from "../components/homepage/HorizontalImageScroller";
import IntroBox from "../components/IntroBox";

import PortfolioHeader from "../components/PortfolioHeader";
import SectionHead from "../components/SectionHead";


export default function HomePage(){
    return(
    <>
      <PortfolioHeader />
      <IntroBox />
      <HorizontalScroller/>
      <AboutUs/>
      
      
      <TeamSection/>
      <Footer/>
    
    </>
    
      
    )
}