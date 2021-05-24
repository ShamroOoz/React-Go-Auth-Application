import React from "react";
import { Link } from "react-router";
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
    <div className="container max-w-full px-6 mx-auto">
      <div className="max-w-sm px-6 mx-auto">
        <div className="relative flex flex-wrap">
          <div className="relative w-full">
            <div className="mt-4">
              <div className="text-3xl font-bold text-center text-blue-700">
                Welcome
              </div>
              <Formik
                initialValues={initialSignInValues}
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
              <div className="mt-4 text-center text-gray-400 hover:text-gray-600">
                Don’t have an account yet?
                <Link to="/singup">
                  <span className="underline"> Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
