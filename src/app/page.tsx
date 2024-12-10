
import About from "@/components/About";

import Contact from "@/components/Contact";

import HomeComponent from "@/components/HomeComponent";


export default function Home() {
  return (
    <main className="h-[90vh] w-[88vw] mt-5">
      <HomeComponent/>
      <About />    
      <Contact/>
    </main>
  );
}
