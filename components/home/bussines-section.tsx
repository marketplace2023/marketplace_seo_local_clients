import React from "react";
import BussinesCard from "./card-bussines";

const BussinesSection = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mt-2">Our Clients</h1>
          <p className="text-base text-gray-500 mt-4">
            Meet our clients, who are already part of our services.
          </p>
        </div>
        <BussinesCard />
      </div>
    </>
  );
};

export default BussinesSection;
