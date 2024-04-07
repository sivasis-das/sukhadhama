import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import ListingItems from "../components/ListingItems";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

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
          <div className="flex gap-3 mb-5">
            <div className="px-4 py-2 rounded-full bg-black">
              <p className="text-xl text-white">Buying</p>
            </div>
            <div className="px-4 py-2 rounded-full">
              <p className="text-xl ">Renting</p>
            </div>
            <div className="px-4 py-2 rounded-full">
              <p className="text-xl ">Selling</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex-1 ">
              <div className="p-2 h-full">
                <Card title={"Find out how much you can afford"} description={"We'll help you estimate your budget range."} link={"Try our affordability calculator"}/>
              </div>
            </div>
            <div className="flex-1">
              <div className="p-2 h-full">
                <Card title={"Understand your monthly costs"} description={"Get an in-depth look at your monthly and closing costs"} link={"Try our mortgage calculator"}/>
              </div>
            </div>
            <div className="flex-1">
              <div className="p-2 h-full">
                <Card title={"Get help with your down payment"} description={"You may be able to buy a home with just 3.5% down"} link={"Find down payment help"}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Home;
