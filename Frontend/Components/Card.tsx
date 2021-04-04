import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../Config/colors";
import AppText from "./AppText";

const Card = ({ title, author, bookImage, endText, profileImage }: any) => {
  return (
    <View style={styles.container}>
      <Image source={bookImage} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <Image source={profileImage} style={styles.profileImage} />
        <AppText style={styles.author}>{author}</AppText>
        <AppText style={styles.endText}>{endText}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlack,
    borderRadius: 10,
    marginTop: 200,
    height: 250,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 0.5,
  },
  image: {
    height: 250,
    width: 145,
    top: 10,
    left: 119,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: -150,
  },
  title: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 10,
    marginTop: 5,
    fontWeight: "600",
    color: colors.white,
    bottom: 90,
  },
  author: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 20,
    paddingLeft: 70,
    paddingBottom: 10,
    color: colors.white,
    bottom: 118,
  },
  endText: {
    marginTop: 15,
    fontSize: 15,
    paddingLeft: 20,
    bottom: 25,
    fontWeight: "500",
    color: colors.white,
  },
  profileImage: {
    left: 18,
    width: "10%",
    height: 40,
    borderRadius: 20,
    top: -75,
  },
});

export default Card;
