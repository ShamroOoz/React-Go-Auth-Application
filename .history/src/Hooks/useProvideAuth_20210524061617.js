import { useState, useEffect } from "react";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let { data } = await axios.get("http://localhost:4000/api/register");
      setUser(data);
    }

    fetchMyAPI();
  }, []);

  const signup = async (formdata) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/register",
        formdata
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const me = (data) => API.get("/api/user");
  const signin = (data) => API.post("/api/login", data);
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
