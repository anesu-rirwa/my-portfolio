import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import InProgress from '@/components/InProgress';
import Expertise from '@/components/Expertise';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <InProgress />
      <Expertise />
      <Credentials />
      <Contact />
    </>
  );
}
