import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ReviewDetailsScreen from "../Screens/ReviewDetailsScreen";
import ViewCommentsScreen from "../Screens/ViewCommentsScreen";
import routes from "./routes";

const FeedStack = createStackNavigator();
const FeedNavigator = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ headerShown: false, title: "Back" }}
      />
      <FeedStack.Screen
        name={routes.DETAILS}
        component={ReviewDetailsScreen}
        options={{ title: "Details" }}
      />
      <FeedStack.Screen
        name={routes.VIEW_COMMENTS}
        component={ViewCommentsScreen}
        options={{ title: "View Comments" }}
      />
    </FeedStack.Navigator>
  );
};

export default FeedNavigator;
