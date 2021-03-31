import { Formik } from "formik";
import React, { Fragment } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <Fragment>
            <View style={styles.image}>
              <Image source={require("../assets/Logo.png")} />
            </View>
            <View style={styles.formikContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="#D3D3D3"
              />
            </View>
            <View style={styles.formikContainer}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#D3D3D3"
                placeholder="Email"
              />
            </View>
            <View style={styles.formikContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#D3D3D3"
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={styles.buttonBackground}
              onPress={() => console.log("Working")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </Fragment>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formikContainer: {
    alignSelf: "center",
    backgroundColor: "#f8f4f4",
    borderRadius: 25,
    flexDirection: "row",
    height: 55,
    marginVertical: 10,
    paddingLeft: 20,
    bottom: 40,
    width: "90%",
  },
  textInput: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  buttonText: {
    fontSize: 20,
    paddingTop: 14,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
  buttonBackground: {
    backgroundColor: "#fc5c65",
    alignSelf: "center",
    width: "90%",
    borderRadius: 25,
    bottom: 30,
    height: 55,
    fontSize: 30,
  },
  errorText: {
    color: "#ff0000",
    paddingRight: 15,
    marginTop: 45,
  },
  image: {
    alignSelf: "center",
  },
});

export default RegisterScreen;
