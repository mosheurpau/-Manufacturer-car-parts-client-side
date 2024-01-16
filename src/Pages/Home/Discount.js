import React, { useState, useEffect } from "react";
import chair from "../../Images/chair.png";

const Discount = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(11);
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        // Reset seconds and decrement minutes
        setSeconds(60);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          // Reset minutes and decrement hours
          setMinutes(59);
          if (hours > 0) {
            setHours(hours - 1);
          } else {
            // Reset hours and decrement days
            setHours(23);
            if (days > 0) {
              setDays(days - 1);
            } else {
              // Countdown finished, do any necessary actions here
              clearInterval(intervalId);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [days, hours, minutes, seconds]);

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
