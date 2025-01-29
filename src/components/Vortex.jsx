import React from "react";
import { Vortex } from "./ui/vortex";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FloatingDock } from "./ui/Floating-dock"; 
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandTwitter,IconBrandMedium } from "@tabler/icons-react";

export function VortexDemo() {
  const words = [
    {
      text: "Software Developer",
      className: "text-purple-300"
    },
  ];

  
  const dockItems = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/yourusername",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      title: "Mail",
      icon: <IconMail className="h-full w-full" />,
      href: "mailto:your@email.com",
    },
    {
      title: "Twitter",
      icon: <IconBrandTwitter className="h-full w-full" />,
      href: "twitter.com",
    },
    {
      title: "Medium",
      icon: <IconBrandMedium className="h-full w-full" />,
      href: "medium.com",
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
        
        
      </Vortex>
      <div className="z-10 flex justify-center mt-[100px]">
          <FloatingDock 
            items={dockItems}
            desktopClassName="bottom-4"  
            mobileClassName="bottom-4 right-4" 
          />
        </div>
    </div>
  );
}