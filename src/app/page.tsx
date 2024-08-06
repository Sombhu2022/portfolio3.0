import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import About from "@/components/About";
import BackgroundBeamsDemo from "./ani/page";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-[100vw]">
      {/* <CardSpotlight children={<Navbar/>} className=" w-[90vw] top-3 ml-[auto] mr-[auto]"/> */}
         
      <About />    
      <Contact/>
    </main>
  );
}
