import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const AppErrorMessage = ({ error, visible, style }: any) => {
  if (!visible || !error) {
    return null;
  }
  return (
    <View style={style}>
      <Text style={[styles.errorMessageText, style]}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessageText: {
    color: colors.red,
    fontSize: 20,
    bottom: -200,
    paddingLeft: 30,
  },
});

export default AppErrorMessage;
