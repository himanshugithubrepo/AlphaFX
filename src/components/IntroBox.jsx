import MobileMenuToggle from "./MobileMenuToggle";
import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";

export default function IntroBox(){
    return(
       <main className="relative w-screen h-screen bg-white-50 text-grey-100 pt-20">
       <Profile/>
       <ProfileDescription/>
    
       </main>
    )
}