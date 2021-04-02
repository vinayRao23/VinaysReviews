import React, { Fragment } from "react";
import { Formik } from "formik";

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
};

export default AppForm;
