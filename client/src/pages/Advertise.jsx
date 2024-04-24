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
import pic from "../assets/pic1.png";
import handshake from "../assets/handshake.png";
import ImageSlider from "../components/ImageSlider";
import { Helmet } from "react-helmet";
// import { register } from "swiper/element/bundle";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   EffectFade,
// } from "swiper/modules";
// import "swiper/css/bundle";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

function Advertise() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  // const currentRoute = window.location.pathname;
  // console.log(currentRoute);
  const imageUrls = [
    "https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/testimonials/anthony-djon.jpg",
    "https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/testimonials/jenny-wemert.jpg",
    "https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/testimonials/stephen-votino.jpg",
    "https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/testimonials/mike-wemert.jpg",
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>List your Property</title>
        <meta
          name="description"
          content="Description for Tutorial for React Helmet"
        />
      </Helmet>
      <div>
        <div className="w-full   md:w-11/12 m-auto min-h-[600px] ">
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
        <div className="py-16  md:w-11/12 m-auto">
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

          <div className="w-full flex flex-col mt-12 md:flex-row gap-11 md:gap-0">
            {/* left section */}
            <div className="">
              <div className="w-11/12 m-auto">
                <div className="w-3/4 m-auto ">
                  <img
                    className="-translate-y-4"
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-get-leads-bg.jpg"
                    alt=""
                  />
                </div>
                <div className="min-w-92  m-auto mt-5 text-center flex flex-col items-center gap-5">
                  <p className="text-3xl lg:text-4xl font-extrabold max-w-80 min-w-72">
                    Get a predictable
                    <br /> volume of leads
                  </p>
                  <p className="text-2xl font-light max-w-96 min-w-80 h-32">
                    Enjoy a steady stream of serious buyer and seller
                    connections with a single upfront cost.
                  </p>
                  <div className="bg-orange-600 rounded-full px-14 py-2 text-2xl font-semibold text-white max-w-80 min-w-72 m-auto ">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
            {/* right section */}
            <div className="">
              <div className="w-11/12 m-auto">
                <div className="w-3/4 m-auto">
                  <img
                    className="-translate-y-4"
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-pay-when-close-bg.jpg"
                    alt=""
                  />
                </div>
                <div className="min-w-92  m-auto mt-5 text-center flex flex-col items-center gap-5">
                  <p className="text-3xl lg:text-4xl font-extrabold max-w-80 min-w-72">
                    Pay only when you close
                  </p>
                  <p className="text-2xl font-light max-w-80 min-w-80 h-32">
                    Connect live with pre-screened buyers and sellers at no
                    upfront cost.
                  </p>
                  <div className="bg-orange-600 rounded-full px-14 py-2 text-2xl font-semibold text-white max-w-80 min-w-72 m-auto ">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="py-16  w-11/12 m-auto">
          <div className="md:w-10/12 m-auto flex gap-5 items-center justify-between flex-col-reverse md:flex-row">
            <div className="w-11/12 md:w-3/5 flex flex-col gap-6 text-center md:text-left">
              <h3 className="text-orange-600 text-2xl lg:text-3xl font-bold">
                Real Estate Marketing
              </h3>
              <h3 className="text-5xl lg:text-6xl font-extrabold ">
                Build your brand
              </h3>
              <h3 className="text-2xl font-thin">
                Real estate marketing solutions to get more eyes on you across
                the web and by millions of visitors.
              </h3>
              <div className="bg-orange-600 rounded-full px-12 py-2 text-2xl font-semibold text-white max-w-80 min-w-72 text-center m-auto md:m-0">
                <p>Learn More</p>
              </div>
            </div>
            <div>
              <img className="inline-block" src={pic} alt="" />
            </div>
          </div>
        </div>

        {/* forth section */}
        <div className="py-16  w-11/12 m-auto">
          <div className="md:w-10/12 m-auto flex gap-5 items-center justify-between flex-col-reverse md:flex-row-reverse">
            <div className="w-11/12 md:w-3/5 flex flex-col gap-6 text-center md:text-right">
              <h3 className="text-orange-600 text-2xl lg:text-3xl font-bold">
                Lender Solutions
              </h3>
              <h3 className="text-5xl lg:text-6xl font-extrabold ">
                Connect with homebuyers
              </h3>
              <h3 className="text-2xl font-thin">
                Grow your mortgage business by providing connections to
                motivated homebuyers.
              </h3>
              <div className="bg-orange-600 rounded-full px-12 py-2 text-2xl font-semibold text-white max-w-80 min-w-72 text-center m-auto md:mr-0">
                <p>Learn More</p>
              </div>
            </div>
            <div>
              <img className="inline-block" src={handshake} alt="" />
            </div>
          </div>
        </div>

        {/* fifth section */}
        {/* image slider */}
        <div className="py-16 ">
          <ImageSlider imageUrls={imageUrls} />
        </div>

        {/* sixth section */}
        <div className="py-16 w-11/12 m-auto">
          <div className=" m-auto flex flex-col gap-6">
            <div className="text-3xl lg:text-4xl xl:text-5xl lg:text-balance font-extrabold text-center max-w-92">
              More lead and marketing solutions for:
            </div>
            {/* card container */}
            <div className=" w-[400px] md:w-[98%] lg:w-3/4 xl:3/5 m-auto flex flex-col gap-7 md:gap-0 md:flex-row ">
              {/* card  1*/}
              <div className="p-4 md:p-0  group hover:bg-orange-600 transition ease-in-out duration-500 md:w-1/3 flex gap-3 md:flex-col relative md:pb-28 ">
                <div className=" md:group-hover:opacity-0 w-[25%] md:w-3/5 m-auto transition duration-300 ease-in-out">
                  <img
                    className=""
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-builders.png"
                    alt="pictures"
                  />
                </div>
                <div className="md:text-center max-w-64 flex flex-col md:flex-col-reverse md:items-center md:m-auto">
                  <h3 className="font-extrabold text-xl group-hover:text-white  lg:text-3xl  md:absolute md:left-0 md:right-0 bottom-8 md: w-full">
                    Builders
                  </h3>
                  <h3 className="text-lg  font-extralight group-hover:text-white md:invisible md:group-hover:visible md:w-11/12  md:absolute xl:top-20">
                    Get your homes in front of millions of buyers and control
                    the sales process
                  </h3>
                </div>
              </div>
              {/* card  2*/}
              <div className="p-4 md:p-0 group hover:bg-orange-600 transition ease-in-out duration-500 md:w-1/3 flex gap-3 md:flex-col relative md:pb-28">
                <div className=" md:group-hover:opacity-0 w-[25%] md:w-3/5 m-auto transition duration-300 ease-in-out">
                  <img
                    className=""
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-property-managers.png"
                    alt="pictures"
                  />
                </div>
                <div className="md:text-center max-w-64 flex flex-col md:flex-col-reverse md:items-center md:m-auto">
                  <h3 className="font-extrabold text-xl group-hover:text-white lg:text-3xl md:absolute md:left-0 md:right-0 bottom-8 w-full ">
                    Property Managers
                  </h3>
                  <h3 className="text-lg  font-extralight group-hover:text-white md:invisible md:group-hover:visible  md:w-11/12  md:absolute xl:top-20">
                    Simplify how you find, screen, collect rent, and communicate
                    with your tenants
                  </h3>
                </div>
              </div>

              {/* card  3*/}
              <div className="p-4 md:p-0 group hover:bg-orange-600 transition ease-in-out duration-500 md:w-1/3 flex gap-3 md:gap-0 md:flex-col relative md:pb-28 ">
                <div className=" md:group-hover:opacity-0 w-[25%] md:w-3/5 m-auto transition duration-300 ease-in-out">
                  <img
                    src="https://www.realtor.com/marketing/wp-content/themes/rdc-marketing/images/home-brand-advertisers.png"
                    alt="pictures"
                  />
                </div>
                <div className="md:text-center max-w-64 flex flex-col md:flex-col-reverse md:items-center md:m-auto ">
                  <h3 className="font-extrabold text-xl group-hover:text-white  lg:text-3xl  md:absolute md:left-0 md:right-0 bottom-8 w-full">
                    Brand Advertisers
                  </h3>
                  <h3 className="text-lg  font-extralight group-hover:text-white md:invisible md:group-hover:visible md:w-11/12  md:absolute xl:top-20">
                    Reach serious homebuyers and sellers at key life stages
                  </h3>
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
