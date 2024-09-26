import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-900 inline-block">ALUKAS & CO</h2>
           <p className="text-sm text-gray-500 inline-block">Gold & Diamonds</p>
           </div>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">About Alukas</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">About Us</a></li>
                <li><a href="#" className="hover:text-gray-800">Core Values</a></li>
                <li><a href="#" className="hover:text-gray-800">Careers</a></li>
                <li><a href="#" className="hover:text-gray-800">Press Releases</a></li>
                <li><a href="#" className="hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="hover:text-gray-800">Sitemap</a></li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Shopping App</a></li>
                <li><a href="#" className="hover:text-gray-800">Be An Affiliate</a></li>
                <li><a href="#" className="hover:text-gray-800">Advertise Your Product</a></li>
                <li><a href="#" className="hover:text-gray-800">Media Enquiries</a></li>
                <li><a href="#" className="hover:text-gray-800">Other Services</a></li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Store Details</h3>
              <div className="flex flex-col items-center mb-2">
                <div className="bg-gray-200 rounded-full p-2 mb-2">
                  <TfiHeadphoneAlt className='w-8 h-8 text-gray-700 cursor-pointer'/>
                </div>
                <div>
                  <p className="text-sm font-bold">Need Any Help?</p>
                  <a href="tel:+800123456" className="text-sm text-gray-600 hover:text-gray-800">(+800) 1234 56</a>
                </div>
              </div>
              <p className="text-sm text-gray-600">502 New Design Str, Melbourne, Australia</p>
              <p className="text-sm text-gray-600">Email: <a href="mailto:alukas@domain.com" className="text-gray-600 hover:text-gray-800">alukas@domain.com</a></p>
            </div>

            <div className="text-center ">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaTiktok size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaYoutube size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-800"><FaFacebook size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
       <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031" alt="Payment Methods" className="w-36 h-auto" />
        </div>
       <p className="text-sm text-gray-600">Copyright © Alukas all rights reserved. Powered by Bersky.</p>
       </div>

      </div>
    </footer>
  );
};

export default Footer;
