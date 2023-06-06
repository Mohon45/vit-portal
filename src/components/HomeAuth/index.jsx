import React from "react";
import { Icon } from "@iconify/react";

const HomeAuth = () => {
  return (
    <div>
      <div className="border border-3 border-zinc-700 rounded-md p-6 flex justify-between items-center">
        <input
          className="border border-3 border-zinc-700 w-[70%] py-3 px-4 focus:outline-none focus:border-sky-400 rounded-md"
          type="text"
        />
        <button className="bg-black text-white px-4 py-3 rounded-md hover:bg-sky-600">
          Sign UP
        </button>
        <span>OR</span>
        <button className="flex items-center border py-2 px-2 hover:text-sky-600 hover:bg-sky-100 rounded-md outline-none hover:outline-sky-600">
          <Icon icon="flat-color-icons:google" fontSize={30} />
          <span className="ml-2">Sign Up with google</span>
        </button>
      </div>
    </div>
  );
};

export default HomeAuth;
