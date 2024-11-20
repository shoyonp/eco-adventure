import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div className="bg-black rounded-2xl p-6 text-white flex gap-5 justify-around items-center">
        <div>
          {" "}
          <h1 className="font-bold text-xl ">Stay Connected to Adventure!</h1>
          <p className="w-960 font-light text-white/60">
          Embark on a journey of discovery with us! Subscribe to our newsletter and be the first to know about breathtaking eco-adventures, sustainable travel tips, exclusive deals, and inspiring stories from fellow adventurers. Join our community of nature enthusiasts and explore the beauty of the world while protecting it for future generations.
          </p>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-green-600 border-none text-white">Submit</button>
      </div>
    </div>
  );
};

export default Newsletter;
