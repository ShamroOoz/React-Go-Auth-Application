import { useState, useEffect } from "react";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/api" });

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("hookk");
  }, []);

  const me = (data) => API.get("/user");
  const signin = (data) => API.post("/login", data);
  const signup = (data) => API.post("/register", data);
  const signout = () => API.get("/logout");

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    me,
  };
};
