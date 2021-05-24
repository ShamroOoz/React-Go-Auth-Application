import React, { useState, useEffect, useContext, createContext } from "react";

export useProvideAuth =() => {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return;
  };

  const signup = (email, password) => {
    return;
  };
  const signout = () => {
    return;
  };

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
  };
}
