import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../Config/colors";
import HomeScreen from "../Screens/HomeScreen";
import TodaysReviewsScreen from "../Screens/TodaysReviewsScreen";
import CreateReviewScreen from "../Screens/CreateReviewScreen";
import MyReviewsScreen from "../Screens/MyReviewsScreen";
import MyAccountScreen from "../Screens/MyAccountScreen";

const AppTabNavigator = createMaterialBottomTabNavigator();

const AppNavigator = ({}: any) => {
  return (
    <AppTabNavigator.Navigator activeColor={colors.black}>
      <AppTabNavigator.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />,
          tabBarColor: colors.darkBlue,
        }}
      />
      <AppTabNavigator.Screen
        name="TodaysReviews"
        component={TodaysReviewsScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="fire" size={28} />,
          tabBarColor: colors.lightPurple,
          title: "Day's Reviews",
        }}
      />
      <AppTabNavigator.Screen
        name="+"
        component={CreateReviewScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus-circle" size={26} />
          ),
          tabBarColor: colors.lemonYellow,
          title: "Add Review",
        }}
      />
      <AppTabNavigator.Screen
        name="MyReviews"
        component={MyReviewsScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="book" size={26} />,
          tabBarColor: colors.brightMagenta,
          title: "My Reviews",
        }}
      />
      <AppTabNavigator.Screen
        name="Account"
        component={MyAccountScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="account" size={26} />,
          tabBarColor: colors.tourqouise,
        }}
      />
    </AppTabNavigator.Navigator>
  );
};

export default AppNavigator;
