import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div
      className="hero min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(https://i.ibb.co/fk4xzYF/banner-bg02.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div data-aos="fade-down">
          <h1 className="mb-4 text-3xl md:text-5xl lg:text-7xl text-white font-bold hover:scale-110 hover:duration-1000 hover:text-primary">
            FIND PERFECT CAR PARTS
          </h1>
          <p className="mb-4 text-lg md:text-xl text-white font-bold hover:scale-110 hover:duration-1000 hover:text-primary">
            A car parts dealership, or vehicle local distribution, is a
            business.
          </p>
          <button className="btn btn-primary font-bold px-4 md:px-5 uppercase">
            Find it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
