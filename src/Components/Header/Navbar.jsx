import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, SignOut } = use(AuthContext);
  const [hovered, setHovered] = useState(false);
  // console.log(user.displayName);
  // console.log(user.photoURL);

  // sign out btn features
  const handleSignOut = () => {
    SignOut()
      .then((UserInfo) => {
        const user = UserInfo.data;
        // console.log(result);
        toast("Log Out Successfully", user.displayName);
      })
      .catch((error) => {
        // console.log(error.massage);
        toast(error.massage);
      });
    // console.log("Log Out Successfully");
  };
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      {user && <NavLink to={"/profile"}>My Profile</NavLink>}
      <NavLink to={"/about"}>About us</NavLink>
      <NavLink to={"/contract"}>Contract</NavLink>
      <NavLink to={"/galary"}>Gallary</NavLink>
    </>
  );
  return (
    <div className="navbar w-7xl mx-auto text-white ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="space-x-2 flex items-center">
          <img className="w-10 h-10 rounded-full " src={logo} alt="" />
          <a className=" font-bold text-xl hidden  md:block  uppercase ">
            Skill Bloom
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3 text-base-100 ">{links}</ul>
      </div>
      <div className="navbar-end space-x-3">
        {/* set user photo when user login  */}
        <span
          className=" inline-flex items-center justify-center rounded-full   overflow-hidden cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? (
            <h1 className="text-lg font-semibold text-primary text-center px-1">
              {user?.displayName || "Unknown"}
            </h1>
          ) : (
            <img
              src={user?.photoURL || userIcon}
              onError={(e) => (e.target.src = userIcon)}
              alt="User"
              className="w-10 h-10 object-cover bg-black border rounded-full border-secondary"
            />
          )}
        </span>

        {/* log in and log out btn toggleing */}
        {user ? (
          <Link onClick={handleSignOut} to={"/"} className="btn btn-primary ">
            Sign Out
          </Link>
        ) : (
          <Link to={"/auth"} className="btn btn-warning hover:btn-secondary text-black">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
