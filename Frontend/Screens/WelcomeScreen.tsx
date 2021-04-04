import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import AppButton from "../Components/AppButton";
import AppImage from "../Components/AppImage";
import AppLogoText from "../Components/AppLogoText";
import colors from "../Config/colors";
import routes from "../Navigation/routes";

interface IProps {
  navigation: NavigationProp<any>;
}

const WelcomeScreen = ({ navigation }: IProps) => {
  return (
    <View style={styles.container}>
      <AppLogoText style={styles.logoText}>
        Where Reviews Take Place
      </AppLogoText>
      <AppLogoText>VinaysReviews</AppLogoText>
      <View>
        <AppImage style={styles.image} />
      </View>
      <AppButton
        onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
        title="Login"
        style={styles.loginButton}
      />
      <SafeAreaView style={styles.buttonSpace1} />
      <AppButton
        onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
        title="Register"
      />
      <SafeAreaView style={styles.buttonSpace2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logoText: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "400",
  },
  image: {
    marginTop: 90,
    top: 130,
    width: "90%",
    height: "90%",
  },
  buttonSpace1: {
    width: 20,
    height: 120,
    marginBottom: -280,
  },
  buttonSpace2: {
    width: 20,
    height: 110,
    marginBottom: -320,
  },
  loginButton: {
    backgroundColor: colors.lightGreen,
    alignSelf: "center",
    width: "90%",
    borderRadius: 25,
    height: 55,
    bottom: -40,
  },
});

export default WelcomeScreen;
