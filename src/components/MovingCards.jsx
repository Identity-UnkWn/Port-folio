import React from 'react';
import { InfiniteMovingCards } from './ui/Infinite-moving-cards';


const ProjectMainn = () => {
  const item = [
    {
      quote: "Gemini clone",
      name: "This project completed using React likely involves building a user interface that mimics the features and layout of the Gemini app or platform.",
      
    },
    {
      quote: "Decentralized-Storage",
      name: "This project completed using React involves creating a decentralized storage system that allows users to store and access files securely and privately.",
      
    },
    {
      quote: "Contino",
      name: "Powerful script written in JS that retrieves the password from our college website for a given username(USN).",
    },
    {
      quote: "Whats-Mod",
      name: "Project that uploades the messages to their database as soon as they arrive ,also saves view once and deleted messages forever ",
    },
    {
        quote: "PDF-Editor",
        name: "This project innvolves deleting the pages from the pdf and getting the customised PDF",
    },
    {
        quote:"Site-01",
        name:"A simple site built at initial stage of my journey in which user can signIn,signUp and view their profile also user can set,update passwords and so on.."
    }
  ];

  return (
    <div className="h-[500px] bg-black py-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-[5px]">
            Other Projects
        </h2>
        <div>
          <InfiniteMovingCards
            items={item}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectMainn;