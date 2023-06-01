import React from "react";
import AllKids from "./AllKids";
import Banner from "./Banner";
import Membership from "./Membership";
import Products from "./Products";
import Reviews from "./Reviews";
import Artical from "./Artical";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-1">
        <Products></Products>
        <Reviews></Reviews>
        <AllKids></AllKids>
        <Artical></Artical>
      </div>
      <Membership></Membership>
    </div>
  );
};

export default Home;
