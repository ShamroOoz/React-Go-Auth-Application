import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";

const Home = () => {
  return (
    <div className="flex flex-col justify-center py-6 sm:py-12">
      <div className="relative flex flex-col py-3 sm:max-w-xl sm:mx-auto">
        <div className="p-3 mx-auto">
          <span className="text-2xl font-bold text-indigo-900 uppercase ">
            User
          </span>
        </div>
        <div className="border border-indigo-900 shadow w-30 h-30 rounded-3xl">
          <img
            alt="pablo"
            src="https://img.icons8.com/plasticine/200/000000/user-male.png"
          />
        </div>
        <div className="mx-auto mt-2">
          <p className="font-mono text-indigo-700 uppercase">
            shamrozwarraich@gmail.com
          </p>
        </div>
      </div>
      <div className="mx-auto my-2">
        <BadgeCheckIcon className="h-10 text-indigo-700 w-22" />
      </div>
      <div className="flex flex-col mx-auto space-y-2">
        <button type="button" className="btn-large" onClick={singoutlistner}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
