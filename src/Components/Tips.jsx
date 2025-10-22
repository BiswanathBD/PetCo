import React from "react";
import Experts from "./Experts";

const Tips = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 lg:px-20 my-8">
      <div className="flex flex-col md:flex-row gap-8 justify-around">
        <div>
          <h3 className="text-4xl mt-20 font-semibold">
            Winter Care Tips for Pets :
          </h3>
          <ul className="mt-8 ml-8 space-y-6 list-disc text-xl">
            <li> Keep pets indoors during cold weather.</li>
            <li>Provide warm, soft bedding away from drafts.</li>
            <li>Protect paws from ice, snow, and salt.</li>
            <li>Use sweaters or jackets for short-haired pets.</li>
            <li>Ensure fresh, unfrozen water is always available.</li>
            <li>Watch for shivering or signs your pet is too cold.</li>
          </ul>
        </div>
      <Experts></Experts>
      </div>
    </div>
  );
};

export default Tips;
