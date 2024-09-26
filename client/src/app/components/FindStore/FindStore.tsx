import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const FindStore = () => {
  return (
    <div className="flex justify-center items-center h-full  p-4 bg-[#f9ebf9]">
      <div className="flex items-center space-x-4 bg-[#f9ebf9]">
        <IoHomeOutline className="w-7 h-7" />{" "}
        <h1 className="text-2xl">Find Shops Near You</h1>{" "}
        <a
          className="text-lg border border-black px-5 py-1.5 m-0 mx-2.5 transition-colors duration-300 hover:bg-black hover:text-white"
          href="#"
        >
          Find Store
        </a>
      </div>
    </div>
  );
};

export default FindStore;
