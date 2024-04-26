import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { MdOutlineChair } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ImageSliderForListing from "../components/ImageSliderForListing";

function Listing() {
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showContactLandlord, setShowContactLandlord] = useState(false);

  useEffect(() => {
    async function fetchListing() {
      setError(false);
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${id}`);
        const data = await res.json();
        if (data.success == false) {
          setLoading(false);
          setError(true);
          return;
        }
        setListing(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchListing();
  }, []);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{listing?.name}</title>
        <meta
          name="description"
          content="Description for Tutorial for React Helmet"
        />
      </Helmet>
      <main className=" relative md:w-[95%] lg:w-11/12 md:mx-auto pt-3">
        {loading && <Loader />}
        {error && (
          <p className="text-red-600 text-center my-7 text-2xl">
            Something went wrong!
          </p>
        )}
        {listing && !loading && !error && (
          <>
            <ImageSliderForListing images={listing.imageUrls} />

            <div className=" flex flex-col md:flex-row  p-4    lg:space-x-5  ">
              <div className=" w-full">
                <p className="text-2xl font-bold mb-3 text-black">
                  {listing.name}-{" "}
                  <span className="text-3xl">
                    $
                    {listing.offer
                      ? listing.discountPrice
                          ?.toString()
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      : listing.regularPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    {listing.type == "rent" && "/month"}
                  </span>
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <FaLocationDot className="text-orange-600" />
                  <p className="font-light text-xl ">{listing.address}</p>
                </div>
                <div className="mb-3 flex gap-3 ">
                  <p className="p-1 bg-orange-600 rounded-md px-6 w-fit text-white font-semibold">
                    For {listing.type}
                  </p>
                  {listing.offer && (
                    <p className="w-full max-w-[200px] bg-orange-600 rounded-md p-1 text-white text-center font-semibold shadow-md">
                      $
                      {Number(listing.regularPrice) -
                        Number(listing.discountPrice)}{" "}
                      discount
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-3">
                  <div>
                    {listing.bedrooms && (
                      <div className="flex items-center space-x-1 ">
                        <FaBed />
                        <p className="font-bold">
                          {listing.bedrooms}
                          {listing.bedrooms > 1 ? (
                            <span className="font-normal"> beds</span>
                          ) : (
                            <span> bed</span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    {listing.bathrooms && (
                      <div className="flex items-center space-x-1 ">
                        <FaBath />
                        <p className="font-bold">
                          {listing.bathrooms}
                          {listing.bathrooms > 1 ? (
                            <span className="font-normal"> baths</span>
                          ) : (
                            <span> bath</span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    {listing.parking && (
                      <div className="flex items-center space-x-1 ">
                        <FaParking />
                        <p className="font-normal ">parking spot</p>
                      </div>
                    )}
                  </div>
                  <div>
                    {listing.furnished && (
                      <div className="flex items-center space-x-1 ">
                        <MdOutlineChair />
                        <p className="font-normal">furnished</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xl">
                    <span className="font-bold ">Property details</span> :-{" "}
                    {listing.description}
                  </p>
                </div>

                {currentUser ? (
                  listing.userRef !== currentUser?._id && (
                    <div>
                      {showContactLandlord ? (
                        <Contact userRef={listing.userRef} listing={listing} />
                      ) : (
                        <button
                          onClick={() => setShowContactLandlord(true)}
                          className="bg-orange-600 rounded text-white font-semibold w-full hover:bg-orange-800 active:bg-orange-950 shadow-md transition duration-200 ease-in h-11 text-xl"
                        >
                          Contact landlord
                        </button>
                      )}
                    </div>
                  )
                ) : (
                  <Link to="/sign-in">
                    <button className="bg-orange-600 rounded text-white font-semibold w-full hover:bg-orange-800 active:bg-orange-950 shadow-md transition duration-200 ease-in h-11 text-xl">
                      Register to contact
                    </button>
                  </Link>
                )}
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 w-full h-60 z-10 rounded-xl">
                <MapContainer
                  className="rounded-xl"
                  center={[Number(listing.latitude), Number(listing.longitude)]}
                  zoom={13}
                  scrollWheelZoom={true}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[
                      Number(listing.latitude),
                      Number(listing.longitude),
                    ]}
                  >
                    <Popup>
                      {listing.address}
                      <br />{" "}
                      <span className="text-blue-700">
                        {listing.latitude}, {listing.longitude}
                      </span>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Listing;
