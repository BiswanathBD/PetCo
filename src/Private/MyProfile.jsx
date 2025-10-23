import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import profileIcon from "../assets/avater.webp";

const MyProfile = () => {
  const { loading, user } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/SignIn"}></Navigate>;
  }

  console.log(user);

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 grid md:flex justify-center items-center gap-12 my-12 bg-white/10 w-11/12 md:w-fit p-16 rounded-2xl">
      <img
        className="w-40 mx-auto aspect-square object-cover rounded-lg"
        src={user?.photoURL || profileIcon}
        alt=""
      />
      <div className="text-center md:text-left">
        <h2 className="text-5xl font-semibold">{user.displayName}</h2>
        <h4 className="text-xl text-yellow-400 my-2">{user.email}</h4>
        <button className="px-4 py-2 bg-yellow-400 text-[#006E5C] font-semibold rounded-lg mt-2">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
