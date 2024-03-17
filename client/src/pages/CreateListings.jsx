import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import { app } from "../firebase";
import UploadImageCard from "../components/UploadImageCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateListings() {
  const { currentUser } = useSelector((state) => state.user);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    name: "",
    description: "",
    address: "",
    latitude: 0,
    longitude: 0,
    type: "sell",
    bedrooms: 1,
    bathrooms: 1,
    regularPrice: 50,
    discountPrice: 0,
    offer: false,
    parking: false,
    furnished: false,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {
    name,
    description,
    address,
    latitude,
    longitude,
    type,
    bedrooms,
    bathrooms,
    regularPrice,
    discountPrice,
    offer,
    parking,
    furnished,
  } = formData;

  // console.log("files", files);
  // console.log(formData);
  const handleImageSubmit = () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setImageUploadError(false);
      setUploading(true);
      const promises = [];

      for (let file of files) {
        promises.push(storeImage(file));
      }
      //one after another images are uploaded to the firebase, it may take some time to produce the code or for resolve, so in (Promise.all) we have the an array of all the promises-- **refer MDN-promise.all notes** once all the promises are resolved we input the urls or output into our state.--output is an array
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls), //we are adding an array of new images to the already existing imagesUrls array
          });
          setImageUploadError(false);
          setError(false);
          setUploading(false);
        })
        .catch((error) => {
          setError(false);
          setImageUploadError("Image Upload failed (2 MB max per image)");
          setUploading(false);
        });
    } else {
      setError(false);
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleImageDelete = (id) => {
    //check firebase if you can delete uploaded images from the storage.
    // console.log("id",id);
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, index) => index !== id),
    });
  };

  const handleChange = (e) => {
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
      setFormData({ ...formData, [e.target.name]: boolean });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  console.log("formdata is:", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload atleast one image");
      if (offer === true && +formData.regularPrice < +formData.discountPrice)
        return setError("Discount price must be lower than regular price");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userRef: currentUser._id }),
      });
      console.log("res received");
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        console.log("jimy");
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-fit  bg-gradient-to-b from-orange-600 to-orange-400 py-5">
      <div className="w-11/12 h-fit m-auto border-2  rounded-xl p-3  shadow-md bg-white   ">
        <h3 className="text-3xl font-bold text-orange-500 ">
          Create You Listing
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:flex-row gap-3"
        >
          {/* info upload */}
          <div className="*:my-2 flex-1">
            <div>
              <label htmlFor="name" className="font-semibold text-gray-600">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                maxLength={62}
                minLength={10}
                onChange={handleChange}
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
                name="description"
                placeholder="Description"
                required
                onChange={handleChange}
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
                name="address"
                placeholder="Address"
                required
                onChange={handleChange}
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
                  onChange={handleChange}
                  className="peer/sell hidden"
                  required
                />
                <label
                  htmlFor="sell"
                  className="peer-checked/sell:bg-orange-600 peer-checked/sell:text-white flex-1  rounded-md bg-white shadow-md text-center  font-semibold p-2 border-2 text-gray-600 hover:bg-gray-200"
                >
                  Sell
                </label>
                <input
                  type="radio"
                  name="type"
                  id="rent"
                  value="rent"
                  onChange={handleChange}
                  className="peer/rent hidden "
                  required
                />
                <label
                  htmlFor="rent"
                  className="peer-checked/rent:bg-orange-600 peer-checked/rent:text-white flex-1 rounded-md bg-white shadow-md text-center  font-semibold p-2 border-2 text-gray-600 hover:bg-gray-200"
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                    onChange={handleChange}
                    className="peer/parkyes hidden"
                    required
                  />
                  <label
                    htmlFor="parkyes"
                    className="peer-checked/parkyes:bg-orange-600 peer-checked/parkyes:text-white flex-1  rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600 hover:bg-gray-200"
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="parking"
                    id="parkno"
                    value={false}
                    onChange={handleChange}
                    className="peer/parkno hidden"
                    required
                  />
                  <label
                    htmlFor="parkno"
                    className="peer-checked/parkno:bg-orange-600 peer-checked/parkno:text-white flex-1 rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600 hover:bg-gray-200"
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
                    onChange={handleChange}
                    className="peer/furnishedyes hidden"
                    required
                  />
                  <label
                    htmlFor="furnishedyes"
                    className="peer-checked/furnishedyes:bg-orange-600 peer-checked/furnishedyes:text-white flex-1  rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600 hover:bg-gray-200"
                  >
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="furnished"
                    id="furnishedno"
                    value={false}
                    onChange={handleChange}
                    className="peer/furnishedno hidden"
                    required
                  />
                  <label
                    htmlFor="furnishedno"
                    className="peer-checked/furnishedno:bg-orange-600 peer-checked/furnishedno:text-white flex-1 rounded bg-white shadow-md text-center  font-semibold p-2 border text-gray-600 hover:bg-gray-200"
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
                  step={0.00000001}
                  onChange={handleChange}
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
                  step={0.00000001}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="peer/offeryes hidden"
                  required
                />
                <label
                  htmlFor="offeryes"
                  className="peer-checked/offeryes:bg-orange-600 peer-checked/offeryes:text-white flex-1  rounded-md bg-white shadow-md text-center font-semibold p-2 border-2 text-gray-600 hover:bg-gray-200"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  name="offer"
                  id="offerno"
                  value={false}
                  onChange={handleChange}
                  className="peer/offerno hidden"
                  required
                />
                <label
                  htmlFor="offerno"
                  className="peer-checked/offerno:bg-orange-600 peer-checked/offerno:text-white flex-1 rounded-md bg-white shadow-md text-center font-semibold p-2 border-2 text-gray-600 hover:bg-gray-200"
                >
                  No
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-600 ">
                  Regular Price {type == "rent" ? "($/Month)" : "($)"}:
                </h3>
                <div>
                  <input
                    type="number"
                    name="regularPrice"
                    id="regular price"
                    step={1}
                    defaultValue={0}
                    onChange={handleChange}
                    className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none"
                    required
                  />
                </div>
              </div>
              {offer && (
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-600 ">
                    Discounted Price {type == "rent" ? "($/Month)" : "($)"}:
                  </h3>
                  <div>
                    <input
                      type="number"
                      name="discountPrice"
                      id="discount price"
                      step={1}
                      defaultValue={0}
                      onChange={handleChange}
                      className="text-center shadow-md p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none"
                      required
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* photos upload */}
          <div className="flex-1 *:my-2">
            <div>
              <h3 className="font-semibold  text-gray-600">Images:</h3>
              <p className="text-gray-600">
                The first image will be the cover (max 6)
              </p>
              <div className="flex gap-4">
                <input
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  name="images"
                  id="images"
                  accept="image/*"
                  multiple
                  className="text-gray-600  text-center shadow-md bg-white p-2 w-full transition duration-300 ease-in-out focus:border-orange-600  border-2 rounded-lg outline-none file:text-orange-600 file:font-semibold file:border-0 file:bg-slate-100 file:rounded-full file:px-4 file:hover:bg-orange-600 file:hover:text-white file:hover:duration-500 "
                  required
                />
                <button
                  type="button"
                  disabled={uploading}
                  onClick={handleImageSubmit}
                  className="px-3 rounded-lg border-2 border-orange-600 text-orange-600 font-semibold hover:text-white hover:bg-orange-600 duration-300 ease-in-out shadow-md"
                >
                  {uploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>

            <p className="text-red-600 text-sm font-semibold">
              {imageUploadError && imageUploadError}
            </p>

            <div>
              {formData.imageUrls &&
                formData.imageUrls.map((url, index) => (
                  <UploadImageCard
                    key={url}
                    data={url}
                    id={index}
                    handleImageDelete={handleImageDelete}
                  />
                ))}
            </div>

            <button
              disabled={loading || uploading}
              type="submit"
              className="bg-orange-600 rounded-lg text-white font-semibold w-full hover:bg-orange-800 active:bg-orange-950 shadow-md transition duration-200 ease-in h-11  flex items-center justify-center gap-3 mt-6"
            >
              {loading ? "Creating..." : "Create Listing"}
            </button>
            {error && (
              <p className="text-sm text-red-600 font-semibold">{error}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateListings;
