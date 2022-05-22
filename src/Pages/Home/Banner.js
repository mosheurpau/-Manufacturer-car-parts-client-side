import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/fk4xzYF/banner-bg02.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="me-">
          <h1 className="mb-10 text-4xl md:text-7xl text-white font-bold">
            FIND PERFECT CAR PARTS
          </h1>
          <p className="mb-10 text-2xl text-white font-bold">
            A car parts dealership, or vehicle local distribution, is a
            business.
          </p>
          <button className="btn btn-primary font-bold px-5 uppercase">
            Find it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
