import React from "react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { useAuth } from "../Context/Globalcontext.js";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { signout, user } = useAuth();
  const history = useHistory();

  const logoutlisntner = async () => {
    try {
      await signout();
      history.push("/login");
    } catch (error) {
      console.log("Something wrong in logout function in Home", error);
    }
  };
  return (
    <div className="flex flex-col justify-center py-6 sm:py-12">
      <div className="relative flex flex-col py-3 sm:max-w-xl sm:mx-auto">
        <div className="p-3 mx-auto">
          <span className="text-2xl font-bold text-blue-700 uppercase ">
            {user.name}
          </span>
        </div>
        <div className="border border-blue-700 shadow w-30 h-30 rounded-3xl">
          <img
            alt="pablo"
            src="https://img.icons8.com/plasticine/200/000000/user-male.png"
          />
        </div>
        <div className="mx-auto mt-2">
          <p className="font-mono text-blue-700 uppercase">{user.email}</p>
        </div>
      </div>
      <div className="mx-auto my-2">
        <BadgeCheckIcon className="h-10 text-blue-700 w-22" />
      </div>
      <div className="flex flex-col mx-auto space-y-2">
        <button type="button" className="btn-large" onClick={logoutlisntner}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
