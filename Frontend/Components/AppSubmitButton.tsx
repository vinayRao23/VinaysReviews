import React from "react";
import { useFormikContext } from "formik";
import AppButton from "./AppButton";

const AppSubmitButton = ({ title }: any) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton onPress={handleSubmit} title={title} />;
};

export default AppSubmitButton;
