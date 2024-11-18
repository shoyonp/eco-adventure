import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pack }) => {
  const { adventure_title, image, eco_friendly_features } = pack;
  return (
    <div className="mb-10">
      <div className="card bg-green-800 text-white shadow-xl border-none">
        <figure>
          <img
            className="h-[200px] w-full object-cover"
            src={image}
            alt={adventure_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold">{adventure_title}</h2>
          <p className="text-sm text-gray-200">
            {eco_friendly_features?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/detail/${pack.id}`}
              className="btn bg-green-600 text-white border-none shadow-md"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
