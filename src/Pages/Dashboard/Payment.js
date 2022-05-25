import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1lzvEfPfuw04NLsNcSQ3WStbTUxu2NgWfTNT0aUjTFcI63Bcy1kHhKgpP7hLX4scab5bYKEoflYium5FTutzwd00gSeqYTyT"
);

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  console.log(order);

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order.name}</p>
          <h2 class="card-title">Please Pay for {order.partsName}</h2>
          <p>
            Your Order Quantity:{" "}
            <span className="text-orange-700">{order.quantity}</span>
          </p>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;
