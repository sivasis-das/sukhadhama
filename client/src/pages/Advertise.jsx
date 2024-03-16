import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Advertise() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <>
      <div className="w-full   sm:w-11/12 m-auto ">
        {/* first section */}
        <div className="flex flex-col sm:flex-row  gap-3 sm:mt-14 ">
          <div className="pt-5 flex-1">
            <h1 className="text-5xl xl:text-6xl font-extrabold text-center sm:text-left text-orange-600 w-11/12 m-auto mb-6">
              Lead gen and <br className="hidden md:block" /> marketing that{" "}
              <br className="hidden md:block" /> powers real{" "}
              <br className="hidden md:block" /> estate pros
            </h1>
            <p className="text-xl font-bold text-center sm:text-left  text-black xl:text-3xl w-11/12 m-auto mb-7">
              Unleash your business' full <br className="hidden md:block" />{" "}
              potential with the industry's <br className="hidden md:block" />{" "}
              leading growth platform.
            </p>
            <div className="w-11/12 m-auto flex justify-center sm:justify-start">
              {currentUser ? (
                <Link to="/create-listing">
                  <button className="bg-orange-600 px-5 py-3 rounded-full text-white text-xl font-bold hover:bg-white hover:text-orange-600 border-orange-600 border-2 transition ease-in-out duration-500">
                    Create Listings{" "}
                  </button>
                </Link>
              ) : (
                <Link to="/sign-in">
                  <button className="bg-orange-600 px-5 py-3 rounded-full text-white text-xl font-bold hover:bg-white hover:text-orange-600 border-orange-600 border-2 transition ease-in-out duration-500">
                    Register to list your property{" "}
                  </button>
                </Link>
              )}
              
            </div>
          </div>
          <div className="bg-yellow-200 sm:w-3/6 w-full">
            <div className="w-11/12 m-auto pt-10">
              <div className="flex relative bg-pink-200 pt-9">
                <div className="w-fit group absolute top-0 -left-4">
                  <div className="flex justify-center">
                    <p className="bg-orange-600 rounded-full  px-6 text-white font-semibold relative text-center  w-fit mb-3  group-hover:-translate-y-2 duration-300">
                      Branding
                    </p>
                  </div>

                  <img
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-phone-1.png"
                    alt=""
                    className="sm:h-80 h-72  group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="w-fit group absolute   left-[50%] -translate-x-1/2  -top-6 z-10">
                  <div className="flex justify-center">
                    <p className="bg-orange-600 rounded-full  px-6 text-white font-semibold relative text-center w-fit mb-3  group-hover:-translate-y-2 duration-300">
                      Leads
                    </p>
                  </div>

                  <img
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-phone-2.png"
                    alt=""
                    className="sm:h-96 h-80  group-hover:scale-105 duration-300 "
                  />
                </div>
                <div className="w-fit group absolute -right-4 top-0">
                  <div className="flex justify-center">
                    <p className="bg-orange-600 rounded-full  px-6 text-white font-semibold relative text-center w-fit mb-3 group-hover:-translate-y-2 duration-300">
                      Listings
                    </p>
                  </div>

                  <img
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-phone-3.png"
                    alt=""
                    className="sm:h-80 h-72  group-hover:scale-105 duration-300 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertise;
