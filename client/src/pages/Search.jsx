import React, { useState } from "react";
import FilterSearch from "../components/FilterSearch";

function Search() {
  const [searchData, setSearchData] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });

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
      const sort = e.target.value.split('_')[0] || 'created_at';

      const order = e.target.value.split('_')[1] || 'desc';

      setSearchData({...searchData, sort, order})
    } else {
      setSearchData({ ...searchData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("jimy");
  }

  console.log("searchData is:", searchData);
  return (
    <div>
      <FilterSearch searchData={searchData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <div className="bg-yellow-100 h-[2000px]">jimy</div>
    </div>
  );
}

export default Search;
