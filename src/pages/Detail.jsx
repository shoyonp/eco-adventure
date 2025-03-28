import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import UseTitle from "../components/UseTitle";

const Detail = () => {
  UseTitle("Detail");
  const data = useLoaderData();
  const { id } = useParams();
  const [pack, setPack] = useState({});
  // const [showModal, setModal] = useState(false);

  // const handleClick = () => {
  //   const time = new Date();
  //   const currentHour = time.getHours();
  //   if {}
  // };

  useEffect(() => {
    const oneData = data && data?.find((p) => p.id == id);
    setPack(oneData);
  }, [id, data]);

  const {
    image,
    adventure_title,
    short_description,
    adventure_cost,
    booking_availability,
    location,
    duration,
    adventure_level,
    included_items,
    eco_friendly_features,
    max_group_size,
    special_instructions,
  } = pack;
  return (
    <>
      <div className="mb-10 mt-4 bg-slate-100 p-4 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img className="rounded-lg w-full md:w-3/5" src={image} alt="" />
          <div>
            <h1 className="text-4xl font-bold my-3 italic text-green-700">
              {adventure_title}
            </h1>
            <p className="text-sm text-gray-500 font-medium mb-2">
              {short_description}
            </p>
            <p className="text-md font-bold mb-2">
              Adventure Level:{" "}
              <span className="text-gray-500 font-medium text-sm">
                {adventure_level}
              </span>
            </p>
            <p className="text-md font-bold mb-2">
              Eco Friendly Features:{" "}
              {eco_friendly_features &&
                eco_friendly_features?.map((item, i) => (
                  <li className="text-sm text-gray-500 font-medium" key={i}>
                    {item}
                  </li>
                ))}
            </p>
            <p className="text-md font-bold mb-2">
              Include items:
              {included_items &&
                included_items?.map((item, idx) => (
                  <li className="text-sm text-gray-500 font-medium" key={idx}>
                    {item}
                  </li>
                ))}
            </p>
            <p className="text-md font-bold mb-2">
              Group size:{" "}
              <span className="italic text-sm font-medium text-red-500">
                {max_group_size}
              </span>{" "}
              People
            </p>
            <p className="text-md font-bold mb-2">
              Location:{" "}
              <span className="text-sm text-gray-500 font-medium">
                {location}
              </span>
            </p>
            <p className="text-md font-bold mb-2">
              Duration:{" "}
              <span className="text-sm text-gray-500 font-medium">
                {duration}
              </span>
            </p>
            <p className="text-md font-bold mb-2">
              Booking Availability:{" "}
              <span className="text-sm text-gray-500 font-medium">
                {booking_availability == true ? "Available" : "Not available"}
              </span>{" "}
            </p>
            <p className="text-md font-bold mb-2">
              Cost:{" "}
              <span className="text-sm text-gray-500 font-medium">
                $ {adventure_cost}
              </span>
            </p>
            <hr />
            <div className="mb-2">
              <h2 className="text-md font-bold text-red-600">Instructions -</h2>
              {special_instructions &&
                special_instructions?.map((item, i) => (
                  <h3 className="italic text-green-600" key={i}>
                    {item}
                  </h3>
                ))}
            </div>
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn mt-2 bg-green-700 text-white font-semibold border-none"
            >
              Talk with Expert
            </button>
          </div>
        </div>
      </div>
      {/* modal */}
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Detail;
