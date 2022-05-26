import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3iPZBIXIKNf0kXxaANAcQnyt8palwF26nzhqto8eq2yqcH3rSYVPtr29vY3wAhD75Vnj0ltdyuSHEchGdwrWps00c9tMPA2Z"
);

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  // console.log(order);

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="font-bold">
            Hello, <span className="text-primary">{order.name}</span>
          </p>
          <div>
            <div class="avatar">
              <div class="w-24 rounded">
                <img src={order.img} alt="pic" />
              </div>
              <h2 class="card-title text-success">
                Please Pay for {order.partsName}
              </h2>
            </div>
          </div>

          <p className="text-bold">
            Your Order Quantity:{" "}
            <span className="text-primary">{order.quantity}</span>
          </p>
          <p className="text-bold">
            Please pay:<span className="text-primary">${order.price}</span>{" "}
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
