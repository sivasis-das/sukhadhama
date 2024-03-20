import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
function FilterSearch() {
  const [showFilter, setShowFilter] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  return (
    <>
      <div className="sticky top-0">
        <div className="flex py-3 mt-2 items-center justify-center  bg-white">
          <div className="flex w-11/12 gap-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="xl:hidden  bg-white overflow-hidden rounded-3xl relative p-2 flex-1 border border-black"
            >
              <input
                type="text"
                placeholder="Address, School, City, Zip or Neighborhood"
                className=" w-full outline-none  pl-3  text-2xl font-light  placeholder:text-wrap"
              />
              <div className="bg-black cursor-pointer p-3 rounded-full absolute right-1 top-1 hover:bg-gray-600">
                <FaSearch className="text-white" />
              </div>
            </form>

            {/* Filter for xl */}
            <div className="hidden flex-1 xl:block ">
              <form className="flex flex-1 justify-between">
                <div className="flex  gap-3 items-center">
                  <div className=" bg-white overflow-hidden rounded-3xl relative p-2 flex-1 border border-black">
                    <input
                      type="text"
                      name="searchtext"
                      placeholder="Address, School, City, Zip or Neighborhood"
                      className=" w-full outline-none  pl-3  text-2xl font-light  placeholder:text-wrap"
                    />
                    <div className="bg-black cursor-pointer p-3 rounded-full absolute right-1 top-1 hover:bg-gray-600">
                      <FaSearch className="text-white" />
                    </div>
                  </div>

                  {/* type */}
                  <div onClick={() => setShowAmenities(false)}>
                    <select
                      name="type"
                      id="type"
                      className="border border-black rounded-lg p-3  *:font-semibold font-semibold *:rounded-md *:text-gray-600 text-gray-600 "
                    >
                      <option value="">Property type</option>
                      <option value="all">All</option>
                      <option value="sell">Sale</option>
                      <option value="rent">Rent</option>
                    </select>
                  </div>

                  {/* ameneties */}
                  <div
                    onClick={() => setShowAmenities(!showAmenities)}
                    className=" border border-black rounded-lg flex gap-3 items-center p-3 bg-white text-gray-500 relative"
                  >
                    <div className="font-semibold">Amnities</div>
                    {showAmenities ? (
                      <div>
                        <IoIosArrowUp size={20} />
                      </div>
                    ) : (
                      <div>
                        <IoIosArrowDown size={20} />
                      </div>
                    )}

                    {showAmenities ? (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute border border-black p-3 rounded-xl bg-white translate-y-3/4 -translate-x-3 w-64 "
                      >
                        <div className="flex flex-col gap-3">
                          {/* parking */}
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-600 mb-1">
                              Parking:
                            </h3>
                            <div className="flex gap-2">
                              <input
                                type="radio"
                                name="parking"
                                id="parkyes"
                                value={true}
                                className="peer/parkyes hidden"
                                required
                              />
                              <label
                                htmlFor="parkyes"
                                className="peer-checked/parkyes:bg-orange-600 peer-checked/parkyes:text-white flex-1  rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                              >
                                Yes
                              </label>
                              <input
                                type="radio"
                                name="parking"
                                id="parkno"
                                value={false}
                                className="peer/parkno hidden"
                                required
                              />
                              <label
                                htmlFor="parkno"
                                className="peer-checked/parkno:bg-orange-600 peer-checked/parkno:text-white flex-1 rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                              >
                                No
                              </label>
                            </div>
                          </div>

                          {/* furniture */}
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-600 mb-1">
                              Furnished:
                            </h3>
                            <div className="flex gap-2">
                              <input
                                type="radio"
                                name="furnished"
                                id="furnishedyes"
                                value={true}
                                className="peer/furnishedyes hidden"
                                required
                              />
                              <label
                                htmlFor="furnishedyes"
                                className="peer-checked/furnishedyes:bg-orange-600 peer-checked/furnishedyes:text-white flex-1  rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                              >
                                Yes
                              </label>
                              <input
                                type="radio"
                                name="furnished"
                                id="furnishedno"
                                value={false}
                                className="peer/furnishedno hidden"
                                required
                              />
                              <label
                                htmlFor="furnishedno"
                                className="peer-checked/furnishedno:bg-orange-600 peer-checked/furnishedno:text-white flex-1 rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* sort */}
                  <div onClick={() => setShowAmenities(false)}>
                    <select
                      name="sort"
                      id="sort"
                      className="border border-black rounded-lg p-3  *:font-semibold font-semibold *:rounded-md *:text-gray-600 text-gray-600 "
                    >
                      <option value="">Sort by</option>
                      <option value="latest">Latest</option>
                      <option value="oldest">Oldest</option>
                      <option value="highttolow">Price High to Low</option>
                      <option value="lowtohigh">Price Low to High </option>
                    </select>
                  </div>

                  {/* offer */}
                  <div>
                    <div className="flex gap-2">
                      <label
                        htmlFor="offer"
                        className="font-semibold text-gray-500"
                      >
                        Offers
                      </label>
                      <input
                        type="checkbox"
                        name="offer"
                        id="offer"
                        className="w-6 h-6 accent-orange-600"
                      />
                    </div>
                  </div>
                </div>

                {/* submit button */}
                <div className="w-64 ">
                  <div className="flex gap-2 py-1">
                    <button
                      type="submit"
                      className="flex-1 rounded-full border-2 border-black bg-white py-2 font-semibold hover:bg-orange-600 hover:border-orange-600 hover:text-white active:bg-orange-800
                      active:border-orange-800 active:text-white"
                    >
                      Search
                    </button>

                    <button
                      type="reset"
                      className="flex-1 rounded-full border-2 border-black bg-black text-white font-semibold py-2 hover:bg-gray-300 
                      hover:text-black
                      hover:border-gray-300 active:bg-white active:text-black"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* filter for mobile*/}
            <div
              onClick={() => setShowFilter(true)}
              className="xl:hidden border border-black rounded-lg flex gap-3 items-center p-3 bg-white text-gray-500"
            >
              <div className="font-semibold">Filters</div>
              <div>
                <IoIosArrowDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* filter card */}
      {showFilter ? (
        <div className=" fixed top-0 left-0 right-0 bottom-0 ">
          <div className=" ">
            <div
              className={`absolute top-0 bottom-0 left-0 right-0 bg-white  ${
                showFilter
                  ? "translate-x-0 transition  ease-linear duration-1000"
                  : "-translate-y-full ease-linear duration-1000 transition"
              }`}
            >
              <div className="border-b-2 py-2">
                <div
                  onClick={() => setShowFilter(false)}
                  className="flex items-center ml-4 mt-3 text-lg gap-3 w-fit"
                >
                  <div>
                    <RiArrowLeftSLine size={25} />
                  </div>
                  <div className="font-bold">Filters</div>
                </div>
              </div>

              {/* filter form starts */}
              <form action="" className=" relative h-full  ">
                {/* search Term */}
                <div className="p-4 *:mb-3 relative ">
                  <div className="flex flex-col">
                    <label
                      htmlFor="searchterm"
                      className="font-bold text-gray-500 mb-1"
                    >
                      Search term :
                    </label>
                    <input
                      id="searchterm"
                      name="searchterm"
                      type="text"
                      className=" rounded-md border border-black p-3"
                      placeholder="Type a keyword here..."
                    />
                  </div>
                  {/* type */}
                  <div className="flex flex-col">
                    <h3 className="font-bold text-gray-500 mb-1">Type :</h3>
                    <div>
                      <div className="flex gap-2 ">
                        <input
                          type="radio"
                          name="type"
                          id="all"
                          value="all"
                          className="peer/all hidden"
                          required
                        />
                        <label
                          htmlFor="all"
                          className="peer-checked/all:bg-orange-600 peer-checked/all:text-white flex-1  rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                        >
                          All
                        </label>
                        <input
                          type="radio"
                          name="type"
                          id="sell"
                          value="sell"
                          className="peer/sell hidden"
                          required
                        />
                        <label
                          htmlFor="sell"
                          className="peer-checked/sell:bg-orange-600 peer-checked/sell:text-white flex-1  rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                        >
                          Sale
                        </label>
                        <input
                          type="radio"
                          name="type"
                          id="rent"
                          value="rent"
                          className="peer/rent hidden "
                          required
                        />
                        <label
                          htmlFor="rent"
                          className="peer-checked/rent:bg-orange-600 peer-checked/rent:text-white flex-1 rounded-md bg-white shadow-md text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                        >
                          Rent
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* offers */}
                  <div>
                    <h3 className="font-semibold text-gray-500 mb-1">Offer:</h3>
                    <div className="flex gap-2 ">
                      <input
                        type="radio"
                        name="offer"
                        id="offeryes"
                        className="peer/offeryes hidden"
                        required
                      />
                      <label
                        htmlFor="offeryes"
                        className="peer-checked/offeryes:bg-orange-600 peer-checked/offeryes:text-white flex-1  rounded-md bg-white  text-center font-semibold p-2 border border-black  text-gray-600 hover:bg-gray-200"
                      >
                        Yes
                      </label>
                      <input
                        type="radio"
                        name="offer"
                        id="offerno"
                        className="peer/offerno hidden"
                        required
                      />
                      <label
                        htmlFor="offerno"
                        className="peer-checked/offerno:bg-orange-600 peer-checked/offerno:text-white flex-1 rounded-md bg-white  text-center font-semibold p-2 border border-black  text-gray-600 hover:bg-gray-200"
                      >
                        No
                      </label>
                    </div>
                  </div>

                  {/* parking */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-600 mb-1">Parking:</h3>
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="parking"
                        id="parkyes"
                        value={true}
                        className="peer/parkyes hidden"
                        required
                      />
                      <label
                        htmlFor="parkyes"
                        className="peer-checked/parkyes:bg-orange-600 peer-checked/parkyes:text-white flex-1  rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                      >
                        Yes
                      </label>
                      <input
                        type="radio"
                        name="parking"
                        id="parkno"
                        value={false}
                        className="peer/parkno hidden"
                        required
                      />
                      <label
                        htmlFor="parkno"
                        className="peer-checked/parkno:bg-orange-600 peer-checked/parkno:text-white flex-1 rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                      >
                        No
                      </label>
                    </div>
                  </div>

                  {/* furnished */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-600 mb-1">Furnished:</h3>
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="furnished"
                        id="furnishedyes"
                        value={true}
                        className="peer/furnishedyes hidden"
                        required
                      />
                      <label
                        htmlFor="furnishedyes"
                        className="peer-checked/furnishedyes:bg-orange-600 peer-checked/furnishedyes:text-white flex-1  rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                      >
                        Yes
                      </label>
                      <input
                        type="radio"
                        name="furnished"
                        id="furnishedno"
                        value={false}
                        className="peer/furnishedno hidden"
                        required
                      />
                      <label
                        htmlFor="furnishedno"
                        className="peer-checked/furnishedno:bg-orange-600 peer-checked/furnishedno:text-white flex-1 rounded-md bg-white  text-center  font-semibold p-2 border border-black text-gray-600 hover:bg-gray-200"
                      >
                        No
                      </label>
                    </div>
                  </div>

                  {/* sort */}
                  <div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="sort"
                        className="font-bold text-gray-500 mb-1"
                      >
                        Sort :
                      </label>
                      <select
                        name="sort"
                        id="sort"
                        className="border border-black rounded-md p-3  *:font-semibold font-semibold *:rounded-md *:text-gray-600 text-gray-600"
                      >
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="highttolow">Price High to Low</option>
                        <option value="lowtohigh">Price Low to High </option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* submit buttons */}
                <div className="fixed bottom-5  left-0 right-0  mx-4 bg-white">
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 rounded-full border-2 border-black bg-white py-2 font-semibold active:bg-black active:text-white"
                    >
                      Search
                    </button>

                    <button
                      type="reset"
                      className="flex-1 rounded-full border-2 border-black bg-black text-white font-semibold py-2  active:bg-white active:text-black"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default FilterSearch;
