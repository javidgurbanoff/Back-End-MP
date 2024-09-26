"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonSharp, IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="text-white w-full h-[40px] bg-[#222222]">
        <div className="flex justify-between items-center h-full px-8">
          <div className="flex gap-[20px] items-center text-[16px]">
            <div className="relative pl-8">
              <h1
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="cursor-pointer flex items-center"
              >
                English <RiArrowDropDownLine />
              </h1>
              {showLanguageDropdown && (
                <div className="absolute top-[30px] left-0 bg-[#333333] text-white p-2 z-10">
                  <h1 className="hover:bg-[#444444] p-2 cursor-pointer">
                    English
                  </h1>
                  <h1 className="hover:bg-[#444444] p-2 cursor-pointer">
                    Spanish
                  </h1>
                  <h1 className="hover:bg-[#444444] p-2 cursor-pointer">
                    French
                  </h1>
                </div>
              )}
            </div>

            <div className="relative">
              <h1
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="cursor-pointer flex items-center"
              >
                United States (USD $) <RiArrowDropDownLine />
              </h1>
              {showCurrencyDropdown && (
                <div className="absolute top-[30px] left-0 bg-[#333333] text-white p-2 z-10">
                  <h1 className="hover:bg-[#444444] p-2 cursor-pointer">USD</h1>
                  <h1 className="hover:bg-[#444444] p-2 cursor-pointer">EUR</h1>
                  <h1 className="hover:bg-[#444444] p-2 cursor-pointer">GBP</h1>
                </div>
              )}
            </div>

            <h1 className="text-[#f0f0f0]">Summer Sale 15% off!</h1>
            <h1 className="underline cursor-pointer text-[#f0f0f0]">
              Shop Now!
            </h1>
          </div>

          <div className="flex gap-[20px] items-center text-[16px] pr-10">
            <h1 className="cursor-pointer">Store Location</h1>
            <h1 className="cursor-pointer">Contact</h1>
            <h1 className="cursor-pointer">About</h1>
            <h1 className="cursor-pointer">Gift Cards</h1>
          </div>
        </div>
      </div>

      <div className="w-full h-[97px] flex justify-between items-center px-12 bg-white border-b border-gray-200 pr-24">
        <div className="relative pl-[20px]">
          <input
            className="w-[290px] h-[47px] border border-gray-300  pl-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="search"
            name="q"
            placeholder="Search Products"
            maxLength={128}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <HiOutlineMagnifyingGlass />
          </button>
        </div>

        <h1 className="text-[35px] text-[#222222] font-normal text-center">
          ALUKAS & CO
        </h1>

        <div className="flex items-center space-x-6">
          <IoPersonSharp size={24} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <IoMdHeartEmpty size={24} />
            <span className="absolute top-[-8px] right-[-8px] bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <div className="relative cursor-pointer">
            <IoCartOutline size={24} />
            <span className="absolute top-[-8px] right-[-8px] bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[56px] flex justify-between items-center pl-[3rem] pr-[4rem] bg-gray-100">
        <div className="flex items-center cursor-pointer pl-[3rem]">
          <h3 className="flex items-center">
            BROWSE CATEGORIES
            <RiArrowDropDownLine size={20} />
          </h3>
        </div>

        <ul className="flex space-x-6 text-[15px] text-[#222222] relative font-medium	">
          <li className="relative group cursor-pointer p-[15px] flex items-center">
            HOME
            <ChevronDownIcon className="w-4 h-4 ml-1" />
            <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg p-4 z-10">
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Home v1 - Default
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 2
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 3
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer p-[15px] flex items-center">
            SHOP
            <ChevronDownIcon className="w-4 h-4 ml-1" />
            <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg p-4 z-10">
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 1
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 2
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 3
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer p-[15px] flex items-center">
            PRODUCT
            <ChevronDownIcon className="w-4 h-4 ml-1" />
            <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg p-4 z-10">
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 1
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 2
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 3
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer p-[15px] flex items-center">
            PAGES
            <ChevronDownIcon className="w-4 h-4 ml-1" />
            <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg p-4 z-10">
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 1
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 2
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 3
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer  flex items-center">
            BLOGS
            <ChevronDownIcon className="w-4 h-4 ml-1" />
            <ul className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg p-4 z-10">
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 1
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 2
              </li>
              <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                Dropdown Item 3
              </li>
            </ul>
          </li>

          <li className="relative group cursor-pointer p-[15px] flex items-center">
            BUY ALUKAS!
          </li>
        </ul>

        <div className="flex items-center space-x-4 pr-[10px] text-[18px]">
          <BsTelephone className="cursor-pointer" size={18} />
          <span className="cursor-pointer">(+800) 1234 56</span>
          <IoLocationOutline className="cursor-pointer" size={18} />
          <span className="cursor-pointer">Our Stores</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
