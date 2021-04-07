import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ReviewDetailsScreen from "../Screens/ReviewDetailsScreen";
import ViewCommentsScreen from "../Screens/ViewCommentsScreen";

const FeedStack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, title: "Back" }}
      />
      <FeedStack.Screen
        name="Details"
        component={ReviewDetailsScreen}
        options={{ title: "Details" }}
      />
      <FeedStack.Screen
        name="ViewComments"
        component={ViewCommentsScreen}
        options={{ title: "View Comments" }}
      />
    </FeedStack.Navigator>
  );
};

export default FeedNavigator;
