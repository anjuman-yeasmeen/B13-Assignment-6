import React from "react";

import bannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-125 py-12 px-4 md:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={bannerImage}
            className="max-w-sm md:max-w-md rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
            alt="Banner"
          />
        </div>

        {/* Text Content Section */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge Section */}
          <div className="flex justify-center lg:justify-start mb-4">
            <div className="flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-4 py-1.5 rounded-full font-medium text-sm border border-[#E9D5FF]">
              <span className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full animate-pulse shadow-[0_0_8px_#7C3AED]"></span>
              New: AI-Powered Tools Available
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="py-6 text-gray-600 text-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one
            place. Start creating faster today. Explore Products
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            {/* 'Explore Tools' Button */}
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
              Explore Tools
            </button>
            
            {/* 'Watch Demo' Button  */}
            <button className="border-2 border-purple-200 hover:border-purple-300 text-purple-600  px-8 py-3 rounded-full font-semibold flex items-center gap-2.5 transition-all hover:bg-purple-50">
          
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;