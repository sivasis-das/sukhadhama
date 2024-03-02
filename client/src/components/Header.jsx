import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [showNav, setShowNav] = useState(false);

  

  return (
    <header className=" shadow-md  ">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        {/* mobile-nav-bar */}
        <div className="xl:hidden py-4">
          <RxHamburgerMenu size={20} onClick={() => setShowNav(true)} />
        </div>
        {/* container */}
        <div
          className={`${
            showNav
              ? "absolute left-0 right-0 top-0 bottom-0 bg-gray-700 bg-opacity-80 ease-in-out duration-500"
              : "hidden"
          } `}
        ></div>
        <div
          className={`absolute bg-white left-0 top-0 bottom-0 h-full ${
            showNav
              ? "translate-x-0 ease-in-out duration-500 "
              : "-translate-x-full ease-in-out duration-500"
          }`}
        >
          <div className="flex items-center">
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
          <ul className="*:pl-2 text-xl *:m-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/buy">Buy</Link>
            </li>
            <hr />
            <li>
              <Link to="/sell">Sell</Link>
            </li>
            <hr />
            <li>
              <Link to="/rent">Rent</Link>
            </li>
            <hr />
            <li>
              <Link to="/findrealtor">Find Realtor&#174;</Link>
            </li>
            <hr />
            <li>
              <Link to="/myhome">My Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/news">News & Insights</Link>
            </li>
            <hr />
            <li>
              <Link to="/ads">Advertise</Link>
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
                to="/buy"
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
                to="/sell"
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
                to="/rent"
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
            <p>Advertise</p>
          </div>
        </div>
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
        <div className="xl:hidden">
          <NavLink to="/sign-in">
            <FaCircleUser size={35} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
