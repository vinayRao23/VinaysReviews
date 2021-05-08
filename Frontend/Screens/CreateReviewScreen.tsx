import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppErrorMessage from "../Components/AppErrorMessage";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppFormImagePicker from "../Components/AppFormImagePicker";
import AppSubmitButton from "../Components/AppSubmitButton";
import ReviewTextInput from "../Components/ReviewTextInput";
import Stars from "../Components/Stars";

const CreateReviewScreen = () => {
  return (
    <SafeAreaView>
      <AppForm
        initialValues={{ title: "", image: [], body: "" }}
        onSubmit={(values: any) => console.log(values)}
      >
        <SafeAreaView style={styles.imagePicker}>
          <AppFormImagePicker name="image" />
        </SafeAreaView>
        <AppErrorMessage
          error="Please Select an Image"
          visible={true}
          style={{ bottom: -45 }}
        />
        <SafeAreaView style={{ bottom: 50 }}>
          <Stars />
        </SafeAreaView>
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          style={styles.titleField}
        />
        <AppErrorMessage
          error="Title Field Required"
          visible={true}
          style={{ bottom: -7 }}
        />
        <ReviewTextInput
          placeholder="Create Review Here..."
          style={styles.createReviewTextField}
        />
        <AppErrorMessage
          error="Body Field Required"
          visible={true}
          style={{ bottom: -8 }}
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
    bottom: -16,
  },
  titleField: {
    bottom: -15,
  },
  button: {
    bottom: 185,
  },
});

export default CreateReviewScreen;
