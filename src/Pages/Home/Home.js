import React from "react";
import AllKids from "./AllKids";
import Banner from "./Banner";
import Membership from "./Membership";
import Products from "./Products";
import Reviews from "./Reviews";
import Artical from "./Artical";
import Benefits from "./Benefits";
import Discount from "./Discount";
import Galleary from "./Galleary";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-1">
        <Discount></Discount>
        <Products></Products>
        <Reviews></Reviews>
        <AllKids></AllKids>
        <Artical></Artical>
      </div>
      <Membership></Membership>
      <Benefits></Benefits>
      <Contact></Contact>
      <Galleary></Galleary>
    </div>
  );
};

export default Home;
