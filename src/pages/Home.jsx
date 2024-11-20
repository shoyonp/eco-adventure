import React from "react";
import Banner from "../components/Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Activities from "../components/Activities";
import Feedback from "../components/Feedback";
import Newsletter from "../components/Newsletter";
import UseTitle from "../components/UseTitle";

const Home = () => {
  UseTitle("Home")
  const packages = useLoaderData();
  const { packagesData, feedbackData } = packages;
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {packagesData &&
          packagesData
            ?.slice(0, 4)
            .map((pack, idx) => <Card pack={pack} key={idx}></Card>)}
      </div>
      <NavLink
        to="/allPlaces"
        className=" my-6 btn bg-green-600 text-white border-none shadow-md"
      >
        Show More
      </NavLink>
      <div className="mb-10">
        {" "}
        <Activities></Activities>
      </div>
      <div className="mb-10">
        <Feedback feedbackData={feedbackData}></Feedback>
      </div>
      <div className="mb-5 "><Newsletter></Newsletter></div>
    </div>
  );
};

export default Home;
