import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { MdOutlineChair } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

register();

function Listing() {
  // SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <main className="bg-slate-200 h- relative">
        {loading && <Loader />}
        {error && (
          <p className="text-red-600 text-center my-7 text-2xl">
            Something went wrong!
          </p>
        )}
        {listing && !loading && !error && (
          <>
            <div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                navigation
                slidesPerView={1}
                effect="fade"
                // autoplay={{ delay: 4000 }}
              >
                {listing.imageUrls.map((url, index) => (
                  <SwiperSlide key={url}>
                    <div
                      className="h-[550px]"
                      style={{
                        background: `url(${listing.imageUrls[index]}) center no-repeat`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="m-4 flex flex-col md:flex-row max-w-6xl lg:mx-auto p-4 rounded-lg shadow-lg bg-white lg:space-x-5 border-2 ">
              <div className=" w-full">
                <p className="text-2xl font-bold mb-3 text-blue-900">
                  {listing.name}- $
                  {listing.offer
                    ? listing.discountPrice
                        ?.toString()
                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : listing.regularPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  {listing.type == "rent" && "/month"}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <FaLocationDot className="text-green-700" />
                  <p className="font-bold text-lg">{listing.address}</p>
                </div>
                <div className="mb-3 flex gap-3 ">
                  <p className="p-1 bg-red-700 rounded-md px-6 w-fit text-white font-semibold">
                    For {listing.type}
                  </p>
                  {listing.offer && (
                    <p className="w-full max-w-[200px] bg-green-800 rounded-md p-1 text-white text-center font-semibold shadow-md">
                      $
                      {Number(listing.regularPrice) -
                        Number(listing.discountPrice)}{" "}
                      discount
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <p>
                    <span className="font-semibold">Description</span> -{" "}
                    {listing.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mb-3">
                  <div>
                    {listing.bedrooms && (
                      <div className="flex items-center space-x-1">
                        <FaBed />
                        <p className="font-bold">
                          {listing.bedrooms > 1
                            ? `${listing.bedrooms} Beds`
                            : "1 Bed"}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    {listing.bathrooms && (
                      <div className="flex items-center space-x-1">
                        <FaBath />
                        <p className="font-bold">
                          {Number(listing.bathrooms) > 1
                            ? `${Number(listing.bathrooms)} Baths`
                            : "1 Bath"}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    {listing.parking && (
                      <div className="flex items-center space-x-1">
                        <FaParking />
                        <p className="font-bold">Parking Spot</p>
                      </div>
                    )}
                  </div>
                  <div>
                    {listing.furnished && (
                      <div className="flex items-center space-x-1">
                        <MdOutlineChair />
                        <p className="font-bold">Furnished</p>
                      </div>
                    )}
                  </div>
                </div>
                {/* {listing.userRef !== auth.currentUser?.uid && (
                  <div>
                    {showContactLandlord ? (
                      <Contact userRef={listing.userRef} listing={listing} />
                    ) : (
                      <button
                        onClick={() => setShowContactLandlord(true)}
                        className="bg-blue-600 rounded text-white font-semibold w-full hover:bg-blue-800 active:bg-blue-950 shadow-md transition duration-200 ease-in h-11 uppercase"
                      >
                        Contact Landlord
                      </button>
                    )}
                  </div>
                )} */}
              </div>
              <div className="mt-6 md:mt-0 md:ml-4 w-full h-60 z-10 ">
                <MapContainer
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
        <p className="relative bottom-0 text-orange-600 font-semibold text-center ">
          Sukha<span className="text-black">Dhama</span> &#169; {new Date().getFullYear()}
        </p>
      </main>
    </>
  );
}

export default Listing;
