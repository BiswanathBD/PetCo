import React, { use, useEffect } from "react";
import { useParams, useLocation, Navigate } from "react-router";
import useServiceData from "../Hooks/useServiceData";
import { AuthContext } from "../Provider/AuthProvider";

const Details = () => {
  const { id } = useParams();
  const { data, fetchData } = useServiceData();
  const location = useLocation();
  const { user, loading } = use(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/SignIn"}></Navigate>;
  }

  const selected = data.find((d) => String(d.serviceId) === id);

  if (!selected) {
    return (
      <p className="text-center text-red-500 mt-8">
        Service not found. Please check the link.
      </p>
    );
  }

  const {
    image,
    serviceName,
    rating,
    price,
    description,
    providerName,
    providerEmail,
    slotsAvailable,
    duration,
    category,
  } = selected;

  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 my-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md">
        {/* Left Side  Image */}
        <div className="md:w-1/2 aspect-4/3">
          <img
            src={image}
            alt={serviceName}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 text-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl text-yellow-400 font-bold mb-3">
              {serviceName}
            </h2>

            <div className="space-y-2 mb-4">
              <p className="text-lg">
                <span className="font-semibold text-white">Category:</span>{" "}
                {category}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">Duration:</span>{" "}
                {duration}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">
                  Slots Available:
                </span>{" "}
                {slotsAvailable}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">Rating:</span> ⭐{" "}
                {rating}
              </p>
              <p className="text-2xl font-semibold text-yellow-400">
                Price: ${price}
              </p>
            </div>

            <hr className="my-4 border-white/30" />

            <div className="space-y-1 mb-4">
              <p className="text-lg font-semibold text-white">Provider Info</p>
              <p>{providerName}</p>
              <p className="text-sm text-gray-400">{providerEmail}</p>
            </div>

            {description && (
              <p className="text-gray-300 leading-relaxed">{description}</p>
            )}
          </div>

          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
            Book a Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
