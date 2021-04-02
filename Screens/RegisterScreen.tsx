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
import AppErrorMessage from "../Components/AppErrorMessage";

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
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ errors, handleSubmit, handleChange, touched, setFieldTouched }) => (
          <Fragment>
            <View>
              <Image
                style={styles.image}
                source={require("../assets/Logo.png")}
              />
              <Text style={styles.logoText}>VinaysReviews: Register</Text>
            </View>
            <View style={styles.formikContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                onChangeText={handleChange("username")}
                onBlur={() => setFieldTouched("username")}
                placeholderTextColor="#D3D3D3"
              />
            </View>
            <AppErrorMessage
              style={{ bottom: 40, paddingLeft: 30 }}
              error={errors.username}
              visible={touched.username}
            />
            <View style={styles.formikContainer}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#D3D3D3"
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
            </View>
            <AppErrorMessage
              style={{ bottom: 40, paddingLeft: 30 }}
              error={errors.email}
              visible={touched.email}
            />
            <View style={styles.formikContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#D3D3D3"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                secureTextEntry
              />
            </View>
            <AppErrorMessage
              error={errors.password}
              style={{ bottom: 41, paddingLeft: 30 }}
              visible={touched.password}
            />
            <TouchableOpacity
              style={styles.buttonBackground}
              onPress={() => handleSubmit()}
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
    fontFamily: "Arial",
  },
  logoText: {
    fontSize: 30,
    fontFamily: "Arial",
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 20,
    paddingTop: 14,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "#fff",
    alignSelf: "center",
  },
  buttonBackground: {
    backgroundColor: "#5ab5da",
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
  },
  image: {
    alignSelf: "center",
    marginBottom: -40,
  },
});

export default RegisterScreen;
