import React, { useState, useEffect } from "react";

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("hookk");
  }, []);

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
};
