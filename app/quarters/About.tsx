import React from "react";

const About = () => {
  return (
    <div id='about'>
      <div className="bg-gray-200 text-center mx-auto text-black">
        <div className="px-4 py-8">
          <h1 className="text-3xl font-bold m-5">About us</h1>
        </div>
        <div className="flex max-w-4xl text-lg text-justify mx-auto md:flex-row flex-col mt-5">
          
        <img
            src="/images/president.png"
            alt="background"
            height={200}
            width={200}
            className="ml-5 rounded-full"
          ></img>
          <div>
            <h2 className="font-bold text-xl">
              Presidential Initiative for Artificial Intelligence & Computing
              (PIAIC)
            </h2>
            <p>
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
