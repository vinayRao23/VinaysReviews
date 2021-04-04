import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import routes from "./routes";

const AuthStack = createStackNavigator();
const AuthStackNavigator = ({}: any) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={routes.WELCOME_SCREEN}
        component={WelcomeScreen}
        options={{ title: "Back", headerShown: false }}
      />
      <AuthStack.Screen
        name={routes.LOGIN_SCREEN}
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <AuthStack.Screen
        name={routes.REGISTER_SCREEN}
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
