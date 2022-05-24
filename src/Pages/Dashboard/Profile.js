import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  console.log(user.photoURL);
  return (
    <div>
      <div className="flex mt-5 p-5">
        <div class="avatar online">
          <div class="w-24 rounded-full">
            <img src={user?.photoURL} alt="Profile" />
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-2xl font-bold">{user.displayName}</h2>
          <h2 className="text-lxl">{user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
