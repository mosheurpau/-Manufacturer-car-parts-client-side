import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ carPart }) => {
  const { _id, img, name, price, quantity, description } = carPart;
  const navigate = useNavigate();
  const navigateToPartsDetail = (_id) => {
    navigate(`/part/${_id}`);
  };
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
          <button
            onClick={() => navigateToPartsDetail(_id)}
            class="btn btn-primary"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
