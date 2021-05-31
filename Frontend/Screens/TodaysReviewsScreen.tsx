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

const TodaysReviewsScreen = ({ navigation }: any) => {
  var today: any = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var day = days[new Date().getDay()];

  today = mm + "/" + dd + "/" + yyyy;
  const authContext = useContext(AuthContext);
  const { data, loading } = useQuery(getMyReviews, {
    variables: { authorid: authContext.user.id },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      style={{ backgroundColor: "#EEFAFF" }}
      data={data && data.getMyReviews}
      keyExtractor={(c) => c.id}
      renderItem={({ item, index }): any => {
        if (index > -1 && Math.round(Date.now() - item.time) / 60000 <= 1440) {
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
                  {item.stars === 0 ? (
                    <RNImage
                      source={require("../assets/zerostars.png")}
                      style={styles.starsImage}
                    />
                  ) : item.stars === 1 ? (
                    <RNImage
                      source={require("../assets/onestar.png")}
                      style={styles.starsImage}
                    />
                  ) : item.stars === 2 ? (
                    <RNImage
                      source={require("../assets/twostars.png")}
                      style={styles.starsImage}
                    />
                  ) : item.stars === 3 ? (
                    <RNImage
                      source={require("../assets/threestars.png")}
                      style={styles.starsImage}
                    />
                  ) : item.stars === 4 ? (
                    <RNImage
                      source={require("../assets/fourstars.png")}
                      style={styles.starsImage}
                    />
                  ) : item.stars === 5 ? (
                    <RNImage
                      source={require("../assets/fivestars.png")}
                      style={styles.starsImage}
                    />
                  ) : (
                    ""
                  )}
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
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
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
  starsImage: { bottom: -55, left: 135, height: 80, width: 250 },
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
    top: 30,
  },
  author: {
    fontSize: 15,
    paddingLeft: 62,
    paddingTop: 30,
    bottom: 138,
    fontWeight: "600",
    fontFamily: "Avenir-Medium",
  },
  authorImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginLeft: 15,
    bottom: 75,
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

export default TodaysReviewsScreen;
