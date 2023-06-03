import React from "react";
import profile from "../../assets/profile-icon.jpeg";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="navbar w-[80%] mx-auto  flex justify-between bg-base-100">
        <div className="text-3xl font-bold">
          <a href="#" className="">
            VIT PORTAL
          </a>
        </div>
        <div className="flex-none gap-2">
          <div>
            <a href="#" className="mr-4 text-lg hover:underline">
              Home
            </a>
            <a href="#" className="mr-4 text-lg hover:underline">
              Contact
            </a>
            <a href="#" className="mr-4 text-lg hover:underline">
              About
            </a>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profile} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
