import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const makeAdmin = () => {
    toast("Admin Added Successfully");
  };

  const removeUser = () => {
    toast("Remove user Successfully");
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>User Details</th>
            <th>Make Admin</th>
            <th>Remove User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} carPart={user}>
              <td>{index + 1}</td>
              <td>
                {user?.name}
                <td>{user?.email}</td>
              </td>
              <td>
                {user.role !== "admin" && (
                  <button onClick={makeAdmin} class="btn btn-sm">
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={removeUser}
                  class="btn btn-outline btn-sm btn-neutral"
                >
                  Remove User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
