import React from "react";
import { FaSearch } from "react-icons/fa";
function HeroSection({img}) {
    // done
  return (
    <>
      <div
        className="relative w-full overflow-hidden h-[500px]"
        style={{
          background: `url(${img}) bottom no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="  absolute flex flex-col items-center justify-center left-0 right-0 top-0 bottom-0">
          <div className="mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold text-center">
              The #1 site real estate <br />
              professionals trust*
            </h1>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
            className="w-10/12 md:w-1/2  bg-white overflow-hidden rounded-3xl relative p-2"
          >
            <input
              type="text"
              placeholder="Address, School, City, Zip or Neighborhood"
              className=" w-full outline-none  pl-3  text-2xl font-light  placeholder:text-wrap"
            />
            <div className="bg-gray-400 cursor-pointer p-3 rounded-full absolute right-1 top-1 hover:bg-gray-600">
              <FaSearch className="text-white" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
