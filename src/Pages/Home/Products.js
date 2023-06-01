import React from "react";
import useParts from "../../hooks/useParts";
import Product from "./Product";
import Loading from "../Shared/Loading";

const Products = () => {
  const [carParts, setCarParts, isLoading] = useParts();

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-10">
      <h4 className="lg:text-5xl text-4xl font-bold text-secondary text-center my-12">
        BEST SELLER OUR PARTS
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {carParts.slice(0, 6).map((carPart) => (
          <Product key={carPart._id} carPart={carPart}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
