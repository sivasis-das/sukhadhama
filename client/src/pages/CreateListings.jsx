import React from "react";

function CreateListings() {
  return (
    <div className="w-full h-fit  bg-gradient-to-b from-orange-600 to-orange-400 py-5">
      <div className="w-11/12 h-fit m-auto border-2  rounded-xl p-3  shadow-md bg-white   ">
        <h3 className="text-3xl font-bold text-orange-500 ">
          Create You Listing
        </h3>
        <form action="" className="flex flex-col lg:flex-row gap-3">
          {/* info upload */}
          <div className="*:my-2 flex-1">
            <div>
              <label htmlFor="name" className="font-semibold text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                required
                maxLength={62}
                minLength={10}
                className="p-2 w-full rounded-md outline-none border-2 focus:border-orange-600
            transition duration-500 ease-in-out text-lg shadow-md"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="font-semibold text-gray-600"
              >
                Description:
              </label>
              <input
                type="text"
                id="description"
                placeholder="Description"
                required
                className="p-2 w-full rounded-md outline-none border-2 focus:border-orange-600
            transition duration-500 ease-in-out text-lg shadow-md"
              />
            </div>

            <div>
              <label htmlFor="address" className="font-semibold text-gray-600">
                Address:
              </label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                required
                className="p-2 w-full rounded-md outline-none border-2 focus:border-orange-600
            transition duration-500 ease-in-out text-lg shadow-md"
              />
            </div>

            {/* type of listing */}
            <div>
              <h3 className="font-semibold  text-gray-600 ">Sell / Rent:</h3>
              <div className="flex gap-2 ">
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
                  className="peer-checked/sell:bg-orange-600 peer-checked/sell:text-white flex-1  rounded-md bg-white shadow-md text-center  font-semibold p-2 border-2 text-gray-600"
                >
                  Sell
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
                  className="peer-checked/rent:bg-orange-600 peer-checked/rent:text-white flex-1 rounded-md bg-white shadow-md text-center  font-semibold p-2 border-2 text-gray-600"
                >
                  Rent
                </label>
              </div>
            </div>

            {/* beds */}
            <div className="flex gap-3 ">
              <div className="w-20">
                <h3 className="font-semibold text-gray-600 ">Beds:</h3>
                <input
                  type="number"
                  name="bedrooms"
                  id="bedrooms"
                  step={1}
                  min={1}
                  max={10}
                  className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out focus:border-orange-600 outline-none border-2 rounded-lg"
                  required
                />
              </div>

              {/* bath */}
              <div className="w-20">
                <h3 className="font-semibold text-gray-600 ">Baths:</h3>
                <input
                  type="number"
                  name="bathrooms"
                  id="bathrooms"
                  step={1}
                  min={1}
                  max={10}
                  className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out outline-none focus:border-orange-600  border-2 rounded-lg "
                  required
                />
              </div>

              {/* Parking */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-600 ">Parking:</h3>
                <div className="flex ">
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
                    className="peer-checked/parkyes:bg-orange-600 peer-checked/parkyes:text-white flex-1  rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600"
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
                    className="peer-checked/parkno:bg-orange-600 peer-checked/parkno:text-white flex-1 rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600"
                  >
                    No
                  </label>
                </div>
              </div>

              {/* furnished */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-600 ">Furnished:</h3>
                <div className="flex">
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
                    className="peer-checked/furnishedyes:bg-orange-600 peer-checked/furnishedyes:text-white flex-1  rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600"
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
                    className="peer-checked/furnishedno:bg-orange-600 peer-checked/furnishedno:text-white flex-1 rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex-1">
                <h3 className="font-semibold  text-gray-600">Latitude:</h3>
                <input
                  type="number"
                  name="latitude"
                  id="latitude"
                  className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold  text-gray-600">Longitude:</h3>
                <input
                  type="number"
                  name="longitude"
                  id="longitude"
                  className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-600">Offer:</h3>
              <div className="flex gap-2 ">
                <input
                  type="radio"
                  name="offer"
                  id="offeryes"
                  value={true}
                  className="peer/offeryes hidden"
                  required
                />
                <label
                  htmlFor="offeryes"
                  className="peer-checked/offeryes:bg-orange-600 peer-checked/offeryes:text-white flex-1  rounded-md bg-white shadow-md text-center font-semibold p-2 border-2 text-gray-600"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  name="offer"
                  id="offerno"
                  value={false}
                  className="peer/offerno hidden"
                  required
                />
                <label
                  htmlFor="offerno"
                  className="peer-checked/offerno:bg-orange-600 peer-checked/offerno:text-white flex-1 rounded-md bg-white shadow-md text-center font-semibold p-2 border-2 text-gray-600"
                >
                  No
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-600 ">
                  Regular Price ($/Month):
                </h3>
                <div>
                  <input
                    type="number"
                    name="regularPrice"
                    id="regular price"
                    step={1}
                    min={1}
                    className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-600 ">
                  Discounted Price ($/Month):
                </h3>
                <div>
                  <input
                    type="number"
                    name="discountedPrice"
                    id="discounted price"
                    step={1}
                    min={1}
                    className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none"
                    required
                  />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          {/* photos upload */}
          <div className="flex-1">
            <h3 className="font-semibold  text-gray-600">Images:</h3>
            <p className="text-gray-600">
              The first image will be the cover (max 6)
            </p>
            <div className="flex gap-4">
              <input
                type="file"
                name="images"
                id="images"
                accept="image/*"
                multiple
                className="text-gray-600  text-center shadow-md bg-white p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none file:text-orange-600 file:font-semibold file:border-0 file:bg-slate-100 file:rounded-full file:px-4 file:hover:bg-orange-600 file:hover:text-white file:hover:duration-500 "
                required
              />
              <button className="px-3 rounded-lg border-2 border-orange-600 text-orange-600 font-semibold hover:text-white hover:bg-orange-600 duration-300 ease-in-out shadow-md">Upload</button>
            </div>

            <button
              type="submit"
              className="bg-orange-600 rounded-lg text-white font-semibold w-full hover:bg-orange-800 active:bg-orange-950 shadow-md transition duration-200 ease-in h-11  flex items-center justify-center gap-3 mt-6"
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateListings;
