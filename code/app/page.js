import Image from "next/image";
import Homepage from "@/components/HomePage/homepage";
import Profile from "@/components/Profile/profile";
import Projects from "@/components/Projects/projects";

export default function Home() {
  return (
    <div className="">
      <Homepage />
      <Profile />
      <Projects />
    </div>
  );
}
