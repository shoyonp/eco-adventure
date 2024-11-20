import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    // e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo);
    updateUserProfile({ displayName: name, photoURL: photo });
  };
  return (
    <>
      <div className="my-10">
        <h2 className="text-center font-bold text-3xl">Welcome</h2>
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h2 className="text-2xl font-semibold text-center">
            Update your Profile
          </h2>
          <h2>{user.displayName}</h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            {/* photo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-600 text-white ">Update Profile</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
