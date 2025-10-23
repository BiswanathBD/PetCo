import React, { useEffect } from "react";
import useServiceData from "../Hooks/useServiceData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { data, fetchData } = useServiceData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container mx-auto px-4 md:px-10 lg:px-20 my-8">
      {data.map((service) => (
        <ServiceCard key={service.serviceId} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
