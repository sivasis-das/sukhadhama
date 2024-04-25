import React from "react";
import { Helmet } from "react-helmet";
import building from "../assets/building.png";
function News() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>News & Insights</title>
        <meta
          name="description"
          content="Description for Tutorial for React Helmet"
        />
      </Helmet>
      <div className=" w-[95%] md:w-11/12 m-auto mt-8 h-[500px] ">
        <div
          className="flex
         flex-col  gap-5"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-7xl font-extrabold text-center text-orange-600">
              Oops !!
            </h3>
            <h3 className="text-5xl font-extrabold text-center text-orange-600">
              We are under construction.
            </h3>
            <p className="text-xl font-extrabold text-center text-black">
              Please feel comfortable to browse through our other services.
              Thank You.
            </p>
          </div>
          <div className=" ">
            <img className="m-auto " src={building} alt="building" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
