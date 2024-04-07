import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import ListingItems from "../components/ListingItems";
import Footer from "../components/Footer";

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

      <div className="w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {
          offerListings && offerListings.length>0 && (
            <div className="">
              <div>
                <h2 className="text-2xl font-semibold text-gray-500 ml-3">Recent Offers</h2>
                <Link to={'/search?offer=true'} className="text-orange-600 font-semibold ml-3">Show more offer</Link>
              </div>
              <div className=" flex flex-col sm:flex-row overflow-x-auto">
                {
                  offerListings.map((listing)=>(
                    <ListingItems listing={listing} key={listing._id}/>
                  ))
                }
              </div>
            </div>
          )
        }
        {
          rentListings && rentListings.length>0 && (
            <div className="">
              <div>
                <h2 className="text-2xl font-semibold text-gray-500 ml-3">Recent places for rent</h2>
                <Link to={'/search?type=rent'} className="text-orange-600 font-semibold ml-3">Show more rents</Link>
              </div>
              <div className=" flex flex-col sm:flex-row overflow-x-auto ">
                {
                  rentListings.map((listing)=>(
                    <ListingItems listing={listing} key={listing._id}/>
                  ))
                }
              </div>
            </div>
          )
        }

{
          saleListings && saleListings.length>0 && (
            <div className="">
              <div>
                <h2 className="text-2xl font-semibold text-gray-500 ml-3">Recent places for sale</h2>
                <Link to={'/search?type=sell'} className="text-orange-600 font-semibold ml-3">Show more sales</Link>
              </div>
              <div className=" flex flex-col sm:flex-row overflow-x-auto">
                {
                  saleListings.map((listing)=>(
                    <ListingItems listing={listing} key={listing._id}/>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>

      {/* footer */}
      <Footer/>
    </div>
  );
}

export default Home;
