import React from "react";
import { Image, StyleSheet } from "react-native";

const AppImage = ({ style }: any) => {
  return (
    <Image
      source={require("../assets/Logo.png")}
      style={[styles.image, style]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    marginBottom: -150,
  },
});

export default AppImage;
