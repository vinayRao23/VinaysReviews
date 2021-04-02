import React from "react";
import { SafeAreaView } from "react-native";
import * as Yup from "yup";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppImage from "../Components/AppImage";
import AppLogoText from "../Components/AppLogoText";
import AppSubmitButton from "../Components/AppSubmitButton";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <AppImage />
      <AppLogoText>VinaysReviews: Register</AppLogoText>
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
        <AppSubmitButton
          onPress={() => console.log("working")}
          title="Register"
        />
      </AppForm>
    </SafeAreaView>
  );
};

export default RegisterScreen;
