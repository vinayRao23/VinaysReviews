import React, { useContext } from "react";
import {
  FlatList,
  Image as RNImage,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import { useQuery } from "@apollo/client";
import { getMyReviews } from "../Apollo/GetMyReviewQuery";
import { AuthContext } from "../Context/authContext";
import routes from "../Navigation/routes";
import AppText from "../Components/AppText";
import colors from "../config/colors";

const MyReviewsScreen = ({ navigation }: any) => {
  const authContext = useContext(AuthContext);
  const { data, loading } = useQuery(getMyReviews, {
    variables: { authorid: authContext.user.id },
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <>
      <FlatList
        data={data && data.getMyReviews}
        keyExtractor={(c) => c.id}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(routes.DETAILS, { id: item.id })
              }
            >
              <SafeAreaView style={styles.card}>
                <RNImage source={{ uri: item.image }} style={styles.image} />
                <SafeAreaView style={styles.detailsContainer}>
                  <AppText style={styles.title}>{item.title}</AppText>
                  <AppText style={styles.stars}>{item.stars}/5</AppText>
                  <Image
                    uri={item.author.profilePicture}
                    style={styles.authorImage}
                  />
                  <AppText style={styles.author}>
                    {item.author.username}
                  </AppText>
                  <TouchableOpacity onPress={() => console.log("FATTY")}>
                    <AppText style={styles.clickableText}>
                      {item.clickableText}
                    </AppText>
                  </TouchableOpacity>
                </SafeAreaView>
              </SafeAreaView>
            </TouchableOpacity>
          );
        }}
      />
    </>
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

export default MyReviewsScreen;
