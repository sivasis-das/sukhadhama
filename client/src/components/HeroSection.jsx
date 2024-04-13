import React from "react";

import SearchBar from "./SearchBar";
function HeroSection({ img }) {
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
          <SearchBar style={"w-10/12 md:w-1/2"} />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
