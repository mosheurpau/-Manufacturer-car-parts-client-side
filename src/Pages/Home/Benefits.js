import React from "react";
import b1 from "../../Images/b1.jpg";
import b2 from "../../Images/b2.jpg";
import b3 from "../../Images/b3.jpg";
const Benefits = () => {
  return (
    <div className="mb-20">
      <h2 className="lg:text-5xl text-4xl text-center font-bold mt-10 pb-5">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="card card-side glass w-96 bg-base-100 mx-auto hover:scale-110 hover:duration-500">
          <figure>
            <img className="h-100" src={b1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 className="text-2xl text-left font-bold">Free Home Delivery</h2>
            <p className="text-lg text-left text-gray-500">
              Provide free home delivery for all product over $100
            </p>
          </div>
        </div>
        <div className="card card-side glass w-96 bg-base-100 mx-auto hover:scale-110 hover:duration-500">
          <figure>
            <img className="h-100" src={b2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 className="text-2xl text-left font-bold">Quality Products</h2>
            <p className="text-lg text-left text-gray-500 hover:duration-500">
              We ensure our product quality all times
            </p>
          </div>
        </div>
        <div className="card card-side glass w-96 bg-base-100 mx-auto hover:scale-110 hover:duration-500">
          <figure>
            <img className="h-100" src={b3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 className="text-2xl text-left font-bold">Online Support</h2>
            <p className="text-lg text-left text-gray-500">
              To satisfy our customer we try to give support online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
