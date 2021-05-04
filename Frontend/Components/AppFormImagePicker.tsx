import React, { Fragment } from "react";
import { useFormikContext } from "formik";
import ImageInputList from "./ImageInputList";
import AppErrorMessage from "./AppErrorMessage";

const AppFormImagePicker = ({ name, ...rest }: any) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>();
  const imageUri = values[name];

  const handleAdd = (uri: any) => {
    setFieldValue(name, [...imageUri, uri]);
  };

  const handleRemove = (uri: any) => {
    setFieldValue(
      name,
      imageUri.filter((imageUri: any) => imageUri !== uri)
    );
  };

  return (
    <Fragment>
      <ImageInputList
        imageUri={imageUri}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
        {...rest}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
};

export default AppFormImagePicker;
