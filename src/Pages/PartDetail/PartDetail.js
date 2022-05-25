import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingParts from "./BookingParts";

const PartDetail = () => {
  const { partId } = useParams();
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch(`https://immense-anchorage-97299.herokuapp.com/part/${partId}`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [partId]);

  const { img, name, price, quantity, description } = parts;

  return (
    <div>
      <h2 className="text-5xl text-center text-primary mt-5">
        Car Parts Detail
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="parts"
          />
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            <h2 className="text-1xl font-bold">Per unit Price: ${price}</h2>
            <h2 className="text-1xl font-bold">
              Available Quantity: {quantity}
            </h2>
            <h2 className="text-1xl font-bold">Minimum Order Quantity: 12</h2>
            <p className="py-6">{description}</p>
          </div>
        </div>
      </div>
      <BookingParts
        key={parts._id}
        parts={parts}
        setParts={setParts}
      ></BookingParts>
    </div>
  );
};

export default PartDetail;
