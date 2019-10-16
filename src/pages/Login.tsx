import React, { FC, useEffect, useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

import Logo from "../components/Logo";
import colors from "../styles/colors";

const Login: FC<{}> = (): JSX.Element => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  useEffect((): void => {
    if (username && password) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [username, password]);

  return (
    <>
      <Spinner
        visible={isLoggingIn}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <Logo />
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => setUsername(text)}
          placeholder="Username"
          placeholderTextColor={colors.login.placeholderTextColor}
        />
        <TextInput
          secureTextEntry
          style={styles.inputBox}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={colors.login.placeholderTextColor}
        />
        <TouchableOpacity
          style={styles.loginButton}
          disabled={submitDisabled}
          onPress={(): void => {
            setIsLoggingIn(true);
          }}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>
          Don't have an account yet?{" "}
          <Text
            style={styles.signupLink}
            onPress={(): void => {
              Linking.openURL("https://google.com");
            }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  signupText: {
    color: "rgba(255, 255, 255, 0.7)"
  },
  signupTextContainer: {
    alignItems: "center",
    color: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    flexGrow: 1,
    bottom: 10
  },
  signupLink: {
    textDecorationLine: "underline"
  },
  spinnerTextStyle: {
    color: "#FFF"
  }
});

export default Login;
