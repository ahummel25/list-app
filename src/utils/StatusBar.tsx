import React, { FC } from "react";
import {
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View
} from "react-native";

interface StatusBarProps {
  backgroundColor: string;
  barStyle: StatusBarStyle;
}

const CustomStatusBar: FC<StatusBarProps> = ({ backgroundColor, barStyle }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      translucent
      backgroundColor={backgroundColor}
      barStyle={barStyle}
    />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 45 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});

export default CustomStatusBar;
