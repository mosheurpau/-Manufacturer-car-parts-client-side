import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import useParts from "../../hooks/useParts";

const ManageParts = () => {
  const [carParts, setCarParts] = useParts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://immense-anchorage-97299.herokuapp.com/part/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = carParts.filter((carPart) => carPart._id !== id);
          setCarParts(remaining);
        });
    }
  };

  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {carParts.map((carPart, index) => (
            <tr key={carPart._id} carPart={carPart}>
              <td>{index + 1}</td>
              <td>
                <div class="avatar">
                  <div class="w-16 rounded-xl">
                    <img src={carPart.img} alt="pic" />
                  </div>
                </div>
              </td>
              <td>{carPart.name}</td>
              <td>{carPart.price}</td>
              <td>{carPart.quantity}</td>
              <td>
                <button class="btn btn-outline btn-sm btn-neutral">
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(carPart._id)}
                  class="btn btn-outline btn-sm btn-neutral"
                >
                  <FontAwesomeIcon className="delete-icon" icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageParts;
