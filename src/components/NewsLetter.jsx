import React from "react";

function NewsLetter() {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips to fix your buisness?
          </h1>
          <p>Sign Up For Our New Letter.</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black">
              Subscribe
            </button>
          </div>
          <p>
            We care about your privacy. To learn more check out our{" "}
            <span className="text-[#00df9a]"> privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
