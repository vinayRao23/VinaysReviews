import React, { useContext } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { getMyReview } from "../Apollo/GetMyReviewQuery";
import { AuthContext } from "../Context/authContext";
import routes from "../Navigation/routes";
import Card from "../Components/Card";

const MyReviewsScreen = ({ navigation }: any) => {
  const authContext = useContext(AuthContext);
  const { data, loading } = useQuery(getMyReview, {
    variables: { authorid: authContext.user.id },
  });
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <FlatList
      data={data}
      keyExtractor={(c) => c.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(routes.DETAILS)}>
          <Card
            title={item.title}
            image={item.image}
            author={item.author}
            clickableText={item.clickableText}
            authorImage={item.authorImage}
            stars={item.stars}
            onPress={() => navigation.navigate(routes.VIEW_COMMENTS)}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default MyReviewsScreen;
