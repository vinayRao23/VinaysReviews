import { useFormikContext } from "formik";
import React, { Fragment } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../config/colors";
import AppErrorMessage from "./AppErrorMessage";
import AppTextInput from "./AppTextInput";

const ReviewTextInput = ({
  placeholder,
  name,
  width,
  style,
  errStyle,
  ...rest
}: any) => {
  const {
    handleChange,
    setFieldTouched,
    errors,
    touched,
  } = useFormikContext<any>();
  return (
    <Fragment>
      <View style={[styles.textInputContainer, style]}>
        <TextInput
          onChangeText={handleChange(name)}
          style={[styles.textInput, style]}
          multiline={true}
          placeholder={placeholder}
          placeholderTextColor={colors.medium}
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={() => setFieldTouched(name)}
          {...rest}
        />
        <AppErrorMessage
          style={errStyle}
          error={errors[name]}
          visible={touched[name]}
        />
      </View>
    </Fragment>
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
  formikContainer: {
    alignSelf: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 25,
    flexDirection: "row",
    height: 55,
    bottom: -200,
    marginVertical: 10,
    paddingLeft: 20,
    width: "90%",
  },
});

export default ReviewTextInput;
