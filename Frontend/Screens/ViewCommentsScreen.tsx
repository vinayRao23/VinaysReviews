import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../Components/AppText";
import colors from "../config/colors";

const ViewCommentsScreen = ({}: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/profileImage.png")}
        style={styles.authorImage}
      />
      <AppText style={styles.subTitle}>
        Vinay Rao: WOW This is TOTALLY CORRECT WHOO
      </AppText>
      <Image
        source={require("../assets/profileImage.png")}
        style={styles.authorImage}
      />
      <AppText style={styles.subTitle}>Nikhil Rao: THIS REVIEW IS BARF</AppText>
      <Image
        source={require("../assets/profileImage.png")}
        style={styles.authorImage}
      />
      <AppText style={styles.subTitle}>Avinash Rao: noice</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subTitle: {
    fontSize: 18,
    paddingLeft: 63,
    bottom: -13,
    color: colors.black,
    fontFamily: "Avenir-Medium",
    marginBottom: 10,
    fontWeight: "600",
  },
  authorImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginLeft: 10,
    bottom: -47,
  },
});

export default ViewCommentsScreen;
