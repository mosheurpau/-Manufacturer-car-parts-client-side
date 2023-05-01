import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://manufacturer-car-parts-server-side.onrender.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orderParts.filter(
            (orderPart) => orderPart._id !== id
          );
          setOrderParts(remaining);
        });
    }
  };

  const [user] = useAuthState(auth);
  const [orderParts, setOrderParts] = useState([]);
  useEffect(() => {
    fetch(
      `https://manufacturer-car-parts-server-side.onrender.com/booking/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderParts(data));
  }, [user]);
  // console.log(orderParts);

  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Cancel order</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {orderParts.map((orderPart, index) => (
            <tr key={orderPart._id} carPart={orderPart}>
              <td>{index + 1}</td>
              <td>
                <div class="avatar">
                  <div class="w-16 rounded-xl">
                    <img src={orderPart.img} alt="pic" />
                  </div>
                </div>
              </td>
              <td>{orderPart.name}</td>
              <td>{orderPart.quantity}</td>
              <td>{orderPart.price}</td>
              <td>
                {orderPart.price && !orderPart?.paid && (
                  <button
                    onClick={() => handleDelete(orderPart._id)}
                    className="btn btn-outline btn-sm btn-neutral"
                  >
                    <FontAwesomeIcon className="delete-icon" icon={faCancel} />
                  </button>
                )}

                {orderPart.price && orderPart?.paid && (
                  <span className="text-success">Successful</span>
                )}
              </td>
              <td>
                {orderPart.price && !orderPart?.paid && (
                  <Link to={`/dashboard/payment/${orderPart._id}`}>
                    <button className="btn btn-xs btn-primary">pay</button>
                  </Link>
                )}
                {orderPart.price && orderPart?.paid && (
                  <div>
                    <span className="text-success">paid</span>
                    <p>
                      Transaction id: <br />
                      <span className="text-success">
                        {orderPart?.transactionId}
                      </span>
                    </p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
