import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import AppButton from "../Components/AppButton";
import AppImage from "../Components/AppImage";
import AppLogoText from "../Components/AppLogoText";
import colors from "../Config/colors";

const WelcomeScreen = () => {
  return (
    <View>
      <AppLogoText style={styles.logoText}>
        Where Reviews Take Place
      </AppLogoText>
      <AppLogoText>VinaysReviews</AppLogoText>
      <View>
        <AppImage style={styles.image} />
      </View>
      <AppButton
        onPress={() => console.log("YEET")}
        title="Login"
        style={styles.loginButton}
      />
      <SafeAreaView style={styles.buttonSpace1} />
      <AppButton onPress={() => console.log("YEET")} title="Register" />
      <SafeAreaView style={styles.buttonSpace2} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "400",
  },
  image: {
    marginTop: 135,
    top: 120,
    width: "90%",
    height: "90%",
  },
  buttonSpace1: {
    width: 20,
    height: 120,
    marginBottom: -100,
  },
  buttonSpace2: {
    width: 20,
    height: 110,
    marginBottom: -200,
  },
  loginButton: {
    backgroundColor: colors.lightGreen,
    alignSelf: "center",
    width: "90%",
    borderRadius: 25,
    height: 55,
    bottom: -220,
  },
});

export default WelcomeScreen;
