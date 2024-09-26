"use client";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Main = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        className="relative"
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <SlArrowLeft className="text-[2rem] text-black" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-60 hover:opacity-100 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <SlArrowRight className="text-[2rem] text-black" />
            </div>
          );
        }}
      >
        <div className="relative">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_s2.jpg?v=1710139621&width=1800"
            alt="Shop Image 1"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 pr-4 text-black z-10">
            <h2 className="text-[50px] font-normal mb-2 animate-fade-in-left">
              New S/S 2024
            </h2>
            <h2 className="text-5xl font-normal mb-2 animate-fade-in-left-late">
              Amazing collections
            </h2>
            <p className="text-lg mt-2 animate-fade-in-left-late">
              A symbol of love and a modern take on gold.
            </p>
            <a
              className="mt-6 px-9 py-3 border border-black font-semibold text-sm hover:bg-black hover:text-white transition animate-fade-in-left-btn"
              href="/#"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_s3.jpg?v=1710139620&width=1800"
            alt="Shop Image 2"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 pr-4 text-black z-10">
            <h2 className="text-[50px] font-normal mb-2 animate-fade-in-left">
              A Minimalistic
              <br /> Design Masculine
            </h2>
            <p className="text-lg mt-2 animate-fade-in-left-late">
              Awesome products for the dynamic urban lifestyle
            </p>
            <a
              className="mt-6 px-9 py-3 text-[#000] border border-black font-semibold text-sm hover:bg-black hover:text-white transition animate-fade-in-left-btn"
              href="/#"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/save_web_slide1_resize.jpg?v=1711681053&width=1800"
            alt="Shop Image 3"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 pr-4 text-black z-10">
            <h2 className="text-[50px] font-normal mb-2 animate-fade-in-left">
              Introducing The <br />
              Lost Day Collection
            </h2>
            <p className="text-lg mt-2 animate-fade-in-left-late">
              Ring, Occasion Pieces, Pandora & more collection
            </p>
            <a
              className="mt-6 px-9 py-3 text-[#000] border border-black font-semibold text-sm hover:bg-black hover:text-white transition animate-fade-in-left-btn"
              href="/#"
            >
              Shop Now
            </a>
          </div>
        </div>
      </Carousel>

      <div className="flex mt-8 justify-center gap-8">
        <div className="relative group overflow-hidden">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482"
            alt="Fashion Image 1"
            className="w-[436px] h-[300px] transition-transform duration-500 ease-in-out transform group-hover:scale-105 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-start items-start p-5 text-white z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <p className="text-[14px] font-normal mb-2">FLAT DISCOUNT</p>
            <h3 className="text-xl">Necklace & Body Jewels</h3>
            <a
              className="text-[15px] underline underline-offset-8 font-normal mt-2"
              href="/#"
            >
              SHOP NOW
            </a>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_2.jpg?v=1711684410"
            alt="Fashion Image 2"
            className="w-[436px] h-[300px] transition-transform duration-500 ease-in-out transform group-hover:scale-105 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-start items-start p-5 text-white z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <p className="text-[14px] font-normal mb-2">SEASON SALE</p>
            <h3 className="text-xl">Rings & Earrings</h3>
            <a
              className="text-[15px] underline underline-offset-8 font-normal mt-2"
              href="/#"
            >
              SHOP NOW
            </a>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_3.jpg?v=1711684399"
            alt="Fashion Image 3"
            className="w-[436px] h-[300px] transition-transform duration-500 ease-in-out transform group-hover:scale-105 object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-start items-start p-5 text-white z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <p className="text-[14px] font-normal mb-2">NEW ARRIVALS</p>
            <h3 className="text-xl">Bracelets & Pendants</h3>
            <a
              className="text-[15px] underline underline-offset-8 font-normal mt-2"
              href="/#"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
