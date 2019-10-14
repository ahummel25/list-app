import React, { FC } from "react";
import { Text, TextInput, View } from "react-native";

const Login: FC<{}> = () => (
  <View>
    <Text>Login to the app</Text>
    <TextInput />
    <TextInput />
  </View>
);

export default Login;
