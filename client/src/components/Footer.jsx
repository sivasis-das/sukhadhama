import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* main container */}
      <div className="h-5/6  md:w-11/12 md:m-auto ">
        {/* social media links */}
        <div className="w-[98%] m-auto flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex text-black *:bg-white *:p-2 *:rounded-full *:m-2 *:cursor-pointer ">
            <div className="hover:bg-gray-300">
              <BsTwitterX size={24} />
            </div>
            <div className="hover:bg-gray-300">
              <FaFacebook size={24} />
            </div>
            <div className="hover:bg-gray-300">
              <FaLinkedinIn size={24} />
            </div>
            <div className="hover:bg-gray-300">
              <FaInstagram size={24} />
            </div>
            <div className="hover:bg-gray-300">
              <FaPinterest size={24} />
            </div>
            <div className="hover:bg-gray-300">
              <FaYoutube size={24} />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-white w-fit rounded-full px-8 hover:bg-gray-300 cursor-pointer">
              <div className=" *:font-semibold *:text-lg">
                <div className="text-black">
                  <span>.realtor</span> &#8482;
                </div>
                <div>
                  <span className="text-green-500">.realestate</span>
                </div>
              </div>
            </div>
            <div className="bg-white w-fit rounded-full px-8 flex hover:bg-gray-300 cursor-pointer">
              <div className=" *:font-semibold *:text-lg flex gap-2 items-center">
                <div className="text-black">
                  <BsFillHouseCheckFill size={24} />
                </div>
                <div>
                  <span className="text-black font-semibold">houselogic</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-wrap w-[95%] sm:w-[98%] m-auto mt-5">
          <div className="">
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              About us
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Careers
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Accessibility
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Feedback
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Media room
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Ad Choices
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Advertise with us
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Agent support
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Privacy
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Terms
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Home Made
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Tech Blog
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Agent Blog
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Sitemap
            </p>
          </div>
        </div>

        {/*get the app */}
        <div className="w-[95%] sm:w-[98%] m-auto mt-10 text-xl font-extrabold">
          Get the app
        </div>
        <div className="w-[95%] sm:w-[98%] m-auto mt-5 flex gap-3">
          <div className="flex items-center bg-white text-black rounded-md py-1 px-2 gap-1">
            <FaApple size={25} />
            <div>
              <p className="text-xs">Download on the</p>
              <p className="font-semibold text-xl">App Store</p>
            </div>
          </div>
          <div className="flex items-center bg-white text-black rounded-md py-1 px-2 gap-1">
            <FaGooglePlay size={25} />
            <div>
              <p className="text-xs">GET IT ON</p>
              <p className="font-semibold text-xl">Google Play</p>
            </div>
          </div>
        </div>

        {/* products */}
        <div className="w-[95%] sm:w-[98%] m-auto mt-10 text-xl font-extrabold">
          Products
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-wrap w-[95%] sm:w-[98%] m-auto mt-5">
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Leads & Branding
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              ListHub
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Moving.com
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              International Properties
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Avail
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              UpNest
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Builder Solutions
            </p>
          </div>
        </div>

        {/* news corp */}
        <div className="w-[95%] sm:w-[98%] m-auto mt-10 text-xl font-extrabold">
          News Corp
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:flex lg:flex-wrap w-[95%] sm:w-[98%] m-auto mt-5">
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Barrons
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Financial News
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Harper Collins
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              Mansion Global
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              MarketWatch
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              New York Post
            </p>
          </div>
          <div>
            <p className="mr-9 cursor-pointer text-lg font-semibold py-4">
              REA Group
            </p>
          </div>
        </div>

        <div className="w-[95%] sm:w-[98%] m-auto mt-10 text-xs ">
          *Based on an Aug. 2023 proprietary survey among real estate
          professionals.
        </div>
        <div className="w-[95%] sm:w-[98%] m-auto mt-5 text-xs ">
          © {new Date().getFullYear()} <span className="underline">National Association of REALTORS</span> - and <span className="underline">SivasisDas,Inc.</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
