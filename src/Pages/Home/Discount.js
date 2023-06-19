import React from "react";
import chair from "../../Images/chair.png";
const Discount = () => {
  let counter = 58;
  setInterval(() => {
    if (counter > 0) {
      counter--;
    }
    document
      .getElementById("counterElement")
      .style.setProperty("--value", counter);
  }, 1000);

  return (
    <div className="my-10">
      <div class="card lg:card-side p-10 border-2 bg-gray-300 hover:scale-105 hover:duration-1000">
        <figure>
          <img src={chair} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 className="text-3xl md:text-5xl text-center font-bold">
            FLASH DEALS
          </h2>
          <h2 className="text-2xl md:text-3xl text-center font-bold">
            HURRY UP AND GET 25% DISCOUNT
          </h2>
          <button class="btn btn-primary mx-auto my-5">ADD TO CART</button>
          <div className="mx-auto">
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-3xl md:text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-3xl md:text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-3xl md:text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span class="countdown font-mono text-3xl md:text-5xl">
                  <span id="counterElement" style={{ "--value": 58 }}></span>
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
