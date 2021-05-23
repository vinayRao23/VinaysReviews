import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as Yup from "yup";
import { client } from "../App";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppFormImagePicker from "../Components/AppFormImagePicker";
import AppSubmitButton from "../Components/AppSubmitButton";
import ReviewTextInput from "../Components/ReviewTextInput";
import { REVIEW } from "../Apollo/ReviewMutation";
import { generateId } from "../Utils/GenerateId";
import routes from "../Navigation/routes";
import { AuthContext } from "../Context/authContext";
import { AirbnbRating } from "react-native-ratings";
import { useMutation } from "@apollo/client";

const validationSchema = Yup.object().shape({
  image: Yup.array().required().max(1).min(1).label("Image"),
  title: Yup.string()
    .required()
    .matches(/^\s*\S[\s\S]*$/, "This field cannot contain only blankspaces")
    .label("Title"),
  body: Yup.string().required().label("Body"),
});

const CreateReviewScreen = ({ navigation }: any) => {
  const [stars, setStars] = useState(0);
  const [Review] = useMutation(REVIEW);
  const authContext = useContext(AuthContext);
  const handleSubmit = async (values: any) => {
    try {
      await Review({
        variables: {
          title: values.title,
          author: {
            email: authContext.user.email,
            username: authContext.user.username,
            id: authContext.user.id,
            profilePicture: authContext.user.profilePicture,
          },
          image: `data:image/png;base64,${values.image[0]}`,
          body: values.body,
          id: generateId(24),
          authorid: authContext.user.id,
          stars,
        },
      });
      navigation.navigate(routes.MY_REVIEWS);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView>
      <AppForm
        initialValues={{ title: "", image: [], body: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <SafeAreaView style={styles.imagePicker}>
          <AppFormImagePicker
            name="image"
            errStyle={{ bottom: -2, right: 13.5 }}
          />
        </SafeAreaView>
        <SafeAreaView style={{ bottom: 50 }}>
          <SafeAreaView style={{ marginLeft: 170, bottom: 0 }}>
            <AirbnbRating
              count={5}
              reviews={[]}
              defaultRating={0}
              size={35}
              onFinishRating={(value: number) => setStars(value)}
            />
          </SafeAreaView>
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
