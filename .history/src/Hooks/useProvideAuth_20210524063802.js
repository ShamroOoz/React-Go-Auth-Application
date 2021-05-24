import { useState, useEffect } from "react";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let { data } = await API.get("/api/user");
        setUser(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    fetchMyAPI();
  }, []);

  const signup = async (formdata) => {
    try {
      const { data } = await API.post("/api/register", formdata);
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const signin = async (formdata) => {
    try {
      const { data } = await API.post("/api/login", formdata);
      if (data) {
        setUser(data.user);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const me = (data) => API.get("/api/user");

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
