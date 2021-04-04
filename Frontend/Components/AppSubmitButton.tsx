import React from "react";
import { useFormikContext } from "formik";
import AppButton from "./AppButton";

const AppSubmitButton = ({ title, ...rest }: any) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit} title={title} {...rest} />;
};

export default AppSubmitButton;
