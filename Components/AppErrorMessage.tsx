import React from "react";
import { View, StyleSheet, Text } from "react-native";

const AppErrorMessage = ({ error, visible, style }: any) => {
  if (!visible || !error) {
    return null;
  }
  return (
    <View style={style}>
      <Text style={styles.errorMessageText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessageText: {
    color: "red",
    fontSize: 20,
  },
});

export default AppErrorMessage;
