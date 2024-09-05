import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center">
        <p className="text-[#00df9a] font-bold p-2">GROW WITH DATA ANALITCS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex items-center justify-center py-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast and Flexiable Finacing
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTC", "BTB", "SASS"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          {" "}
          Monitor your analitics to increase your revenue
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
