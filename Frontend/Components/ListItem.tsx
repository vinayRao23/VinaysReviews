import React from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}: any) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            <AppText numberOfLines={1} style={styles.subTitle}>
              {subTitle}
            </AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    left: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
    marginLeft: 20,
    top: 20,
  },
  title: {
    fontWeight: "500",
    top: 30,
    marginTop: 3,
  },
  subTitle: {
    color: colors.medium,
    top: 30,
  },
});

export default ListItem;
