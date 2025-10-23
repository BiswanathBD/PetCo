import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { image, serviceName, rating, price, serviceId } = service;

  return (
    <div>
      <img
        className="w-3/5 mx-auto aspect-square object-cover rounded-full border-4 border-white"
        src={image}
        alt=""
      />
      <div className="bg-white/20 pt-20 -mt-16 rounded-xl px-4 text-yellow-400">
        <h3 className="text-3xl font-semibold text-center">{serviceName}</h3>
        <div className="text-white flex justify-between items-center py-4">
          <p className="text-xl font-semibold">
            Price: <span>{price}$</span>
          </p>
          <p>
            <span className="text-2xl">★</span>
            {rating}
          </p>
        </div>
        <Link to={`/details/${serviceId}`}>
          <button className="bg-yellow-400 w-full my-4 rounded-lg hover:bg-yellow-500 text-[#006E5C] text-lg px-4 py-2 font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
