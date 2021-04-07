import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Card from "../Components/Card";

const Fatty = [
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    authorImage: require("../assets/profileImage.png"),
    clickableText: "View 8 Comments",
    stars: "5/5",
    id: 1,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    authorImage: require("../assets/profileImage.png"),
    clickableText: "View 8 Comments",
    stars: "5/5",
    id: 2,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    authorImage: require("../assets/profileImage.png"),
    clickableText: "View 8 Comments",
    stars: "5/5",
    id: 3,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    authorImage: require("../assets/profileImage.png"),
    clickableText: "View 8 Comments",
    stars: "5/5",
    id: 4,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    authorImage: require("../assets/profileImage.png"),
    clickableText: "View 8 Comments",
    stars: "5/5",
    id: 5,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    authorImage: require("../assets/profileImage.png"),
    clickableText: "View 8 Comments",
    stars: "5/5",
    id: 6,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    authorImage: require("../assets/profileImage.png"),
    clickableText: "View 8 Comments",
    stars: "5/5",
    id: 7,
  },
];

const HomeScreen = ({ navigation }: any) => {
  return (
    <FlatList
      data={Fatty}
      keyExtractor={(c) => c.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <Card
            title={item.title}
            image={item.image}
            author={item.author}
            clickableText={item.clickableText}
            authorImage={item.authorImage}
            stars={item.stars}
            onPress={() => navigation.navigate("ViewComments")}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;
