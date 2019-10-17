import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { registerRootComponent } from "expo";

import MainRoutes from "./routes/MainRoutes";
import { AuthProvider } from "./services/Auth";
import CustomStatusBar from "./utils/StatusBar";
import colors from "./styles/colors";

const App: FC<{}> = () => (
  <View style={styles.container}>
    <AuthProvider>
      <CustomStatusBar
        backgroundColor={colors.statusBar.backgroundColor}
        barStyle="light-content"
      />
      <MainRoutes />
    </AuthProvider>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default registerRootComponent(App);
