import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function SearchBar({style}) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${style}  bg-white overflow-hidden rounded-3xl relative p-2`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Address, School, City, Zip or Neighborhood"
        className=" w-full outline-none  pl-3  text-2xl font-light  placeholder:text-wrap"
      />
      <div
        onClick={handleSubmit}
        className="bg-gray-400 cursor-pointer p-3 rounded-full absolute right-1 top-1 hover:bg-gray-600"
      >
        <FaSearch className="text-white" />
      </div>
    </form>
  );
}

export default SearchBar;
