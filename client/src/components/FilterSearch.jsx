import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
function FilterSearch() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className="sticky top-0">
        <div className="flex py-3  items-center justify-center  bg-slate-100 xl:bg-white">
          <div className="flex w-11/12 gap-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              onClick={(e) => e.stopPropagation()}
              className="  bg-white overflow-hidden rounded-3xl relative p-2 flex-1 border border-black"
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
            <div
              onClick={() => setShowFilter(true)}
              className="border border-black rounded-lg flex gap-3 items-center p-3 bg-white text-gray-500"
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

                  {/* facilities */}
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
