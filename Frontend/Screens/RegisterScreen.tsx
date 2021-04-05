import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppImage from "../Components/AppImage";
import AppLogoText from "../Components/AppLogoText";
import AppRedirect from "../Components/AppRedirect";
import AppSubmitButton from "../Components/AppSubmitButton";
import colors from "../Config/colors";
import routes from "../Navigation/routes";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppImage />
      <AppLogoText style={styles.logoText}>VinaysReviews: Register</AppLogoText>
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values: string) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          name="username"
        />
        <AppFormField
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
        />
        <AppFormField
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          secureTextEntry
        />
        <AppSubmitButton title="Register" />
        <AppRedirect
          text="Already Have an Account?"
          clickableText=" Login Here"
          onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
        />
      </AppForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontFamily: "Avenir-Medium",
    fontWeight: "700",
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default RegisterScreen;
