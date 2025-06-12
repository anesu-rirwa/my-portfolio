import Homepage from "@/components/HomePage/homepage";
import Profile from "@/components/Profile/profile";
import Experience from "@/components/Experience/experience";
import Projects from "@/components/Projects/projects";
import Contact from "@/components/Contact/contact";
import Services from "@/components/Service/service";
import Divider from "@/components/Divider/divider";

export default function Home() {

  return (  
    <div className="bg-[#0f0f0f] text-gray-200">      
      <Homepage />
      <Divider />
      
      <Profile />
      <Divider />
      
      <Services />
      <Divider />

      <Experience />
      <Divider />

      <Projects />
      <Divider />

      <Contact  /> 
      <Divider />
    </div>
  );
}