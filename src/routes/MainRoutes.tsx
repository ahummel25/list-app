import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import AuthedRoute from "../routes/AuthedRoute";

import Login from "../pages/Login";
import Home from "../pages/Home";

import colors from "../styles/colors";

// TODO: determine signed in user
const isSignedIn = false;

const Routes = () => (
  <Router sceneStyle={{ backgroundColor: colors.containerBackgroundColor }}>
    <Stack hideNavBar key="root">
      {isSignedIn ? (
        <Scene key="home" path="/" component={Home} />
      ) : (
        <Scene key="login" path="/login" component={Login} initial />
      )}
    </Stack>
  </Router>
);

export default Routes;
