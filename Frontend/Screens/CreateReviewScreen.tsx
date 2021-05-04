import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppErrorMessage from "../Components/AppErrorMessage";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppFormImagePicker from "../Components/AppFormImagePicker";
import AppSubmitButton from "../Components/AppSubmitButton";
import ReviewTextInput from "../Components/ReviewTextInput";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  image: Yup.array().required().max(1).label("Please select an image"),
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
          <AppFormImagePicker name="image" />
        </SafeAreaView>
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          style={styles.titleField}
        />
        <ReviewTextInput
          placeholder="Create Review Here..."
          style={styles.createReviewTextField}
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
    top: 120,
    justifyContent: "center",
    left: 28,
  },
  createReviewTextField: {
    bottom: -130,
  },
  titleField: {
    bottom: -130,
  },
  button: {
    bottom: 70,
  },
});

export default CreateReviewScreen;
