import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import AppTextInput from "./AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
import colors from "../config/colors";

const AppFormField = ({ name, width, style, errStyle, ...rest }: any) => {
  const {
    handleChange,
    setFieldTouched,
    errors,
    touched,
  } = useFormikContext<any>();
  return (
    <Fragment>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        style={[styles.formikContainer, style]}
        {...rest}
      />
      <AppErrorMessage
        style={errStyle}
        error={errors[name]}
        visible={touched[name]}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
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

export default AppFormField;
