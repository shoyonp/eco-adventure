import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, UserLogOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/allPlaces">All Places</NavLink>
      </li>
      <li>
        <NavLink to="/myProfile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo} className="hidden md:flex w-10" alt="" />
          <a className="text-base md:text-xl font-bold text-green-700">Eco-Adventure</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <span className="text-4xl">
            {user && user?.email ? (
              <div>
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                    <img
                      title={user?.displayName}
                      className="w-14 rounded-full "
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                </div>
                {/* <p className="text-sm">{user?.displayName}</p> */}
              </div>
            ) : (
              <FaUserCircle></FaUserCircle>
            )}
          </span>
          {user && user?.email ? (
            <button
              onClick={UserLogOut}
              className="btn border-none bg-green-700 text-white"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/auth/login"
              className="btn border-none bg-green-700 text-white"
            >
              Login
            </NavLink>
          )}
          {/* <div>{user && user.email}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
