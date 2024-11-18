import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Home = () => {
  const packages = useLoaderData();
//   console.log(typeof(packages));
  //   console.log(packages);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {packages && packages?.map((pack, idx) => (
          <Card pack={pack} key={idx}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
