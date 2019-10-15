import React, { FC } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

import colors from "../styles/colors";

const Login: FC<{}> = () => (
  <View style={styles.container}>
    <TextInput
      style={styles.inputBox}
      placeholder="Username"
      placeholderTextColor={colors.login.placeholderTextColor}
    />
    <TextInput
      secureTextEntry={true}
      style={styles.inputBox}
      placeholder="Password"
      placeholderTextColor={colors.login.placeholderTextColor}
    />
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    bottom: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loginButton: {
    backgroundColor: colors.login.buttonBackgroundColor,
    borderRadius: 25,
    marginVertical: 8,
    paddingVertical: 12,
    width: 300
  },
  loginButtonText: {
    color: colors.login.buttonTextColor,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  },
  inputBox: {
    borderColor: colors.login.inputBox.borderColor,
    borderRadius: 25,
    backgroundColor: colors.login.inputBox.backgroundColor,
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 16,
    width: 300
  }
});

export default Login;
