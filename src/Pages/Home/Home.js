import React from "react";
import AllKids from "./AllKids";
import Banner from "./Banner";
import Membership from "./Membership";
import Products from "./Products";
import Artical from "./Artical";
import Benefits from "./Benefits";
import Discount from "./Discount";
import Galleary from "./Galleary";
import Contact from "./Contact";
import HomeReviews from "./HomeReviews";

const Home = () => {
  return (
    <div className="mx-auto">
      <Banner></Banner>
      <div className="max-w-7xl mx-auto px-1">
        <Discount></Discount>
        <Products></Products>
        <HomeReviews></HomeReviews>
        <AllKids></AllKids>
        <Artical></Artical>
      </div>
      <Galleary></Galleary>
      <Membership></Membership>
      <Benefits></Benefits>
      <Contact></Contact>
    </div>
  );
};

export default Home;
