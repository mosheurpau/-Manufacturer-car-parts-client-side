import React, { useState, useEffect } from "react";
import chair from "../../Images/chair.png";

const Discount = () => {
  // Set the target date
  const targetDate = new Date("2024-12-12");

  // Calculate the remaining time
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="my-10">
      <div className="card lg:card-side p-10 border-2 bg-gray-300 hover:scale-105 hover:duration-1000">
        <figure>
          <img src={chair} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl md:text-5xl text-center font-bold">
            FLASH DEALS
          </h2>
          <h2 className="text-2xl md:text-3xl text-center font-bold">
            HURRY UP AND GET 25% DISCOUNT
          </h2>
          <button className="btn btn-primary mx-auto my-5">ADD TO CART</button>
          <div className="mx-auto">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  {days}
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  {hours}
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  {minutes}
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-3xl md:text-5xl">
                  {seconds}
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
