import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="shadow-md  bg-white">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* mobile-nav-bar */}
        <div className="xl:hidden py-4">
          <RxHamburgerMenu size={20} onClick={() => setShowNav(true)} />
        </div>
        {/* container */}
        <div
          onClick={()=>setShowNav(false)}
          className={`${
            showNav
              ? "absolute z-40 left-0 right-0 top-0 bottom-0 bg-gray-700 bg-opacity-80 ease-in-out duration-500"
              : "hidden"
          } `}
        ></div>
        <div
          className={`absolute z-50 bg-white  left-0 top-0 bottom-0 h-full  ${
            showNav
              ? "translate-x-0 ease-in-out duration-500"
              : "-translate-x-full ease-in-out duration-500"
          }`}
        >
          <div className="flex items-center bg-white">
            <Link to="/" className="p-5">
              <h1 className=" font-bold text-xl flex">
                <span className="text-orange-600">Sukha</span>
                <span className="text-slate-800">Dhama</span>
              </h1>
            </Link>
            <div className="m-auto ">
              <RxCross1 size={35} onClick={() => setShowNav(false)} />
            </div>
          </div>
          <ul className="*:pl-2 text-xl *:m-4 ">
            <li>
              <Link to="/" className="inline-block w-full">Home</Link>
            </li>
            <hr />
            <li>
              <Link to={{ pathname: "/search", search: "?type=sell" }} className="inline-block w-full">Buy</Link>
            </li>
            <hr />
            <li>
              <Link to="/marketing" className="inline-block w-full">Sell</Link>
            </li>
            <hr />
            <li>
              <Link to={{ pathname: "/search", search: "?type=rent" }} className="inline-block w-full">Rent</Link>
            </li>
            <hr />
            <li>
              <Link to="/findrealtors" className="inline-block w-full">Find Realtor&#174;</Link>
            </li>
            <hr />
            <li>
              <Link to="/myhome" className="inline-block w-full">My Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/news" className="inline-block w-full">News & Insights</Link>
            </li>
            <hr />
            <li>
              <Link to="/marketing" className="inline-block w-full">Advertise</Link>
            </li>
            <hr />
          </ul>
        </div>

        <Link to="/">
          <h1 className=" font-bold text-2xl flex flex-wrap">
            <span className="text-orange-600">Sukha</span>
            <span className="text-slate-800">Dhama</span>
          </h1>
        </Link>

        {/* larger than mobile nav bar */}
        <div className="hidden xl:flex  flex-1 justify-around ">
          <ul className="flex space-x-4 py-3 *:cursor-pointer text-md items-center font-semibold ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/search", search: "?type=sell" }}
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marketing"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                Sell
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/search", search: "?type=rent" }}
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                Rent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/findrealtors"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                Find Realtors&#174;
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myhome"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                My Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                News & Insights
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center text-md font-semibold space-x-3 underline *:cursor-pointer">
            <p>Manage rentals</p>
            <Link to="/marketing"><p>Advertise</p></Link>
          </div>
        </div>
        {currentUser ? (
          <Link to="/profile" className="hidden xl:block">
            <img
              className="rounded-full size-10"
              src={currentUser.avatar}
              alt="profile photo"
            />
          </Link>
        ) : (
          <div className="hidden xl:flex space-x-3 items-center">
            <p>
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  `${
                    isActive && "border-b-2 border-black"
                  } hover:border-b-2 hover:border-black py-3`
                }
              >
                Log In
              </NavLink>
            </p>
            <p>
              <Link
                to="sign-up"
                className="px-6 py-1 text-md bg-black text-white font-semibold rounded-full "
              >
                Sign Up
              </Link>
            </p>
          </div>
        )}

        <div className="xl:hidden">
          {currentUser ? (
            <Link to="/profile">
              <img
                className="rounded-full size-10"
                src={currentUser.avatar}
                alt="profile photo"
              />
            </Link>
          ) : (
            <Link to="/sign-in">
              <FaCircleUser size={35} />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
