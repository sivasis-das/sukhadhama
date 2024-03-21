import React, { useEffect, useState } from "react";
import FilterSearch from "../components/FilterSearch";
import { useNavigate } from "react-router-dom";
import ListingItems from "../components/ListingItems";
import Loader from "../components/Loader";
function Search() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showListingError, setShowListingError] = useState(false);
  const [listings, setListings] = useState([]);
  const [searchData, setSearchData] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "createdAt",
    order: "desc",
  });

  const { searchTerm, type, parking, furnished, offer, sort, order } =
    searchData;

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSearchData({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true" ? true : false,
        furnished: furnishedFromUrl === "true" ? true : false,
        offer: offerFromUrl === "true" ? true : false,
        sort: sortFromUrl || "createdAt",
        order: orderFromUrl || "desc",
      });
    }

    const fetchListings = async () => {
      setShowListingError(false);
      setLoading(true);
      try {
        const searchQuery = urlParams.toString();
        const res = await fetch(`/api/listing/get?${searchQuery}`);
        const data = await res.json();
        if (data.success === false) {
          setLoading(false);
          setShowListingError(true);
          return;
        }
        setListings(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setShowListingError(true);
      }
    };
    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    console.log("element", e.target);
    console.log("checked", e.target.checked);
    console.log("vlaue", e.target.calue);
    let boolean;
    if (
      e.target.name == "parking" ||
      e.target.name == "furnished" ||
      e.target.name == "offer"
    ) {
      if (e.target.value === "true") {
        boolean = true;
      } else if (e.target.value === "false") {
        boolean = false;
      }
      setSearchData({ ...searchData, [e.target.name]: boolean });
    } else if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "createdAt";

      const order = e.target.value.split("_")[1] || "desc";

      setSearchData({ ...searchData, sort, order });
    } else {
      setSearchData({ ...searchData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", searchTerm);
    urlParams.set("type", type);
    urlParams.set("parking", parking);
    urlParams.set("furnished", furnished);
    urlParams.set("offer", offer);
    urlParams.set("sort", sort);
    urlParams.set("order", order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  console.log("searchData is:", searchData);
  console.log("listing data :",listings);

  if (loading) {
    return <Loader/>
  }

  return (
    <div>
      <FilterSearch
        searchData={searchData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="  pt-10">
        <div className="md:w-[98%] m-auto  ">
          {!loading && listings.length === 0 && (
            <p className="text-3xl text-gray-500 text-center">No listing found!</p>
          )} 
          {
            showListingError?<p className="text-3xl  text-center text-red-600 ">Something went wrong!</p>:null
          }
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 mt-6 mb-6">
              {listings &&
                listings.length > 0 &&
                listings.map((listing) => (
                  <ListingItems
                    key={listing._id}
                    listing={listing}
                    
                  />
                ))}
            </ul>
        </div>
      </div>
      <footer className="text-center">
        sukhadhama
      </footer>
    </div>
  );
}

export default Search;
