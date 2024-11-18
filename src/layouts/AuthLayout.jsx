import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
