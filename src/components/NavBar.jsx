import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="flex text-white justify-between items-center h-24  max-w-[1240px] mx-auto px-4">
      <div>
     
      </div>

      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Mywebsite.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleOpen} className="block md:hidden">
        {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          open
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          {" "}
          Mywebsite.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b">Home</li>
          <li className="p-4 border-b">About            </li>
          <li className="p-4 border-b">Contact</li>
        </ul>
      </div>
       
    </div>
  );
}

export default NavBar;
