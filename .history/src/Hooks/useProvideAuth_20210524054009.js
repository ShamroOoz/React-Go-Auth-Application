import { useState, useEffect } from "react";
import axios from "axios";

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("hookk");
  }, []);

  const signin = (data) => {
    console.log(data);
  };

  const signup = (data) => {
    console.log(data);
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
