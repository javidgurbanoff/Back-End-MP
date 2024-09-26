import React from "react";

const Subscribe = () => {
  return (
    <div className="p-[80px] text-center bg-[#f5f5f5]">
      <h2 className="text-[40px] font-semibold mb-4">Subscribe Newsletter</h2>
      <p className="text-[20px] mb-8">
        Sign up to our Newsletter and get the discount code.
      </p>
      <div className="flex justify-center items-center">
        <input
          type="email"
          placeholder="Your email address..."
          className="w-[510px] h-[50px] px-[10px] text-[16px] border-2 border-black"
        />
        <button className="bg-[#111111] text-white px-9 py-3 text-[16px] ml-[10px] font-semibold uppercase">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
