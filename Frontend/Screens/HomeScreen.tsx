import React, { Fragment } from "react";
import { StyleSheet, FlatList, SafeAreaView, ScrollView } from "react-native";
import AppImage from "../Components/AppImage";
import Card from "../Components/Card";

const HomeScreen = () => {
  return (
    <Fragment>
      <AppImage style={styles.image} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <Card
            title="Harry Potter"
            author="Vinay Rao"
            bookImage={require("../assets/test.png")}
            endText="View 8 Comments"
            profileImage={require("../assets/profileImage.png")}
          />
          <Card
            title="Harry Potter"
            author="Vinay Rao"
            bookImage={require("../assets/test.png")}
            endText="View 8 Comments"
            profileImage={require("../assets/profileImage.png")}
          />
          <Card
            title="Harry Potter"
            author="Vinay Rao"
            bookImage={require("../assets/test.png")}
            endText="View 8 Comments"
            profileImage={require("../assets/profileImage.png")}
          />
          <Card
            title="Harry Potter"
            author="Vinay Rao"
            bookImage={require("../assets/test.png")}
            endText="View 8 Comments"
            profileImage={require("../assets/profileImage.png")}
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    top: 30,
    width: "80%",
    height: "20%",
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
