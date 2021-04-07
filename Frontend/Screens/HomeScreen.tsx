import React from "react";
import { FlatList } from "react-native";
import Card from "../Components/Card";

const Fatty = [
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    subTitle: "View 8 Comments",
    authorImage: require("../assets/profileImage.png"),
    stars: "5/5",
    id: 1,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    subTitle: "View 8 Comments",
    authorImage: require("../assets/profileImage.png"),
    stars: "5/5",
    id: 2,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    subTitle: "View 8 Comments",
    authorImage: require("../assets/profileImage.png"),
    stars: "5/5",
    id: 3,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    subTitle: "View 8 Comments",
    authorImage: require("../assets/profileImage.png"),
    stars: "5/5",
    id: 4,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    subTitle: "View 8 Comments",
    authorImage: require("../assets/profileImage.png"),
    stars: "5/5",
    id: 5,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    subTitle: "View 8 Comments",
    authorImage: require("../assets/profileImage.png"),
    stars: "5/5",
    id: 6,
  },
  {
    title: "Harry Potter",
    author: "Vinay Rao",
    image: require("../assets/test.png"),
    subTitle: "View 8 Comments",
    authorImage: require("../assets/profileImage.png"),
    stars: "5/5",
    id: 7,
  },
];

const HomeScreen = () => {
  return (
    <FlatList
      data={Fatty}
      keyExtractor={(c) => c.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subTitle={item.subTitle}
          image={item.image}
          author={item.author}
          authorImage={item.authorImage}
          stars={item.stars}
        />
      )}
    />
  );
};

export default HomeScreen;
