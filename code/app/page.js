import Homepage from "@/components/HomePage/homepage";
import Profile from "@/components/Profile/profile";
import Experience from "@/components/Experience/experience";
import Projects from "@/components/Projects/projects";
import Contact from "@/components/Contact/contact";
import Services from "@/components/Service/service";

export default function Home() {

  return (  
    <div >      
      <Homepage />
      <Profile />
      <Services />
      <Experience />
      <Projects />
      <Contact  /> 
    </div>
  );
}