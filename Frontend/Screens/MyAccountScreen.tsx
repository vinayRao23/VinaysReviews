import React, { Fragment, useContext } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import storage from "../auth/storage";
import AppText from "../Components/AppText";
import colors from "../config/colors";
import { AuthContext } from "../Context/authContext";
import { useQuery } from "@apollo/client";
import { getMyReviews } from "../Apollo/GetMyReviewQuery";

const MyAccountScreen = ({ navigation }: any) => {
  const authContext = useContext(AuthContext);
  const { data } = useQuery(getMyReviews, {
    variables: { authorid: authContext.user.id },
  });
  console.log(data);
  const handleSubmit = async () => {
    try {
      await storage.removeToken();
      authContext.setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <LinearGradient
        colors={["#D03AFC", "#C33BFA", "#BB3BFC", "#A93DFD", "#A13CFF"]}
      >
        <SafeAreaView style={styles.container}>
          <Image
            source={{ uri: authContext.user.profilePicture }}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <AppText style={styles.usernameText}>
            {authContext.user.username}
          </AppText>
          <AppText style={styles.emailText}>{authContext.user.email}</AppText>
        </SafeAreaView>
      </LinearGradient>
      <SafeAreaView>
        <AppText style={styles.reviewsCreatedText}>
          Reviews Created: {data.getMyReviews.length}
        </AppText>
      </SafeAreaView>
      <SafeAreaView>
        <AppText style={[styles.reviewsCreatedText, { top: 50 }]}>
          Comments: 0
        </AppText>
      </SafeAreaView>
      <SafeAreaView>
        <AppText style={[styles.reviewsCreatedText, { top: 70 }]}>
          Times Commented: 0
        </AppText>
      </SafeAreaView>
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
        <SafeAreaView>
          <AppText style={styles.logoutButtonText}>Logout</AppText>
        </SafeAreaView>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: colors.danger,
    width: 350,
    height: 45,
    borderRadius: 20,
    top: 300,
    alignSelf: "center",
  },
  logoutButtonText: {
    color: colors.white,
    fontSize: 20,
    alignSelf: "center",
    justifyContent: "center",
    bottom: -8,
    fontFamily: "Avenir-Medium",
    fontWeight: "bold",
  },
  usernameText: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    bottom: -10,
    color: colors.white,
    fontWeight: "bold",
    fontFamily: "Avenir-Medium",
  },
  emailText: {
    alignSelf: "center",
    justifyContent: "center",
    bottom: -13,
    fontSize: 20,
    overflow: "hidden",
    color: colors.white,
    fontWeight: "bold",
    fontFamily: "Avenir-Medium",
  },
  profileImage: {
    alignSelf: "center",
    justifyContent: "center",
    top: 2,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  reviewsCreatedText: {
    fontSize: 25,
    top: 30,
    alignSelf: "center",
    fontFamily: "Avenir-Medium",
    right: 5,
  },
});

export default MyAccountScreen;
