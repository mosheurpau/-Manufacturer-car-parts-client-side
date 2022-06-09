import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl font-bold text-primary">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          {!admin && (
            <li>
              <Link to="/dashboard/addReview">Add Review</Link>
            </li>
          )}

          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/addPart">Add Parts</Link>
              </li>
              <li>
                <Link to="/dashboard/manageParts">Manage All Parts</Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/manageUser">Manage All User</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
