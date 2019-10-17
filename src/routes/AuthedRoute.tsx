import React from "react";
import { Scene } from "react-native-router-flux";

import Home from "../pages/Home";
import Login from "../pages/Login";

const AuthedRoute = ({ component, key, isSignedIn, path }): JSX.Element => {
  //const isSignedIn = false;

  return (
    <>
      {isSignedIn ? (
        <Scene component={component} key={key} path={path} />
      ) : (
        <Scene key="login" path="/login" component={Login} initial />
      )}
    </>
  );
};

export default AuthedRoute;
