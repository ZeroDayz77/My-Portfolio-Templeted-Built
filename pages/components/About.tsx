import React from "react";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;
  return (
    <div id="About" className="px-8 md:px-32 pb-32 content-center bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500">
      <h1 className="pt-12 uppercase font-bold text-center text-white text-bold text-4xl">{about.title}</h1>
      <div className="mt-16 flex flex-col md:flex-row align-center items-center">
        <div className="w-1/2 flex justify-center content-center">
          <Image 
            src={about.image} 
            alt="about" 
            className="shadow-lg" 
            width={300} 
            height={300}
            />
        </div>
        <div className="pt-8 md:py-0 md:w-1/2 text-white md:ml-4 text-center md:text-left">
          <div className="about__primary">
            <span>{about.primary}</span>
          </div>
          <div className="about__primary">
            <span>{about.primary2}</span>
          </div>
          <div className="mt-6">
            <span>{about.secondary}</span>
          </div>
          <div className="mt-6 mx-auto md:mx-0 border-2 border-white py-1 px-2 w-36 text-center font-bold">
            <a target="_blank"  href={'https://drive.google.com/file/d/122Ka8DjPSjwi0M9HX7FGz53WsMlpclgH/view?usp=sharing'} className="about__resume text-white text-l">View Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;