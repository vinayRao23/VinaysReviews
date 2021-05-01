import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import AppErrorMessage from "../Components/AppErrorMessage";
import AppForm from "../Components/AppForm";
import AppFormField from "../Components/AppFormField";
import AppSubmitButton from "../Components/AppSubmitButton";
import colors from "../config/colors";

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
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            placeholder="Create Review Here..."
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <AppSubmitButton title="Create Review" />
      </AppForm>
    </SafeAreaView>
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

export default CreateReviewScreen;
