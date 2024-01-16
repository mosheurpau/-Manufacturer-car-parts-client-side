import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../Images/banner1.png";
import banner2 from "../../Images/banner2.png";
import banner3 from "../../Images/banner3.png";
import banner4 from "../../Images/banner4.png";
import banner5 from "../../Images/banner5.png";

const Galleary = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      slider.slickNext();
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three images at a time
    slidesToScroll: 1, // Slide one image at a time
    centerMode: true,
    centerPadding: "0",
  };

  let slider;

  return (
    <div className="pt-16 mb-2">
      <h2 className="lg:text-5xl text-4xl text-center font-bold mt-10 pb-10">
        BEST SELLER OUR PARTS
      </h2>
      <Slider {...settings} ref={(c) => (slider = c)}>
        <div className="carousel-item">
          <img src={banner1} alt="Banner 1" />
        </div>
        <div className="carousel-item">
          <img src={banner2} alt="Banner 2" />
        </div>
        <div className="carousel-item">
          <img src={banner3} alt="Banner 3" />
        </div>
        <div className="carousel-item">
          <img src={banner4} alt="Banner 4" />
        </div>
        <div className="carousel-item">
          <img src={banner5} alt="Banner 5" />
        </div>
      </Slider>
    </div>
  );
};

export default Galleary;
