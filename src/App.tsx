import React, { FC } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";

import Login from "./pages/Login";
import Logo from "./components/Logo";
import CustomStatusBar from "./utils/StatusBar";
import colors from "./styles/colors";

const App: FC<{}> = () => (
  <View style={styles.container}>
    <CustomStatusBar
      backgroundColor={colors.statusBar.backgroundColor}
      barStyle="light-content"
    />
    <Logo />
    <Login />
    <View style={styles.signupTextContainer}>
      <Text>
        Don't have an account yet?{" "}
        <Text
          style={styles.signupText}
          onPress={() => Linking.openURL("http://google.com")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.login.containerBackgroundColor
  },
  signupTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    bottom: 50
  },
  signupText: {
    textDecorationLine: "underline"
  }
});

export default registerRootComponent(App);
