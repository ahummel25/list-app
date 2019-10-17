import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import Login from "../pages/Login";
import Home from "../pages/Home";
import { useAuthValue } from "../services/Auth";

import colors from "../styles/colors";

const Routes = () => {
  const context = useAuthValue();
  return (
    <Router sceneStyle={{ backgroundColor: colors.containerBackgroundColor }}>
      <Stack hideNavBar key="root">
        {context.isSignedIn ? (
          <Scene key="home" path="/" component={Home} />
        ) : (
          <Scene key="login" path="/login" component={Login} initial />
        )}
      </Stack>
    </Router>
  );
};

export default Routes;
