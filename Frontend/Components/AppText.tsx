import React from "react";
import { Text } from "react-native";

const AppText = ({ style, children }: any) => {
  return <Text style={style}>{children}</Text>;
};

export default AppText;
