import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({
  imageUri = null,
  onRemoveImage,
  onAddImage,
}: any) => {
  return (
    <View>
      <View style={styles.container}>
        {imageUri.slice(0, 1).map((uri: any) => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        {imageUri.length > 0 ? null : (
          <ImageInput onChangeImage={(uri: any) => onAddImage(uri)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
