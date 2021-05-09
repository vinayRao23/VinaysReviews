import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import { client } from "../App";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppImage from "../Components/AppImage";
import AppLogoText from "../Components/AppLogoText";
import AppRedirect from "../Components/AppRedirect";
import AppSubmitButton from "../Components/AppSubmitButton";
import colors from "../config/colors";
import routes from "../Navigation/routes";
import { REGISTER } from "../Apollo/RegisterMutation";
import storage from "../auth/storage";
import { AuthContext } from "../Context/authContext";
import jwtDecode from "jwt-decode";
import AppErrorMessage from "../Components/AppErrorMessage";
import { generateId } from "../Utils/GenerateId";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = ({ navigation }: any) => {
  const [apolloErrorVisible, setApolloErrorVisible] = useState(false);
  const authContext = useContext(AuthContext);
  const handleSubmit = async (values: any) => {
    try {
      const result = await client.mutate({
        mutation: REGISTER,
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
          id: generateId(24),
        },
      });
      await storage.storeToken(result.data.registerUser);
      const user = jwtDecode(result.data.registerUser);
      authContext.setUser(user);
    } catch (error) {
      console.log(error);
      setApolloErrorVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppImage />
      <AppLogoText style={styles.logoText}>VinaysReviews: Register</AppLogoText>
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={handleSubmit}
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
        <AppErrorMessage
          error="Account with the given email already exists"
          visible={apolloErrorVisible}
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
