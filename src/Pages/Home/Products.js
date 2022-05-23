import React from "react";
import useParts from "../../hooks/useParts";
import Product from "./Product";

const Products = () => {
  const [carParts, setCarParts] = useParts();
  return (
    <div className="my-10">
      <h4 className="text-5xl font-bold text-secondary text-center my-12">
        Our Parts
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {carParts.slice(0, 5).map((carPart) => (
          <Product key={carPart._id} carPart={carPart}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
