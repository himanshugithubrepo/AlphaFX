import MobileMenuToggle from "./MobileMenuToggle";
import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";

export default function IntroBox(){
    return(
       <main className="flex w-full flex-col md:flex-row lg:flex-nowrap md:flex-wrap sm:flex-wrap bg-white-50 text-grey-100">
       <Profile/>
       <ProfileDescription/>
    
       </main>
    )
}