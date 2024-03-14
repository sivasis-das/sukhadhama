import React, { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [showEdit, setShowEdit] = useState(false);

  const { username, email } = currentUser;

  return (
    <div className="absolute  top-0 bottom-0 left-0 right-0  -z-10 flex items-center justify-center">
      {/* main-card */}
      <div className="w-11/12  h-5/6 mt-9 rounded flex flex-col xl:flex-row overflow-y-scroll scrollbar">
        {/* profile section */}
        <div className="xl:w-3/12 xl:sticky xl:top-0 px-2">
          <div className="flex gap-3 xl:flex-col ">
            <img
              src={currentUser.avatar}
              alt="profile photo"
              className="rounded-full xl:size-48 object-cover"
            />
            {showEdit ? null : (
              <div className="self-end xl:self-start space-y-2 ">
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
          {showEdit && (
            <form action="" className="flex flex-col gap-3">
              <input type="image" src="" alt="" />
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
