import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import ListingItems from "../components/ListingItems";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaCalculator } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";
import { GiHouseKeys } from "react-icons/gi";
import { BiDirections } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { TbHomeDollar } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
import ArticleCards from "../components/ArticleCards";

function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  const [option, setOption] = useState("buy");
  // const [isActive, setIsActive] = useState()
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=4`);
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=4`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sell&limit=4`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);
  console.log(offerListings);
  return (
    <div>
      <HeroSection
        img={
          "https://images.unsplash.com/photo-1563825933-9a37fc277801?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      {/* listings results for offer, sale and rent */}

      <div className=" mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="lg:w-[95%] lg:m-auto">
            <div>
              <h2 className="text-2xl font-bold text-black ml-3">
                Recent Offers
              </h2>
              <Link
                to={"/search?offer=true"}
                className="text-orange-600 font-semibold ml-3"
              >
                Show more offer
              </Link>
            </div>
            <div className=" flex flex-col sm:flex-row overflow-x-auto">
              {offerListings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="lg:w-[95%] lg:m-auto">
            <div>
              <h2 className="text-2xl font-bold text-black ml-3">
                Recent places for rent
              </h2>
              <Link
                to={"/search?type=rent"}
                className="text-orange-600 font-semibold ml-3"
              >
                Show more rents
              </Link>
            </div>
            <div className=" flex flex-col sm:flex-row overflow-x-auto ">
              {rentListings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div className="lg:w-[95%] lg:m-auto">
            <div>
              <h2 className="text-2xl font-bold text-black ml-3">
                Recent places for sale
              </h2>
              <Link
                to={"/search?type=sell"}
                className="text-orange-600 font-semibold ml-3"
              >
                Show more sales
              </Link>
            </div>
            <div className=" flex flex-col sm:flex-row overflow-x-auto">
              {saleListings.map((listing) => (
                <ListingItems listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* discover how we can help */}
      <div className="px-3">
        <div className="lg:w-[95%] lg:m-auto">
          <div className="pb-4">
            <h2 className="text-2xl font-bold text-black ml-3 ">
              Discover how we can help
            </h2>
          </div>
          {/* switches */}
          <div className="flex gap-3 mb-5 pl-3">
            <div
              onClick={() => setOption("buy")}
              className={`px-4 py-2 rounded-full  border border-black hover:bg-gray-200 cursor-pointer ${
                option == "buy" ? "bg-black hover:bg-gray-800 text-white" : null
              }`}
            >
              <p className="text-xl">Buying</p>
            </div>
            <div
              onClick={() => setOption("rent")}
              className={`px-4 py-2 rounded-full  border border-black hover:bg-gray-200 cursor-pointer ${
                option == "rent" ? "bg-black hover:bg-gray-800 text-white" : null
              }`}
            >
              <p className="text-xl">Renting</p>
            </div>
            <div
              onClick={() => setOption("sell")}
              className={`px-4 py-2 rounded-full  border border-black hover:bg-gray-200 cursor-pointer ${
                option == "sell" ? "bg-black hover:bg-gray-800 text-white" : null
              }`}
            >
              <p className="text-xl">Selling</p>
            </div>
            
          </div>
          {/* cards main container */}
          {/* buying cards */}
          {option == "buy" ? (
            <div className="flex flex-col lg:flex-row lg:h-[250px] ">
              <div className="flex-1 ">
                <div className="p-2 h-full">
                  <Card
                    title={"Find out how much you can afford"}
                    description={"We'll help you estimate your budget range."}
                    link={"Try our affordability calculator"}
                    icon={
                      <BiSolidBadgeDollar
                        className="text-orange-600"
                        size={60}
                      />
                    }
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="p-2 h-full">
                  <Card
                    title={"Understand your monthly costs"}
                    description={
                      "Get an in-depth look at your monthly and closing costs"
                    }
                    link={"Try our mortgage calculator"}
                    icon={
                      <FaCalculator className="text-orange-600" size={60} />
                    }
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="p-2 h-full">
                  <Card
                    title={"Get help with your down payment"}
                    description={
                      "You may be able to buy a home with just 3.5% down"
                    }
                    link={"Find down payment help"}
                    icon={<IoMdCash className="text-orange-600" size={60} />}
                  />
                </div>
              </div>
            </div>
          ) : null}

          {/* renting cards */}
          {option == "rent" ? (
            <div className="flex flex-col lg:flex-row lg:h-[250px] ">
              <div className="flex-1 ">
                <div className="p-2 h-full">
                  <Card
                    title={"Rent with the option to buy"}
                    description={"Lease from Home Partners of America with an option to buy."}
                    link={"Check program availability"}
                    icon={
                      <GiHouseKeys
                        className="text-orange-600"
                        size={60}
                      />
                    }
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="p-2 h-full">
                  <Card
                    title={"Find out if it's better to rent or buy"}
                    description={
                      "GDetermine if buying or renting makes more financial sense"
                    }
                    link={"Try our rent or buy calculator"}
                    icon={
                      <BiDirections className="text-orange-600" size={60} />
                    }
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="p-2 h-full">
                  <Card
                    title={"Save time with a renter profile"}
                    description={
                      "Create a free renter profile to share with any landlord"
                    }
                    link={"Create a profile"}
                    icon={<FaUserCircle className="text-orange-600" size={60} />}
                  />
                </div>
              </div>
            </div>
          ) : null}

          {/* selling cards */}
          {option == "sell" ? (
            <div className="flex flex-col lg:flex-row lg:h-[250px]">
              <div className="flex-1 ">
                <div className="p-2 h-full">
                  <Card
                    title={"Buy now, sell later"}
                    description={"Get help from our partners to buy your new home before selling."}
                    link={"Search options from our partners"}
                    icon={
                      <AiOutlineStock
                        className="text-orange-600"
                        size={60}
                      />
                    }
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="p-2 h-full">
                  <Card
                    title={"Track your home value"}
                    description={
                      "See your home's RealEstimate valuation information over time."
                    }
                    link={"Get your RealEstimate"}
                    icon={
                      <TbHomeDollar className="text-orange-600" size={60} />
                    }
                  />
                </div>
              </div>
              <div className="flex-1 ">
                <div className="p-2 h-full">
                  <Card
                    title={"Get offer for your home"}
                    description={
                      "Visit Seller's Marketplace to learn how you can sell without listing."
                    }
                    link={"Explore my offers"}
                    icon={<MdOutlineLocalOffer className="text-orange-600" size={60} />}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Article section */}
      <div className="my-3 bg-zinc-200 pb-8">
          <div className="w-full h-[500px] bg-cover bg-center flex items-center justify-center relative " style={{backgroundImage:'url("https://images.unsplash.com/photo-1597682496035-b04f723202a4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
            <div className="bg-black w-full h-full absolute opacity-45"></div>
            <div className="md:w-11/12 md:m-auto lg:w-3/4 z-10" >
              <div className="w-11/12  m-auto ">
              <div className="text-white mb-5 sm:text-lg lg:text-2xl md:text-center">Unique Homes</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white leading-relaxed sm:leading-relaxed mb-6  w-3/4 md:mx-auto md:text-center">A Private Island in Ohio? Yup, and It's the Most Popular Home of the Week</div>
              <div className="text-white text-lg bg-black w-fit px-5 py-2 rounded-full border-2 border-white md:mx-auto cursor-pointer hover:bg-transparent hover:underline">
                Read Article
              </div>
              </div>

            </div>
          </div>

          {/* article cards section */}
          <div className="my-4 md:w-11/12 m-auto pb-5 mt-16">
            <div className="w-11/12 lg:w-[98%] xl:overflow-hidden m-auto overflow-x-scroll pb-5 flex gap-3">
              <ArticleCards image={"https://plus.unsplash.com/premium_photo-1661777496520-ac732b7ef554?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} tag={'Trends'} headline={"Do Electricity Vehicles Need a Garage? A Reality Check for Eco-nomic viability"}/>
              <ArticleCards image={"https://images.unsplash.com/photo-1618265851068-c7faacf87e41?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} tag={'Celebrity real estate'} headline={"Sarah Headle, the Former PinkBlue Star Who Ignited the True-Crime Music"}/>
              <ArticleCards image={"https://images.unsplash.com/photo-1449247613801-ab06418e2861?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} tag={'Trends'} headline={"Mortgage Rates Rise, but Home Sellers Gear Up to Sell Anyway around there home"}/>
              <ArticleCards image={"https://images.unsplash.com/photo-1565024143906-53ad374920e5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} tag={'Unique homes'} headline={"Hobbit Paradise: Billy Bagins house for Sale in Hobbiton"}/>
            </div>
          </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
