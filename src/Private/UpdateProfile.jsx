import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, UpdateUserData, error, setError } = use(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <Navigate state={location.pathname} to={"/SignIn"}></Navigate>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;

    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    if (!name && !photoUrl) {
      toast.error("Nothing to Update");
      return;
    }
    UpdateUserData(name, photoUrl)
      .then(() => {
        toast.success("Profile Updated");
        e.target.reset();
        navigate("/profile");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <form onSubmit={handleUpdate} className="grid gap-3">
        <h2 className="text-4xl text-center px-4 md:px-8 lg:px-16 font-semibold mb-2">
          Update Profile
        </h2>

        <p className="text-center text-red-500">{error && `${error}`}</p>

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input bg-white text-gray-500 w-full"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
          type="text"
          name="photoURL"
          className="input bg-white text-gray-500 w-full"
          placeholder="Photo URL"
        />

        <button type="submit" className="py-2 rounded-sm bg-yellow-400 mt-4">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
