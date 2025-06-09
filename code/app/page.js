/*"use client";

import { usePathname } from "next/navigation";
import Homepage from "@/components/HomePage/homepage";
import Profile from "@/components/Profile/profile";
import Projects from "@/components/Projects/projects";
import Contact from "@/components/Contact/contact";
import TakeTwo from "@/components/Contact/takeTwo";

export default function Home() {
  const url = usePathname();
  console.log("Current URL:", url);

  const handleView = (url) => {
    if (url === '/') {
      return <Homepage />;
    } else if (url === '/#profile') {
      return <Profile />;
    } else if (url === '/#projects') {
      return <Projects />;
    } else if (url === '/#contact') {
      return <Contact />;
    } else if (url === '/#takeTwo') {
      return <TakeTwo />;
    }
  }
  
  return (  
    <div className="text-black">      
      {handleView()}
    </div>
  );
}*/

"use client"; // This is correctly placed

import { useState, useEffect } from "react"; // Import useState and useEffect
import Homepage from "@/components/HomePage/homepage";
import Profile from "@/components/Profile/profile";
import Projects from "@/components/Projects/projects";
import Contact from "@/components/Contact/contact";
import TakeTwo from "@/components/Contact/takeTwo";

export default function Home() {
  // We'll manage the active section based on the hash
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // This effect runs only on the client side after the component mounts
    
    // Function to update the activeSection state based on the current hash
    const updateActiveSection = () => {
      // window.location.hash returns the hash including '#' (e.g., "#profile")
      setActiveSection(window.location.hash);
    };

    // Set the initial active section when the component first mounts
    updateActiveSection();

    // Add event listener for when the URL hash changes
    window.addEventListener("hashchange", updateActiveSection);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Function to render the correct component based on the activeSection state
  const renderView = () => {
    switch (activeSection) {
      case '#about':
        return <Profile />;
      case '#projects':
        return <Projects />;
      case '#contact':
        return <Contact />;
      case '#takeTwo':
        return <TakeTwo />;
      case '': // This covers the case when there's no hash (e.g., just '/')
      default:
        return <Homepage />;
    }
  };
  
  return (  
    <div className="text-black">      
      {renderView()} {/* Call renderView without arguments, it uses the state */}
    </div>
  );
}