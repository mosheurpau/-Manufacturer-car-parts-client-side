import React from "react";
import useBookings from "../../hooks/useBookings";

const ManageOrders = () => {
  const [userBooking, setUserBooking] = useBookings();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {userBooking.map((booking, index) => (
            <tr key={booking._id} carPart={booking}>
              <td>{index + 1}</td>
              <td>
                {booking.name} <br /> {booking.email} <br /> {booking.phone}{" "}
                <br /> {booking.address}
              </td>
              <td>
                <div className="avatar">
                  <div className="w-32 rounded-xl">
                    <img src={booking.img} alt="pic" />
                  </div>
                </div>
              </td>
              <td>{booking.quantity}</td>
              <td>{booking.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
