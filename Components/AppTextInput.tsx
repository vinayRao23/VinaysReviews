import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";

const AppTextInput = ({ style, ...rest }: any) => {
  return (
    <View style={style}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.medium}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    fontFamily: "Arial",
    marginTop: 1,
  },
});

export default AppTextInput;
