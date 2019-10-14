import React, { FC } from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";

import Login from "./pages/Login";
import CustomStatusBar from "./utils/StatusBar";

const App: FC<{}> = () => (
  <View style={styles.container}>
    <CustomStatusBar backgroundColor="#1c313a" barStyle="light-content" />
    <View style={styles.content}>
      <Login />
    </View>
  </View>
);

//const APPBAR_HEIGHT = Platform.OS === "ios" ? 24 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: "#455a64",
    // alignItems: "center",
    // justifyContent: "center"
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});

export default registerRootComponent(App);
