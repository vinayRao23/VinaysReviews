import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";

const AuthStack = createStackNavigator();
const AuthStackNavigator = ({}: any) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: "Back", headerShown: false }}
      />
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
