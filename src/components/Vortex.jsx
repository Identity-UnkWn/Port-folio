import React from "react";
import { Vortex } from "./ui/vortex";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import FooterMain from "./FooterMain";

export function VortexDemo() {
  const words = [
    {
      text: "Software Developer",
      className: "text-purple-300"
    },
  ];

  return (
    <div className="w-[98.9%] rounded-md pt-65.5">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="bg-clip-text tracking-[5px] text-transparent bg-gradient-to-r from-white to-purple-500 text-2xl md:text-6xl font-bold text-center pb-[30px]">
          Hi, I&apos;m Sanjay KJ
        </h2>
        
        <div className="max-w-xl text-purple-300">
          <TypewriterEffectSmooth 
            words={words}
            className="text-[25px] text-purple-300"
          />
        </div>
        
        <div className="z-10 ">
          <FooterMain />
        </div>
      </Vortex>
    </div>
  );
}