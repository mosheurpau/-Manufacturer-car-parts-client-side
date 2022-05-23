import React from "react";

const Product = ({ carPart }) => {
  const { img, name, price, quantity, description } = carPart;
  return (
    <div class="card card-compact w-96 bg-base-100 mx-auto shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <h2 className="card-title text-center">Price: ${price}</h2>
        <h2 class="card-title">Quantity: {quantity}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
