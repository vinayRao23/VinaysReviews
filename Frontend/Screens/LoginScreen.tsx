import React from "react";
import { SafeAreaView } from "react-native";
import * as Yup from "yup";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppImage from "../Components/AppImage";
import AppLogoText from "../Components/AppLogoText";
import AppSubmitButton from "../Components/AppSubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <AppImage />
      <AppLogoText>VinaysReviews: Login</AppLogoText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: string) => console.log(values)}
        validationSchema={validationSchema}
      >
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
        <AppSubmitButton onPress={() => console.log("working")} title="Login" />
      </AppForm>
    </SafeAreaView>
  );
};

export default LoginScreen;
