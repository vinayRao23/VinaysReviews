import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, ...rest }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightBlue,
    alignSelf: "center",
    width: "90%",
    borderRadius: 25,
    bottom: -210,
    height: 55,
  },
  buttonText: {
    fontSize: 23,
    paddingTop: 15,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: colors.white,
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default AppButton;
