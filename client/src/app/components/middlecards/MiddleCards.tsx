import React from "react";

const MiddleCards = () => {
  return (
    <div className="flex justify-center gap-5">
      <div className="relative w-[45%] overflow-hidden group">
        <img
          src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_4.jpg?v=1710149492&width=940"
          alt="New Bangles Collection"
          className="w-[670px] h-[405px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute bottom-[13.25rem] left-[1.25rem] p-4">
          <h3 className="text-[30px] font-semibold">New Bangles Collection</h3>
          <p className="text-[18px] mt-1">Catch the highlight in the roof</p>
          <a
            href="#"
            className="text-[15px] font-semibold border-b border-black mt-3 inline-block"
          >
            SHOP NOW
          </a>
        </div>
      </div>

      <div className="relative w-[45%] overflow-hidden group">
        <img
          src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_5.jpg?v=1710149492&width=940"
          alt="Culture of Ring Design"
          className="w-[670px] h-[405px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute bottom-[13.25rem] left-[1.25rem] p-4">
          <h3 className="text-[30px] font-semibold">Culture of Ring Design</h3>
          <p className="text-[18px] mt-1">Pasha de Cartier Collection.</p>
          <a
            href="#"
            className="text-[15px] font-semibold border-b border-black mt-3 inline-block"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiddleCards;
