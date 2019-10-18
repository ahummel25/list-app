import React, { FC, useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { ErrorMessage, Formik, FormikActions, FormikProps } from "formik";
import Spinner from "react-native-loading-spinner-overlay";
import { validate as emailValidation } from "email-validator";

import Logo from "../components/Logo";
import colors from "../styles/colors";

interface ILoginValues {
  userName: string;
  password: string;
}

const LoginError: FC<{}> = ({ children }): JSX.Element => (
  <View>
    <Text style={colors.error}>{children}</Text>
  </View>
);

const handleSubmit = async (
  values: ILoginValues,
  { setFieldError }: FormikActions<ILoginValues>,
  setIsLoggingIn: (isLoggingIn: boolean) => void
): Promise<void> => {
  if (!emailValidation(values.userName)) {
    setFieldError("userName", "Invalid email");
    return;
  }
  setIsLoggingIn(true);
};

const Login: FC<{}> = (): JSX.Element => {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  return (
    <>
      <Spinner
        visible={isLoggingIn}
        textContent={"Loading..."}
        textStyle={colors.spinnerTextStyle}
      />
      <Logo />
      <Formik
        initialValues={{
          userName: null,
          password: null
        }}
        onSubmit={async (
          values: ILoginValues,
          props: FormikActions<ILoginValues>
        ) => {
          await handleSubmit(values, props, setIsLoggingIn);
        }}
      >
        {(props: FormikProps<ILoginValues>): JSX.Element => (
          <>
            <View style={styles.container}>
              <View style={styles.containerInput}>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={props.handleChange("userName")}
                  onBlur={props.handleBlur("userName")}
                  placeholder="Username"
                  placeholderTextColor={colors.login.placeholderTextColor}
                  value={props.values.userName}
                />
              </View>
              <View style={styles.containerInput}>
                <ErrorMessage component={LoginError} name="userName" />
                <TextInput
                  secureTextEntry
                  style={styles.inputBox}
                  onChangeText={props.handleChange("password")}
                  onBlur={props.handleBlur("password")}
                  placeholder="Password"
                  placeholderTextColor={colors.login.placeholderTextColor}
                  value={props.values.password}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.loginButton}
                  disabled={!props.values.userName || !props.values.password}
                  onPress={(): void => {
                    props.handleSubmit();
                  }}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>

      <View style={styles.signupTextContainer}>
        <Text style={colors.signupText}>
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
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  containerInput: {
    alignItems: "center",
    backgroundColor: colors.login.inputBox.backgroundColor,
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    marginVertical: 8
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
    borderBottomWidth: 0,
    borderColor: colors.login.inputBox.borderColor,
    borderWidth: 1,
    color: colors.white,
    elevation: 1,
    fontWeight: "bold",
    paddingHorizontal: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: 300
  },
  signupTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    bottom: 10
  },
  signupLink: {
    textDecorationLine: "underline"
  }
});

export default Login;
