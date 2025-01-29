import { faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { HoverEffect } from "./ui/Card-hover-effect";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";


export const SkillsMain = () => {
  const skills = [
    {
      title: "Git",
      description: "Version control system for tracking code changes and collaboration.",
      link: "#",
      icon:faGitAlt
      
    },
    {
      title: "React",
      description: "JavaScript library for building interactive user interfaces.",
      link: "#",
      icon: faReact
    },
    {
      title: "C/C++",
      description: "Low-level programming languages for system development and performance-critical applications.",
      link: "#",
      icon: faC
    },
    {
      title: "JavaScript",
      description: "Versatile scripting language for web development and server-side programming.",
      link: "#",
      icon: faJs
    },
    {
      title: "Python",
      description: "High-level programming language for web development, data analysis, and AI.",
      link: "#",
      icon: faPython
    },
    {
      title: "Node.js",
      description: "JavaScript runtime for building scalable server-side applications.",
      link: "#",
      icon: faNodeJs
    },
    {
      title: "SQL",
      description: "Standard language for managing and querying relational databases.",
      link: "#",
      icon: faDatabase
    },
    {
      title: "MongoDB",
      description: "NoSQL database for handling unstructured data and scalable applications.",
      link: "#",
      icon: faDatabase
    },
    {
      title: "Express",
      description: "Web application framework for Node.js for building RESTful APIs.",
      link: "#",
      icon: faNodeJs
    },
    {
      title: "HTML/CSS",
      description: "Core technologies for structuring and styling web pages.",
      link: "#",
      icon: [faHtml5, faCss3Alt]
    },
  ];

  return (
    <div className='bg-black w-full min-h-screen text-white'>
      <div className='pt-[10%] flex flex-col items-center'>
        <h1 className='text-[40px] tracking-[8px] font-[700]'>Skills</h1>
        <p className='text-lg mt-2'>Here are some of the technologies I have experience with.</p>
      </div>
      <div className="w-[1300px] mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
};