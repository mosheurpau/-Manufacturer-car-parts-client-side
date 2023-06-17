import React from "react";
import useParts from "../../hooks/useParts";
import Product from "../Home/Product";

const Parts = () => {
  const [carParts, setCarParts] = useParts();
  return (
    <div className="max-w-7xl mx-auto px-1">
      <h4 className="text-5xl font-bold text-secondary text-center my-12">
        Our All Parts
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {carParts.map((carPart) => (
          <Product key={carPart._id} carPart={carPart}></Product>
        ))}
      </div>
    </div>
  );
};

export default Parts;
