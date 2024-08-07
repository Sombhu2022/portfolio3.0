"use client";
import { BackgroundBeams } from "@/components/ui/background-deams";
import React from "react";
import StickyScrollRevealDemo from "@/components/com/Scroll";


const BackgroundBeamsDemo=()=> {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
     
      <BackgroundBeams />

      <br />
      {/* <StickyScrollRevealDemo/> */}
    </div>
  );
}

export default BackgroundBeamsDemo
