import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import AppLogoText from "../Components/AppLogoText";
import Card from "../Components/Card";

const HomeScreen = () => {
  return (
    <Fragment>
      <View>
        <AppLogoText style={styles.headerText}>VinaysReviews: Home</AppLogoText>
      </View>
      <View>
        <Card
          title="Harry Potter"
          author="J.K. Rowling"
          bookImage={require("../assets/test.png")}
          endText="View 8 Comments"
          profileImage={require("../assets/profileImage.png")}
        />
      </View>
      <View>
        <Card
          title="Harry Potter"
          author="J.K. Rowling"
          bookImage={require("../assets/test.png")}
          endText="View 8 Comments"
          profileImage={require("../assets/profileImage.png")}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  headerText: {
    top: 100,
  },
});

export default HomeScreen;
