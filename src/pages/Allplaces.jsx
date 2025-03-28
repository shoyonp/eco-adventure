import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import UseTitle from "../components/UseTitle";

const Allplaces = () => {
  UseTitle("All Pages")
  const packages = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {packages &&
          packages?.map((pack, idx) => <Card pack={pack} key={idx}></Card>)}
      </div>
      <Link
        to="/"
        className="btn bg-green-700 text-white border-none shadow-md mb-5"
      >
        Home
      </Link>
    </div>
  );
};

export default Allplaces;
