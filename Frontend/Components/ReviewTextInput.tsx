import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

const ReviewTextInput = ({ style, placeholder }: any) => {
  return (
    <View style={[styles.textInputContainer, style]}>
      <TextInput
        style={[styles.textInput, style]}
        multiline={true}
        placeholder={placeholder}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    fontFamily: "Avenir-Medium",
    top: -1,
    right: 10,
  },
  textInputContainer: {
    alignSelf: "center",
    backgroundColor: colors.lightGray,
    flexDirection: "row",
    height: 300,
    bottom: -200,
    marginVertical: 10,
    paddingLeft: 20,
    width: "90%",
  },
});

export default ReviewTextInput;
