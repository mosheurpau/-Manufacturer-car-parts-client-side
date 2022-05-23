import React from "react";
import Banner from "./Banner";

import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-1">
        <Products></Products>
      </div>
    </div>
  );
};

export default Home;
