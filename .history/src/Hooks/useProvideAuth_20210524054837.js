import { useState, useEffect } from "react";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("hookk");
  }, []);

  const me = (data) => API.get("/api/user");
  const signin = (data) => API.post("/api/login", data);
  const signup = (data) => API.post("/api/register", data);
  const signout = () => API.get("/api/logout");

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    me,
  };
};
