import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const AppRedirect = ({ text, clickableText, onPress, style }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppText style={[styles.textStyle, style]}>
        {text}
        <TouchableOpacity onPress={onPress}>
          <AppText style={styles.clickableTextStyle}>{clickableText}</AppText>
        </TouchableOpacity>
      </AppText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    alignSelf: "center",
    justifyContent: "center",
  },
  textStyle: {
    bottom: -20,
    fontFamily: "Avenir-Medium",
  },
  clickableTextStyle: {
    bottom: -1.25,
    color: colors.hyperlinkBlue,
  },
});

export default AppRedirect;
