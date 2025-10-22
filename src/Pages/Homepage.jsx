import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Tips from "../Components/Tips";

const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <h2 className="text-4xl text-center px-4 mt-20 font-semibold">Popular Winter Care Services</h2>
      <Services></Services>
      <Tips></Tips>
    </div>
  );
};

export default Homepage;
