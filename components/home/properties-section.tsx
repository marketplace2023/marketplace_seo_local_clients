import React from "react";
import CardProprerties from "./card-properties";
const PropertiesSection = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mt-2">Properties of our clients</h1>
          <p className="text-base text-gray-500 mt-4">
            Exclusive Listings: Discover Your Dream Home{" "}
          </p>
        </div>
        <CardProprerties />
      </div>
    </>
  );
};

export default PropertiesSection;
