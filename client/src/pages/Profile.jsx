import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { app } from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [showEdit, setShowEdit] = useState(false);
  const [file, setFile] = useState(undefined);
  const [fileProgressPerc, setFileProgressPerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  const fileRef = useRef(null);
  const { username, email, avatar, _id } = currentUser;

  // console.log(file);
  // console.log(URL.createObjectURL(file));
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  //follow the upload example from the firebase storage full example
  const handleFileUpload = (file) => {
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
        setFileProgressPerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };
  // console.log(formData);

  

  return (
    <div className="absolute  top-0 bottom-0 left-0 right-0  -z-10 flex items-center justify-center">
      {/* main-card */}
      <div className="w-11/12  h-5/6 mt-9 rounded flex flex-col xl:flex-row overflow-y-scroll scrollbar">
        {/* profile section */}
        <div className="xl:w-3/12 xl:sticky xl:top-0 px-2">
          {/* photo + buttons */}
          <div className="flex gap-3 xl:flex-col ">
            <div className="relative">
              <img
                src={formData.avatar || avatar}
                onClick={() => fileRef.current.click()}
                alt="profile photo"
                className="rounded-full size-28 xl:size-48 object-cover"
              />

              {showEdit ? (
                <>
                  <div className="size-28 xl:size-48 bg-black bg-opacity-60 rounded-full absolute  top-0 "></div>
                  <div
                    onClick={() => fileRef.current.click()}
                    className="size-10 rounded-full p-2 bg-black bg-opacity-60 absolute  -translate-y-full cursor-pointer "
                  >
                    <MdOutlineAddAPhoto className="text-white w-full h-full " />
                  </div>
                </>
              ) : null}
            </div>

            {showEdit ? null : (
              <div className=" self-end xl:self-start space-y-2 ">
                <h3 className="font-bold text-xl">{currentUser.username}</h3>
                <button
                  onClick={() => setShowEdit(!showEdit)}
                  className="bg-slate-100  border border-gray-300  rounded-md p-1 text-sm mr-2"
                >
                  Edit Profile
                </button>
                <button className="xl:hidden bg-black     rounded-md p-1 text-white text-sm px-2 mr-2">
                  Sign Out
                </button>
                <button className="xl:hidden bg-red-500    rounded-md p-1 text-sm text-white px-2">
                  Delete Account
                </button>
              </div>
            )}
          </div>
          {showEdit ? (
            fileUploadError ? (
              <span className=" text-red-700 font-semibold text-sm ">
                Error while Uploading Image !
              </span>
            ) : fileProgressPerc > 0 && fileProgressPerc < 100 ? (
              <span className=" text-slate-700 font-semibold text-sm ">
                {`Uploading ${fileProgressPerc}%`}
              </span>
            ) : fileProgressPerc === 100 ? (
              <span className=" text-green-700 font-semibold text-sm ">
                Image Successfully Uploaded
              </span>
            ) : null
          ) : null}

          {showEdit && (
            <form
              action=""
              
              className="mt-3 flex flex-col gap-3"
            >
              <input
                type="file"
                src=""
                alt=""
                ref={fileRef}
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
                accept="image/*"
              />
              <div className="flex flex-col">
                <label htmlFor="usename" className="text-sm font-semibold">
                  Username
                </label>
                <input
                  className="p-1 outline-none focus:ring-1 focus:ring-orange-400 border transition ease-in-out duration-300 rounded-md"
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  className="p-1 outline-none focus:ring-1 focus:ring-orange-400 border transition ease-in-out duration-300 rounded-md"
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold">
                  Password
                </label>
                <input
                  className="p-1 outline-none focus:ring-1 focus:ring-orange-400 border transition ease-in-out duration-300 rounded-md"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div className="space-x-2">
                <button className="bg-orange-600 rounded-md text-white px-3">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowEdit(!showEdit)}
                  className="bg-slate-100 border border-gray-300 px-3 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
          <div className="absolute bottom-2 flex">
            <button className="hidden xl:block bg-black     rounded-md p-1 text-white text-sm px-2 mr-2">
              Sign Out
            </button>
            <button className="hidden xl:block bg-red-500    rounded-md p-1 text-sm text-white px-2">
              Delete Account
            </button>
          </div>
        </div>
        <div className="bg-violet-500 w-full h-[2000px] ">jimy</div>
      </div>
    </div>
  );
}

export default Profile;
