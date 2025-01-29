import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ContainedMeteors from './ui/Meteor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { CardContainer, CardBody, CardItem } from './ui/3d-card'; 


    const handleDownload = () => {
      const link = document.createElement('a'); 
      link.href = "https://drive.google.com/file/d/1Bk8u5OjwQfTTpTXDiXK9RwadhZYiyuIm/view?usp=drive_link"; 
      link.download = "RESUME.pdf"; 
      link.click(); 
    };

function AboutMain() {
    const resuse = "h-[220px] w-[350px] bg-black rounded-[25px] shadow-[0_0_40px_20px_rgba(168,85,247,0.4)] transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.6)] relative overflow-hidden";
    
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['I am <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-500 font-[700] text-2xl">Sanjay K J</span>,<span class="text-purple-100 font-[500]"> I am now on a path to becoming a software developer. I am dedicated to continuous learning and growth, always eager to explore new concepts and technologies in the field of software development. I am a quick learner and a team player, always ready to take on new challenges. I am passionate about coding and I am always looking for opportunities to improve my skills and knowledge.<span>'],
            typeSpeed: 10,
            loop: false,
            loopCount: Infinity,
            cursorChar: "|",
            contentType: 'html'
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='bg-black w-full min-h-screen text-white'>
            <div className='pt-[10%] flex flex-col items-center'>
                <div className='max-w-[70%] text-center min-h-[140px]'>
                    <span className='text-[21px]' ref={el}></span>
                </div>
                <div className='flex flex-col items-center mt-40 gap-[80px]'>
                    <p className='text-[40px] tracking-[8px] font-[700]'>Education</p>
                    <div className='mt-8 text-2xl flex flex-row gap-20 min-h-[150px]'>
                        <div className={resuse}>
                            <ContainedMeteors number={10} />
                            <div className="relative z-10 p-6 text-white">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span>&nbsp; Primary & Secondary</span>
                                <p className='pl-14 pt-7 text-[18px]'>
                                    Maruthi Vidya Kendra <br /> <span className='pl-13'>Tumkuru</span>
                                </p>
                                <p className='pl-22 pt-4 text-[18px]'>Scored : 95.5%</p>
                            </div>
                        </div>
                        <div className={resuse}>
                            <ContainedMeteors number={10} />
                            <div className="relative z-10 p-6 text-white">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span>&nbsp;&nbsp;&nbsp; Higher Secondary</span>
                                <p className='pl-14 pt-7 text-[18px]'>
                                    The Master's PU College <br /> <span className='pl-13'>Tumkuru</span>
                                </p>
                                <p className='pl-24 pt-4 text-[18px]'>Scored : 98%</p>
                            </div>
                        </div>
                        <div className={resuse}>
                            <ContainedMeteors number={10} />
                            <div className="relative z-10 p-6 text-white">
                                <FontAwesomeIcon icon={faGraduationCap} />
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Undergraduate</span>
                                <p className='pl-1 pt-7 text-[18px]'>
                                    Siddaganga Institute of Technology <br /> <span className='pl-26'>Tumkuru</span>
                                </p>
                                <p className='pl-26 pt-4 text-[18px]'>CGPA : 9.59</p>
                            </div>
                        </div>
                    </div>

                    <p className='text-[40px] tracking-[8px] font-[700]'>Hobbies</p>
                    <div className='mt-8 text-2xl flex flex-row gap-30 min-h-[150px]'>
                        <div className="relative group">
                                <div
                                    className="absolute -inset-1 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300 h-110"
                                    style={{
                                    background: `linear-gradient(to right, rgba(168, 85, 247, 0.4), rgba(192, 132, 252, 0.4))`,
                                    }}
                                ></div>
                            <CardContainer className="cursor-pointer relative">
                            <CardBody className="bg-black rounded-[25px] p-6 h-74 w-74">
                                <CardItem
                                translateZ={50}
                                className="text-white text-xl pl-21 tracking-[5px]"
                                >
                                Chess
                                </CardItem>
                                <CardItem
                                translateZ={100}
                                className="text-white text-lg mt-4"
                                >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliBqcS6UTpTd5i2qFE082g57nzw4o_mhKgg&s" alt="" style={{height:'200px',width:'250px',borderRadius:'40px',paddingLeft:'10px'}}/>
                                </CardItem>
                            </CardBody>
                            </CardContainer>
                        </div>

                        <div className="relative group">
                        <div
                            className="absolute -inset-1 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300 h-110"
                            style={{
                            background: `linear-gradient(to right, rgba(168, 85, 247, 0.4), rgba(192, 132, 252, 0.4))`,
                            }}
                        ></div>
                            <CardContainer className="cursor-pointer relative">
                            <CardBody className="bg-black rounded-[25px] p-6 h-74 w-74">
                                <CardItem
                                translateZ={50}
                                className="text-white text-xl tracking-[5px] pl-15"
                                >
                                Badminton
                                </CardItem>
                                <CardItem
                                translateZ={100}
                                className="text-white text-lg mt-4"
                                >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFLImvUPrG9LZXRsBXNwWjrQNOZ3O8A6B1A&s" alt="" style={{height:'220px',width:'220px',borderRadius:'40px',paddingLeft:'20px',paddingBottom:'10px'}} />
                                </CardItem>
                            </CardBody>
                            </CardContainer>
                        </div>

                    
                        <div className="relative group">
                        <div
                            className="absolute -inset-1 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300 h-110"
                            style={{
                            background: `linear-gradient(to right, rgba(168, 85, 247, 0.4), rgba(192, 132, 252, 0.4))`,
                            }}
                        ></div>
                            <CardContainer className="cursor-pointer relative">
                            <CardBody className="bg-black rounded-[25px] p-6 h-74 w-74">
                                <CardItem
                                translateZ={50}
                                className="text-white text-xl tracking-[5px] pl-19"
                                >
                                Arduino
                                </CardItem>
                                <CardItem
                                translateZ={100}
                                className="text-white text-lg mt-4"
                                >
                                <img src="https://i.redd.it/arduino-uno-uhd-wallpapers-4965-x-2666-v0-6oxtph48x9jb1.png?width=4965&format=png&auto=webp&s=a89bb500ef0bb417706099855bf764ca80bdbd7f" alt="" style={{height:'200px',width:'270px',borderRadius:'40px',paddingLeft:'10px'}}/>
                                </CardItem>
                            </CardBody>
                            </CardContainer>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-10 mb-11'>
                    <p className='text-[40px] tracking-[8px] font-[700]'>Resume</p>
                    <button className="p-[3px] relative mb-7" onClick={handleDownload}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-[18px] font-[600] text-white hover:bg-transparent cursor-pointer ">
                            Download..!
                        </div>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMain;