import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/Globalcontext.js";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  const isUser = user;
  return (
    <Route {...rest}>
      {() => {
        //  return isUser ?  <Redirect to="/" /> : children ;
        return isUser ? children : <Redirect to="/login" />;
      }}
    </Route>
  );
};
export default PrivateRoute;
