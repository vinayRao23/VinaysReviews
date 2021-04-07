import React from "react";
import { SafeAreaView, StyleSheet, Image } from "react-native";
import colors from "../Config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image, author, authorImage, stars }: any) => {
  return (
    <SafeAreaView style={styles.card}>
      <Image source={image} style={styles.image} />
      <SafeAreaView style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.stars}>{stars}</AppText>
        <Image source={authorImage} style={styles.authorImage} />
        <AppText style={styles.author}>{author}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    width: "90%",
    height: 370,
    alignSelf: "center",
    marginTop: 70,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: "600",
    fontFamily: "Avenir-Medium",
  },
  stars: {
    fontSize: 22,
    left: 330,
    paddingTop: 10,
    fontWeight: "600",
    fontFamily: "Avenir-Medium",
  },
  author: {
    fontSize: 15,
    paddingLeft: 62,
    paddingTop: 30,
    bottom: 93,
    fontWeight: "600",
    fontFamily: "Avenir-Medium",
  },
  authorImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginLeft: 15,
    bottom: 33,
  },
  subTitle: {
    bottom: 30,
    fontWeight: "bold",
    color: colors.hyperlinkBlue,
    paddingLeft: 19,
    paddingBottom: 10,
    textDecorationLine: "underline",
    fontFamily: "Avenir-Medium",
    fontSize: 15,
  },
});

export default Card;
