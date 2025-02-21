import React from "react";
import { TracingBeam } from "./ui/Tracing-beam";
import ProjectMainn from "./MovingCards";

export function ProjectMain() {
  return (
    <div className='bg-black w-full min-h-screen text-white'>
      <div className='pt-[10%] flex flex-col items-center'>
        <h1 className='text-[40px] tracking-[8px] font-[700]'>Projects</h1>
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
                <p className="text-2xl mb-4 font-[600] tracking-[4px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-500">
                  {item.title}
                </p>
                <div className="text-[17px] prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <img
                      src={item.image}
                      alt="blog thumbnail"
                      className="rounded-lg mb-10 object-cover w-full h-[350px] opacity-75"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
        <div className="mt-[100px]">
          <ProjectMainn/>
        </div>
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title: "Medical-Blockchain",
    description: (
      <>
        <p>
          The project addresses the critical issue of <b>secure and efficient sharing of Electronic 
          Health Records (EHRs)</b>, a challenge due to the sensitive nature of medical data and the 
          increasing need for privacy-preserving solutions. Traditional centralized systems are 
          prone to data breaches, unauthorized access, and inefficiencies, which compromise 
          patient confidentiality and trust.
        </p>
        <p>
          This project leverages blockchain technology and smart contracts to create a 
          decentralized system for managing and sharing medical records. Blockchain ensures that 
          data integrity, privacy, and security are maintained while enabling authorized users to 
          access records seamlessly. Additionally, by integrating decentralized storage solutions 
          like IPFS and Pinata, the project overcomes the limitations of centralized data storage, 
          ensuring that medical records are tamper-proof and easily retrievable. 
        </p>
      </>
    ),
   
    image:
      "https://www.statnews.com/wp-content/uploads/2017/12/Blockchain-healthcare-graphic.png",
  },
  {
    title: "Poki-Dex",
    description: (
      <>
        <p>
          This React-based Pokedex application allows users to browse and search for Pokémon using the PokeAPI. It features a grid of Pokémon cards with images and names, pagination for navigation, and real-time search functionality with a 2-second debounce for better performance.
        </p>
        <p>
          Users can view detailed Pokémon information, including height, weight, base experience, type, and similar Pokémon recommendations. The app is built with React 18.3, Vite, React Router DOM v7, and Axios, ensuring a modern and responsive design. Notifications are handled using React Toastify, and custom CSS ensures a seamless experience across devices.
        </p>
      </>
    ),
    image:
      "https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/pokemon-chromebook-wallpaper.jpg",
  },
  {
    title: "Learning Management System",
    description: (
      <>
        <p>
          This project is a robust Learning Management System (LMS) designed to streamline course management and enhance the learning experience. The system features a well-structured backend API and a responsive React-based frontend. It supports two primary user roles: Admin and Student, each having specific permissions and functionalities tailored to their needs.
        </p>
        <p>
          The React-based frontend is fully responsive and user-friendly. Admins can manage courses, upload lectures, and monitor payments, while Students can access their dashboard, view courses, track progress, and download content. React Router facilitates smooth navigation between pages, and state management ensures seamless data flow. A search and filtering feature allows Students to find courses based on preferences.
        </p>
      </>
    ),
    
    image:
      "https://img.freepik.com/free-vector/education-infographic-template_1212-123.jpg?semt=ais_hybrid",
  },
];
