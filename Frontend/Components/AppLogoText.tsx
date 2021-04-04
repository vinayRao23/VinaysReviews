import React from "react";
import { Text, StyleSheet } from "react-native";

const AppLogoText = ({ style, children, ...rest }: any) => {
  return (
    <Text style={[styles.logoText, style]} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: "500",
    alignSelf: "center",
    bottom: -120,
    marginBottom: -60,
  },
});

export default AppLogoText;
