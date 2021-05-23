import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image as RNImage,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({
  title,
  image,
  author,
  authorImage,
  stars,
  clickableText,
  onPress,
}: any) => {
  return (
    <SafeAreaView style={styles.card}>
      {/* <RNImage source={{ uri: image }} style={styles.image} /> */}
      <SafeAreaView style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.stars}>{stars}/5</AppText>
        <Image uri={authorImage} style={styles.authorImage} />
        <AppText style={styles.author}>{author}</AppText>
        <TouchableOpacity onPress={onPress}>
          <AppText style={styles.clickableText}>{clickableText}</AppText>
        </TouchableOpacity>
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
    width: 1000,
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
  clickableText: {
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
