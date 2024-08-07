import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import About from "@/components/About";
import BackgroundBeamsDemo from "./ani/page";
import Navbar from "@/components/Navbar";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Contact from "@/components/Contact";
import { BackgroundBeams } from "@/components/ui/background-deams";
import HomeComponent from "@/components/HomeComponent";


export default function Home() {
  return (
    <main className="h-[90vh] w-[88vw] mt-5">

      {/* <CardSpotlight children={<Navbar/>} className=" w-[90vw] top-3 ml-[auto] mr-[auto]"/> */}
      <HomeComponent/>
      <About />    
      <Contact/>
    </main>
  );
}
