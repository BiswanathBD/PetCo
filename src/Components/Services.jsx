import React, { useEffect, useState } from "react";
import useServiceData from "../Hooks/useServiceData";
import ServiceCard from "./ServiceCard";
import { PropagateLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

const Services = () => {
  const { data, fetchData } = useServiceData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();

    setTimeout(() => {
      setLoading(false);
      AOS.init({ duration: 1000, once: true }); // initialize AOS
    }, 2000);
  }, []);

  if (loading || !data) {
    return (
      <div className="flex justify-center items-center h-64">
        <PropagateLoader color="#f6e05e" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 md:px-10 lg:px-20 my-8">
      {data.map((service) => (
        <div key={service.serviceId} data-aos="fade-up">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
};

export default Services;
