import React from "react";
import { useHistory, useParams } from "react-router";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import { SignInSchema, initialSignInValues } from "./Schema";
//mainsubmit action
const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const Login = () => {
  return (
    <Formik
      initialValues={import { SignInSchema, initialSignInValues } from "./Schema";
}
      validationSchema={SignInSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="mt-4">
          <div className="max-w-lg mx-auto">
            <FormikControl
              control="input"
              type={`email`}
              name="email"
              label={`Email`}
            />

            <FormikControl
              control="input"
              type={`password`}
              name="password"
              label={`Password`}
            />

            <button
              type="submit"
              className="btn-large"
              disabled={!formik.isValid}
            >
              Login
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
