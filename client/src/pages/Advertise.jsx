import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
function Advertise() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  // const currentRoute = window.location.pathname;
  // console.log(currentRoute);

  return (
    <>
      <div>
        <div className="w-full   sm:w-11/12 m-auto min-h-[600px] ">
          {/* first section */}
          <div className="flex flex-col sm:flex-row  gap-10 sm:gap-3 sm:pt-14 ">
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
            <div className=" sm:w-3/6 w-full flex items-center">
              <img
                className=" "
                src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-hero-agents.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* second section */}
        <div className="py-16 w-full   sm:w-11/12 m-auto">
          {/* header */}
          <div className="w-11/12 lg:w-[65%] m-auto *:text-center ">
            <h3 className="text-orange-600 text-2xl lg:text-3xl font-bold">
              Real estate lead solutions
            </h3>
            <h3 className="text-5xl lg:text-6xl font-extrabold mt-5 mb-9">
              Build a robust pipeline of quality leads with ease
            </h3>
            <h3 className="text-2xl font-thin">
              Agents and brokers can choose the solution that’s best for them or
              both to become a lead converting powerhouse.
            </h3>
          </div>

          <div className="flex flex-col mt-12 md:flex-row">
            {/* left section */}
            <div className="md:w-1/2">
              <div className="w-11/12 m-auto">
                <div className="w-11/12 sm:max-w-64 min-w-96 min-h-72 m-auto relative max-w-fit">
                  <img
                    className="-translate-y-4 "
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-get-leads-bg.jpg"
                    alt=""
                  />
                  <img
                    className="absolute bottom-0 right-0 resize min-w-40 max-w-64"
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-get-leads-fg.png"
                    alt=""
                  />
                </div>
                <div className="w-3/4 m-auto mt-5 text-center flex flex-col gap-5">
                  <p className="text-3xl lg:text-4xl font-extrabold ">
                    Get a predictable
                    <br /> volume of leads
                  </p>
                  <p className="text-2xl font-light">
                    Enjoy a steady stream of serious buyer and seller
                    connections with a single upfront cost.
                  </p>
                  <div className="bg-orange-600 rounded-full px-14 py-2 text-2xl font-semibold text-white w-fit m-auto">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
            {/* right section */}
            <div >
              <div className="w-11/12 m-auto">
                <div className="w-11/12 sm:max-w-64 min-w-96 min-h-72 m-auto relative max-w-fit">
                  <img
                    className="-translate-y-4 "
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-pay-when-close-bg.jpg"
                    alt=""
                  />
                  <img
                    className="absolute bottom-0 right-0 resize min-w-40 max-w-48"
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-pay-when-close-fg.png"
                    alt=""
                  />
                </div>
                <div className="w-3/4 m-auto mt-5 text-center flex flex-col gap-5">
                  <p className="text-3xl lg:text-4xl font-extrabold ">
                  Pay only when you close
                  </p>
                  <p className="text-2xl font-light">
                  Connect live with pre-screened buyers and sellers at no upfront cost.
                  </p>
                  <div className="bg-orange-600 rounded-full px-14 py-2 text-2xl font-semibold text-white w-fit m-auto">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="mt-auto py-14">
        <div className="xl:w-[90%] m-auto">
          <div className="w-[98%]  m-auto flex flex-col lg:flex-row-reverse gap-4">
            {/* social media */}
            <div className=" flex  justify-center lg:items-start">
              <div className="flex text-white *:bg-orange-600 *:p-2 *:rounded-full *:m-2 *:cursor-pointer ">
                <div className="hover:bg-black">
                  <BsTwitterX size={24} />
                </div>
                <div className="hover:bg-black">
                  <FaFacebook size={24} />
                </div>
                <div className="hover:bg-black">
                  <FaLinkedinIn size={24} />
                </div>
                <div className="hover:bg-black">
                  <FaInstagram size={24} />
                </div>
                <div className="hover:bg-black">
                  <FaPinterest size={24} />
                </div>
                <div className="hover:bg-black">
                  <FaYoutube size={24} />
                </div>
              </div>
            </div>
            {/* links and disclaimer */}
            <div className="flex">
              {/* links */}
              <div className="min-w-[40%]">
                <div className="max-w-[89%] m-auto flex flex-col gap-3 *:font-semibold">
                  <p>Products</p>
                  <p>Resources</p>
                  <p>Success Stories</p>
                  <p>About Us</p>
                  <p>Training</p>
                  <p>Support</p>
                </div>
              </div>
              {/* disclaimer */}
              <div>
                <div className="max-w-[95%] m-auto flex flex-col gap-3 *:font-extralight *:text-sm">
                  <p>
                    Product images are representative of site and mobile
                    applications as of publication date. Site and mobile
                    applications subject to change without notice.
                  </p>
                  <p>
                    No NAR membership dues are used to operate or support
                    SukhaDhama.com®.
                  </p>
                  <p>
                    ©1995-2024 NATIONAL ASSOCIATION OF REALTORS® and SivasisDas,
                    Inc. All rights reserved.
                  </p>
                  <p>
                    SukhaDhama.com® is the official site of the National
                    Association of REALTORS® and is operated by SivasisDas, Inc.
                  </p>
                </div>
              </div>
            </div>

            {/* terms and conditions */}
            <div className="flex lg:flex-col lg:w-80">
              <div className="max-w-[89%] m-auto lg:block hidden ml-3 mt-0 text-orange-600">
                <h3>
                  <SiHomebridge size={70} />
                </h3>
              </div>
              <div className="lg:max-w-[89%] m-auto flex lg:flex-col lg:m-auto gap-3 *:font-semibold ">
                <p>Terms & Conditions</p>
                <p>Privacy</p>

                <p>©{new Date().getFullYear()} SukhaDhama.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Advertise;
