import React, { use, useState } from "react";
import { HiMiniBars3, HiOutlineXMark } from "react-icons/hi2";
import { MdOutlinePets } from "react-icons/md";
import { Link, Navigate, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import profileIcon from "../assets/avater.webp";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const { user, userSignOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        alert("log out");
      })
      .finally(() => {
        navigate("/");
      });
  };

  return (
    <div className="mt-4 flex justify-between items-center container mx-auto px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold ml-4 flex">
        <span>
          Pet<span className="text-yellow-400">Co</span>
        </span>
        <MdOutlinePets className="text-yellow-400 mr-1" />
      </h2>

      {/* large display navbar */}
      <div className="hidden md:flex gap-6 bg-white/10 px-8 border border-white/20 rounded-full nav">
        <NavLink to={"/"} className="py-2">
          Home
        </NavLink>
        <NavLink to={"/service"} className="px-6 py-2">
          Service
        </NavLink>
        <NavLink to={"/profile"} className="py-2">
          My Profile
        </NavLink>
      </div>
      <div className="md:flex gap-4 hidden">
        {user && (
          <img
            className="w-10 aspect-square object-cover rounded-full"
            src={user.photoURL || profileIcon}
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handleSignOut}
            className="hidden md:block text-[#006E5C] bg-yellow-400 font-semibold px-4 py-2 rounded-full hover:bg-white transition"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to={"/SignIn"}
            className="hidden md:block text-[#006E5C] bg-yellow-400 font-semibold px-4 py-2 rounded-full hover:bg-white transition"
          >
            Sign In
          </Link>
        )}
      </div>

      {/* mobile navbar */}
      {showNav ? (
        <HiOutlineXMark
          onClick={() => setShowNav(!showNav)}
          className="text-2xl md:hidden"
        ></HiOutlineXMark>
      ) : (
        <HiMiniBars3
          onClick={() => setShowNav(!showNav)}
          className="text-2xl md:hidden"
        ></HiMiniBars3>
      )}

      <div
        className={`md:hidden ${
          showNav ? " opacity-100 top-2" : "opacity-0 top-0"
        } justify-center bg-white text-[#006E5C] absolute z-10 rounded-2xl right-12 sm:right-28 py-4 px-8 transition-all`}
      >
        <div className="flex gap-4">
          <NavLink onClick={() => setShowNav(!showNav)} to={"/"}>
            Home
          </NavLink>
          <NavLink onClick={() => setShowNav(!showNav)} to={"/service"}>
            Service
          </NavLink>
          <NavLink onClick={() => setShowNav(!showNav)} to={"/profile"}>
            My Profile
          </NavLink>
        </div>
        <div className="flex justify-between gap-4 md:hidden bg-[#006E5C] p-2 mt-4 rounded-full">
          {user && (
            <div className="flex justify-center items-center gap-2 text-xl">
              <img
                className="w-10 aspect-square object-cover rounded-full"
                src={user.photoURL || profileIcon}
                alt=""
              />
              <p className="text-white">{user.displayName}</p>
            </div>
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="md:hidden text-[#006E5C] bg-yellow-400 font-semibold px-4 py-2 rounded-full hover:bg-white transition"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={"/SignIn"}
              className="hidden md:block text-[#006E5C] bg-yellow-400 font-semibold px-4 py-2 rounded-full hover:bg-white transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
