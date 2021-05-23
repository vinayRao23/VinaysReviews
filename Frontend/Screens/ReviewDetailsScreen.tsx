import React from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import AppText from "../Components/AppText";
import { getOneReview } from "../Apollo/GetOneReviewQuery";
import colors from "../config/colors";
import { useQuery } from "@apollo/client";

const ReviewDetailsScreen = ({ route }: any) => {
  const { data, loading } = useQuery(getOneReview, {
    variables: { id: route.params.id },
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.getOneReview.image }} />
      <ScrollView>
        <AppText style={styles.title}>{data.getOneReview.title}</AppText>
        <AppText style={styles.subTitle}>{data.getOneReview.body}</AppText>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    padding: 20,
    fontSize: 24,
    paddingLeft: 16,
    fontFamily: "Avenir-Medium",
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 18,
    paddingLeft: 16,
    bottom: 15,
    color: colors.black,
    fontFamily: "Avenir-Medium",
    fontWeight: "600",
  },
});

export default ReviewDetailsScreen;
