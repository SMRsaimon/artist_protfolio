import React, { useContext } from "react";
import { useEffect } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../../App";
import { logInUserData } from "./LogInUserData";


const PrivateRoute = ({ children, ...rest }) => {
  const { loginUser, setLoginUser } = useContext(userContext);

  

  




  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginUser?.email || logInUserData() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
