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

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 flex gap-10  mt-8">
      <img
        className="w-40 aspect-square object-cover rounded-lg"
        src={user.photoURL || profileIcon}
        alt=""
      />
      <div>
        <h2></h2>
        <h4>{user.email}</h4>
      </div>
    </div>
  );
};

export default MyProfile;
