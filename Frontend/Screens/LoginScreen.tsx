import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import storage from "../auth/storage";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppImage from "../Components/AppImage";
import AppLogoText from "../Components/AppLogoText";
import AppRedirect from "../Components/AppRedirect";
import AppSubmitButton from "../Components/AppSubmitButton";
import colors from "../config/colors";
import { client } from "../App";
import routes from "../Navigation/routes";
import { LOGIN } from "../Apollo/LoginMutation";
import AppErrorMessage from "../Components/AppErrorMessage";
import { AuthContext } from "../Context/authContext";
import jwtDecode from "jwt-decode";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = ({ navigation }: any) => {
  const [apolloErrorVisible, setApolloErrorVisible] = useState(false);
  const authContext = useContext(AuthContext);
  const handleSubmit = async (values: any) => {
    try {
      const result = await client.mutate({
        mutation: LOGIN,
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      await storage.storeToken(result.data.loginUser);
      const user = jwtDecode(result.data.loginUser);
      authContext.setUser(user);
    } catch (error) {
      console.log(error);
      setApolloErrorVisible(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppImage />
      <AppLogoText style={styles.logoText}>VinaysReviews: Login</AppLogoText>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          isInvalid={true}
        />
        <AppErrorMessage
          error="Invalid email or password"
          visible={apolloErrorVisible}
        />
        <AppFormField
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          isInvalid={true}
          secureTextEntry
        />
        <AppSubmitButton title="Login" style={styles.loginButton} />
        <AppRedirect
          text="Don't Have an Account?"
          clickableText=" Create One Here"
          onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
        />
      </AppForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logoText: {
    fontFamily: "Avenir-Medium",
    fontWeight: "700",
  },
  loginButton: {
    backgroundColor: colors.lightGreen,
    alignSelf: "center",
    width: "90%",
    borderRadius: 25,
    height: 55,
    bottom: -210,
  },
});

export default LoginScreen;
