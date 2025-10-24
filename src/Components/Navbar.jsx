import React, { use, useState } from "react";
import { HiMiniBars3, HiOutlineXMark } from "react-icons/hi2";
import { MdOutlinePets } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import profileIcon from "../assets/avater.webp";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const { user, setUser, userSignOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Log Out Successfully");
        setUser(null);
      })
      .finally(() => {
        navigate("/");
      });
  };

  return (
    <div className="mt-4 flex justify-between items-center container mx-auto px-4 md:px-10 lg:px-20">
      <Link className="text-3xl font-bold ml-4 flex">
        <span>
          Pet<span className="text-yellow-400">Co</span>
        </span>
        <MdOutlinePets className="text-yellow-400 mr-1" />
      </Link>

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
      <div className="md:flex items-center gap-2 hidden">
        {user && (
          <div className="relative group">
            <img
              className="w-10 aspect-square object-cover rounded-full  border border-yellow-400"
              src={user.photoURL || profileIcon}
              alt=""
            />
            <p className="absolute text-nowrap w-fit bg-yellow-400 text-[#006E5C] px-3 py-1 rounded-lg top-10 group-hover:top-12 font-semibold opacity-0 group-hover:opacity-100 transition-all z-20">
              {user.displayName}
            </p>
          </div>
        )}
        {user ? (
          <button
            onClick={handleSignOut}
            className="hidden h-fit md:block text-[#006E5C] bg-yellow-400 font-semibold px-4 py-2 rounded-full hover:bg-white transition"
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
        className={`md:hidden max-w-11/12 ${
          showNav ? " opacity-100 top-4" : "opacity-0 top-0"
        } justify-center bg-white text-[#006E5C] absolute z-10 rounded-2xl right-12 sm:right-28 p-4 shadow-2xl transition-all`}
      >
        <div className="flex gap-4 justify-center">
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
        <div className="grid gap-4 md:hidden bg-[#006E5C] px-4 pt-6 pb-4 mt-4 rounded-xl">
          {user && (
            <div className="grid justify-center items-center gap-2 text-xl">
              <img
                className="w-2/3 mx-auto border border-yellow-400 aspect-square object-cover rounded-full"
                src={user.photoURL || profileIcon}
                alt=""
              />
              <p className="text-white text-center">{user.displayName}</p>
            </div>
          )}

          {user ? (
            <button
              onClick={() => {
                handleSignOut();
                setShowNav(!showNav);
              }}
              className="md:hidden w-full text-[#006E5C] bg-yellow-400 font-semibold px-4 py-2 rounded-lg hover:bg-white transition"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={"/SignIn"}
              onClick={() => setShowNav(!showNav)}
              className="md:block w-full text-center text-[#006E5C] bg-yellow-400 font-semibold px-4 py-2 rounded-lg hover:bg-white transition"
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
