import React from "react";
import AllKids from "./AllKids";
import Banner from "./Banner";
import Membership from "./Membership";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-1">
        <Products></Products>
        <Reviews></Reviews>
        <AllKids></AllKids>
      </div>
      <Membership></Membership>
    </div>
  );
};

export default Home;
