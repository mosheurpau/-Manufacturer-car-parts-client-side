import React from "react";
import Banner from "./Banner";

import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-1">
        <Products></Products>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
