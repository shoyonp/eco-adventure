import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#064E3B] to-[#036666] rounded-2xl p-6 text-white flex flex-col md:flex-row gap-5 justify-around items-center">
        <div>
          {" "}
          <h1 className="font-bold text-xl text-[#FBC02D]">
            Stay Connected to Adventure!
          </h1>
          <p className="w-960 font-light text-white/60">
            Embark on a journey of discovery with us! Subscribe to our
            newsletter and be the first to know about breathtaking
            eco-adventures, sustainable travel tips, exclusive deals, and
            inspiring stories from fellow adventurers. Join our community of
            nature enthusiasts and explore the beauty of the world while
            protecting it for future generations.
          </p>
        </div>
        <input
          type="email"
          placeholder="email"
          className="bg-[#F5F5F5] text-[#333333] border border-[#A7D7C5] w-full max-w-xs p-3 rounded-lg"
        />
        <button className="btn bg-green-700 hover:bg-[#086537] border-none text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
