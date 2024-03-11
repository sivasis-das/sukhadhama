import React from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen py-5 flex items-center justify-center overflow-y-hidden">
        <div className="w-11/12 xl:w-4/12 bg-white rounded-xl border-black border-2">
          <div className="w-11/12 m-auto">
            <div className="flex items-center justify-between mb-2 py-4">
              <h3 className="text-2xl font-semibold">
                Log in or create an account
              </h3>
              <p>
                <Link to="/">
                  <RxCross1 size={30} />
                </Link>
              </p>
            </div>

            <div>
              <form action="" method="post" className="flex flex-col ">
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  placeholder="Username"
                  className="p-3 border-zinc-300 border-2 rounded-lg placeholder:text-xl text-xl mb-4 transition ease-in duration-300 outline-none focus:ring-2 focus:ring-orange-600"
                />
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  className="p-3 border-zinc-300 border-2 rounded-lg placeholder:text-xl text-xl mb-4 transition ease-in duration-300 outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="Enter your password"
                  className="p-3 border-zinc-300 border-2 rounded-lg placeholder:text-xl text-xl mb-4  transition ease-in duration-300 outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button className="p-3 bg-orange-600 text-white text-xl rounded-lg hover:bg-orange-700 active:bg-orange-900 transition ease-in-out duration-300">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="flex before:border-t before:border-gray-900 before:flex-1 after:border-t after:border-gray-900 after:flex-1 items-center  my-2">
              <p className="text-center mx-2 text-lg font-semibold">or</p>
            </div>
            <div className="text-center mb-3">
              <h3 className="">
                Already have an account?{" "}
                <span>
                  {" "}
                  <Link to="/sign-in" className="font-semibold">
                    Log in
                  </Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
