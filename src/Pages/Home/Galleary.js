import React from "react";
import banner1 from "../../Images/banner1.png";
import banner2 from "../../Images/banner2.png";
import banner3 from "../../Images/banner3.png";
import banner4 from "../../Images/banner4.png";
import banner5 from "../../Images/banner5.png";
const Galleary = () => {
  return (
    <div>
      <div class="carousel carousel-center rounded-box">
        <div class="carousel-item">
          <img src={banner1} />
        </div>
        <div class="carousel-item">
          <img src={banner2} />
        </div>
        <div class="carousel-item">
          <img src={banner3} />
        </div>
        <div class="carousel-item">
          <img src={banner4} />
        </div>
        <div class="carousel-item">
          <img src={banner5} />
        </div>
      </div>
    </div>
  );
};

export default Galleary;
