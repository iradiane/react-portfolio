import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg max-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-blue-600 text-4xl sm:text-7xl font-bold mt-24">
            I'am a Front-End Developer
          </h2>
          <p className="text-gray-600 py-4 max-w-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore unde architecto, repudiandae cumque qui nam debitis officia quos, similique illum magni odit error blanditiis ipsam tenetur, ut praesentium excepturi possimus.</p>
        </div>
        <div>
          <button className="text-white group w-fit px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">portfolio
            <span className="group-hover:rotate-90"><FaArrowRightLong size={25} className="ml-1"/></span>
          </button>
        </div>
        <div>
        <img src='/heroimage.jpg' alt="Hero"  className="rounded-2xl mx-auto w-2/3 md:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
