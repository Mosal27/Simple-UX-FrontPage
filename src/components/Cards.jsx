import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-4">Single Users</h2>
          <p className="text-center font-bold text-[#00df9a]">$149.99</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 USER</p>
            <p className="py-2 border-b mx-8">UP to 2GB RAM</p>
          </div>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 px-6 py-3 text-black">
            Start Free Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-4">Double Users</h2>
          <p className="text-center font-bold text-[#00df9a]">$199.99</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">1Tb Storage</p>
            <p className="py-2 border-b mx-8">2 USER</p>
            <p className="py-2 border-b mx-8">UP to 8GB RAM</p>
          </div>
          <button className="bg-[#0d1c17] w-full rounded-md font-medium my-6 px-6 py-3 text-white">
            Start Free Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-4">Three Users</h2>
          <p className="text-center font-bold text-[#00df9a]">$289.99</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">2TB Storage</p>
            <p className="py-2 border-b mx-8">3 USER</p>
            <p className="py-2 border-b mx-8">UP to 16GB RAM</p>
          </div>
          <button className="bg-[#00df9a] w-full rounded-md font-medium my-6 px-6 py-3 text-black">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
