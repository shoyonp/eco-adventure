import { GiCirclingFish, GiMountainRoad } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoBicycleSharp } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div>
      <h2 className="mb-5 text-4xl text-[#064E3B] tracking-wider font-extrabold text-center">
        There Are Many{" "}
        <span className="italic font-medium text-[#FBC02D]">Activities</span> In
        Each{" "}
        <span className="italic font-medium text-[#FBC02D]">Destination</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 items-center">
        {/* one */}
        <div className=" p-4 bg-[#E8F5E9] rounded-2xl shadow-lg ">
          <span className="font-bold text-2xl mb-3 text-[#FBC02D]">
            <GiMountainRoad />
          </span>
          <h2 className="text-lg text-[#2E7D32] font-bold mb-3 mt-3">
            Hiking Route With Team
          </h2>
          <p className=" font-normal text-[#333333] mb-3">
            Explore scenic trails with your team, building camaraderie and
            enjoying nature's beauty together on an adventurous group hike
          </p>
          <p className="font-medium text-base mb-3 text-[#1B5E20] flex items-center gap-2">
            <Link to="/dashboard" href="">
              LEARN MORE
            </Link>
            <FaLongArrowAltRight />
          </p>
        </div>
        {/* two */}
        <div className=" p-4  bg-[#E8F5E9]  rounded-2xl shadow-lg">
          <span className="font-bold text-2xl mb-3 text-[#FBC02D]">
            <GiCirclingFish />
          </span>
          <h2 className="text-lg  text-[#2E7D32] font-bold mb-3 mt-3">
            Fishing With Team
          </h2>
          <p className=" font-normal text-[#333333] mb-3">
            "Relax and bond with your team while fishing in serene waters,
            creating shared moments of peace and connection
          </p>
          <p className="font-medium text-base mb-3 text-[#1B5E20] flex items-center gap-2">
            <Link to="/dashboard" href="">
              LEARN MORE
            </Link>
            <FaLongArrowAltRight />
          </p>
        </div>
        {/* three */}
        <div className=" p-4  bg-[#E8F5E9] rounded-2xl shadow-lg">
          <span className="font-bold text-2xl mb-3 text-[#FBC02D]">
            <IoBicycleSharp />
          </span>
          <h2 className="text-lg text-[#2E7D32] font-bold mb-3 mt-3">
            Bike Routes With Family
          </h2>
          <p className=" font-normal text-[#333333] mb-3">
            Enjoy fun-filled family biking adventures along safe, picturesque
            routes, perfect for creating cherished memories and outdoor
            excitement
          </p>
          <p className="font-medium text-base mb-3 text-[#1B5E20] flex items-center gap-2">
            <Link to="/dashboard" href="">
              LEARN MORE
            </Link>
            <FaLongArrowAltRight />
          </p>
        </div>
        {/* four */}
        <div className=" p-4 bg-[#E8F5E9] rounded-2xl shadow-lg">
          <span className="font-bold text-2xl mb-3 text-[#FBC02D]">
            <BsFillPeopleFill />
          </span>
          <h2 className="text-lg text-[#2E7D32] font-bold mb-3 mt-3">
            Outbound With Team
          </h2>
          <p className=" font-normal text-[#333333] mb-3">
            Strengthen team spirit through engaging outbound activities that
            inspire collaboration, creativity, and unforgettable experiences in
            nature
          </p>
          <p className="font-medium text-base mb-3 text-[#1B5E20] flex items-center gap-2">
            <Link to="/dashboard" href="">
              LEARN MORE
            </Link>
            <FaLongArrowAltRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
