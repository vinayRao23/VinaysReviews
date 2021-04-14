import React, { Fragment } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ListItem from "../Components/ListItem";
import colors from "../config/colors";

const MyAccountScreen = () => {
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <ListItem
          image={require("../assets/profileImage.png")}
          title="Hi"
          subTitle="Bye"
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 30,
    height: 100,
    top: 20,
  },
});

export default MyAccountScreen;
