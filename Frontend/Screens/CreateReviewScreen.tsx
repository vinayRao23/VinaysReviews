import React from "react";
import { SafeAreaView } from "react-native";
import * as Yup from "yup";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppSubmitButton from "../Components/AppSubmitButton";
import ReviewTextInput from "../Components/ReviewTextInput";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  image: Yup.array().required().max(1, "Please select an image"),
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
        <AppFormField
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
        />
        <ReviewTextInput placeholder="Create Review Here..." />
        <AppSubmitButton title="Create Review" />
      </AppForm>
    </SafeAreaView>
  );
};

export default CreateReviewScreen;
