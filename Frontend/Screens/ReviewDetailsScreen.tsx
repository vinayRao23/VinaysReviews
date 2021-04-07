import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import AppText from "../Components/AppText";
import colors from "../Config/colors";

const ReviewDetailsScreen = ({}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/test.png")} />
      <ScrollView>
        <AppText style={styles.title}>
          Harry Potter and the Half Blood Prince
        </AppText>
        <AppText style={styles.subTitle}>
          This book is so goated if u know what I mean cuh sunny This book is so
          goated if u know what I mean cuh sunny bunny bunny This book is so
          goated if u know what I mean cuh sunny bunny This book is so goated if
          u know what I mean cuh sunny bunny This book is so goated if u know
          what I mean cuh sunny bunny This book is so goated if u know what I
          mean cuh sunny bunny This book is so goated if u know what I mean cuh
          sunny bunny This book is so goated if u know what I mean cuh sunny
          bunny This book is so goated if u know what I mean cuh sunny bunny
          This book is so goated if u know what I mean cuh sunny bunny This book
          is so goated if u know what I mean cuh sunny bunny This book is so
          goated if u know what I mean cuh sunny bunny This book is so goated if
          u know what I mean cuh sunny bunny This book is so goated if u know
          what I mean cuh sunny bunny This book is so goated if u know what I
          mean cuh sunny bunny cuh sunny bunny This book is so goated if u know
          what I mean cuh sunny bunny This book is so goated if u know what I
          mean cuh sunny bunny cuh sunny bunny This book is so goated if u know
          what I mean cuh sunny bunny This book is so goated if u know what I
          mean cuh sunny bunny what I mean cuh sunny bunny This book is so
          goated if u know what I mean cuh sunny bunny cuh sunny bunny This book
          is so goated if u know what I mean cuh sunny bunny This book is so
          goated if u know what I mean cuh sunny bunny what I mean cuh sunny
          bunny This book is so goated if u know what I mean cuh sunny bunny cuh
          sunny bunny This book is so goated if u know what I mean cuh sunny
          bunny This book is so goated if u know what I mean cuh sunny bunny
        </AppText>
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
