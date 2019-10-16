import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import colors from "../styles/colors";

const Logo: FC<{}> = (): JSX.Element => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require("../../assets/bulleted-list.png")}
    />
    <Text style={styles.textStyle}>Welcome to List</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  logo: {
    height: 200,
    width: 180
  },
  textStyle: {
    fontSize: 20,
    color: colors.login.textColor,
    marginVertical: 20
  }
});

export default Logo;
