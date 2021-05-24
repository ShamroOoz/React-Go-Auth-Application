import React, { useState, useEffect } from "react";
import { FireIcon, MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { useAuth } from "../Context/Globalcontext.js";
import { useHistory, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [togglemenu, settogglemenu] = useState(false);
  const [isAuth, setisAuth] = useState(false);
  const { signout, user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setisAuth(true);
      history.push("/");
    }
  }, [user, history, location]);

  const logoutlisntner = async () => {
    try {
      await signout();
      history.push("/login");
    } catch (error) {
      console.log("Something wrong in logout function in Home", error);
    }
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between py-2 bg-white border-t-2 border-blue-700 border-solid shadow-md md:px-10">
        <div className={`flex justify-between w-full p-3 md:w-auto `}>
          <Link
            to="/"
            className="flex items-center flex-shrink-0 mr-8 text-blue-700"
          >
            <FireIcon className="w-5 h-9" />
            <span className="text-2xl subpixel-antialiased font-semibold tracking-tight">
              Go Auth App
            </span>
          </Link>
          {/* toggle menu button */}
          <div className="block md:hidden ">
            <button
              id="nav"
              className="btn-toggle-menu"
              onClick={() => settogglemenu((prevtogglemenu) => !prevtogglemenu)}
            >
              <MenuIcon className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div
          className={`w-full block flex-grow md:flex md:items-center md:w-auto md:px-2  ${
            togglemenu ? "block" : "hidden"
          }`}
        >
          <div className="font-bold text-blue-700 text-md md:flex-grow ">
            {isAuth && (
              <Link to="/" className="btn-menu">
                Home
              </Link>
            )}
          </div>
          {/* search */}
          <div className="relative hidden mx-auto text-gray-600 md:block">
            <input
              className="btn-search"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 mt-3 mr-2 focus:outline-none"
            >
              <SearchIcon className="w-4 h-4 stroke-1 " />
            </button>
          </div>
          {/* Button */}
          <div className="flex items-center justify-center">
            {isAuth ? (
              <div>
                <span>
                  <button
                    type="button"
                    className="inline-block btn-action"
                    onClick={logoutlisntner}
                  >
                    Log Out
                  </button>
                </span>
              </div>
            ) : (
              <>
                <Link to="/singup" className="btn-action">
                  Sign Up
                </Link>
                <Link to="/login" className="btn-action ">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
