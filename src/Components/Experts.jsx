import React from "react";

const Experts = () => {
  return (
    <div>
      <h3 className="text-4xl mt-20 font-semibold">Meet Our Expert Vets :</h3>
      <div className="flex gap-4 items-center p-4 bg-white/20 rounded-2xl mt-4">
        <img
          className="w-16 aspect-square object-cover rounded-full"
          src="https://i.ibb.co.com/CK09sZqV/image.png"
          alt=""
        />
        <div>
          <h4 className="text-3xl font-semibold">Dr. Emily Carter</h4>
          <p className="text-white/50">Pet Nutrition & Seasonal Health</p>
        </div>
      </div>
      <div className="flex gap-4 items-center p-4 bg-white/20 rounded-2xl mt-4">
        <img
          className="w-16 aspect-square object-cover rounded-full"
          src="https://i.ibb.co.com/RGq8XYRD/image.png"
          alt=""
        />
        <div>
          <h4 className="text-3xl font-semibold">Dr. Rajesh Mehra</h4>
          <p className="text-white/50">Preventive & General Veterinary Medicine</p>
        </div>
      </div>
      <div className="flex gap-4 items-center p-4 bg-white/20 rounded-2xl mt-4">
        <img
          className="w-16 aspect-square object-cover rounded-full"
          src="https://i.ibb.co.com/jk8z8gb7/image.png"
          alt=""
        />
        <div>
          <h4 className="text-3xl font-semibold">Dr. Sarah Lin</h4>
          <p className="text-white/50">Pet Dermatology & Skin Health</p>
        </div>
      </div>
    </div>
  );
};

export default Experts;
