import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const BookService = () => {
  const { error, setError } = use(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    if (name.length < 3) {
      setError("Invalid Name");
      return
    }
    toast.success("Booking Request Placed");
    form.reset();
  };

  return (
    <div className="container my-12 mx-auto px-8 bg-white/20 w-fit p-8 rounded-2xl">
      <form onSubmit={handleBooking} className="grid gap-3">
        <h2 className="text-4xl text-center px-4 md:px-8 lg:px-16 font-semibold mb-2">
          Book Our Service
        </h2>

        <p className="text-center text-red-500">{error && `${error}`}</p>

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input bg-white text-gray-500 w-full"
          placeholder="Name"
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input bg-white text-gray-500 w-full"
          placeholder="Email"
          required
        />

        <button type="submit" className="py-2 rounded-sm bg-yellow-400 mt-4">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookService;
