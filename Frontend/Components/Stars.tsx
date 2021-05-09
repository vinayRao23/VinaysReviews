import React from "react";
import { SafeAreaView } from "react-native";
import { AirbnbRating } from "react-native-ratings";

const Stars = ({}: any) => {
  return (
    <SafeAreaView style={{ marginLeft: 170, bottom: 0 }}>
      <AirbnbRating
        count={5}
        reviews={[]}
        defaultRating={0}
        size={35}
        onFinishRating={(value: number) => console.log(value)}
      />
    </SafeAreaView>
  );
};

export default Stars;
