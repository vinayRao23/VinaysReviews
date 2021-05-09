import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppErrorMessage from "../Components/AppErrorMessage";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppFormImagePicker from "../Components/AppFormImagePicker";
import AppSubmitButton from "../Components/AppSubmitButton";
import ReviewTextInput from "../Components/ReviewTextInput";
import Stars from "../Components/Stars";

const validationSchema = Yup.object().shape({
  image: Yup.array().required().max(1).min(1).label("Image"),
  title: Yup.string().required().label("Title"),
  body: Yup.string().required().label("Body"),
});

const CreateReviewScreen = () => {
  return (
    <SafeAreaView>
      <AppForm
        initialValues={{ title: "", image: [], body: "" }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        <SafeAreaView style={styles.imagePicker}>
          <AppFormImagePicker
            name="image"
            errStyle={{ bottom: -2, right: 13.5 }}
          />
        </SafeAreaView>

        <SafeAreaView style={{ bottom: 50 }}>
          <Stars />
        </SafeAreaView>
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          style={[styles.titleField, { bottom: -8 }]}
          errStyle={{ bottom: -2 }}
        />

        <ReviewTextInput
          placeholder="Create Review Here..."
          style={styles.createReviewTextField}
          errStyle={{ top: 150, right: 120 }}
          autoCapitalize="none"
          autoCorrect={false}
          name="body"
        />

        <SafeAreaView style={styles.button}>
          <AppSubmitButton title="Create Review" />
        </SafeAreaView>
      </AppForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    top: 80,
    justifyContent: "center",
    left: 28,
  },
  createReviewTextField: {
    bottom: -8,
  },
  titleField: {
    bottom: -10,
  },
  button: {
    bottom: 175,
  },
});

export default CreateReviewScreen;
