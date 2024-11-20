import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import UseTitle from "../components/UseTitle";

const MyProfile = () => {
  UseTitle("My Profile")
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <div className="card items-center bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10 my-10 rounded-md mx-auto">
        <h2 className="text-center font-bold text-3xl">
          Welcome
          <span className="mx-3 italic text-green-700 font-normal">
            {user.displayName}
          </span>
          Here's your{" "}
          <span className="font-normal text-green-700 italic">Information</span>
        </h2>
        <p className="mb-4 mt-4 text-lg font-semibold">
          Name:{" "}
          <span className="text-green-700 font-normal italic">
            {user.displayName}
          </span>
        </p>
        <p className="text-lg font-medium mb-4">Email: <span className="font-normal italic text-green-700">{user.email}</span></p>
        <img className="rounded-md w-52 mb-4" src={user.photoURL} alt="" />
        <Link  to="/updateProfile" className="btn text-white bg-green-600">
          Update
        </Link>
      </div>
    </>
  );
};

export default MyProfile;
