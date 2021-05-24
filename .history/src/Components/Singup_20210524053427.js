import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import { SingupSchema, initialSingupValues } from "./Schema";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Globalcontext.js";

const Singup = () => {
  const auth = useAuth();

  const onSubmit = (values, onSubmitProps) => {
    auth.signup(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="container max-w-full px-6 mx-auto">
      <div className="max-w-sm px-6 mx-auto">
        <div className="relative flex flex-wrap">
          <div className="relative w-full">
            <div className="mt-4">
              <div className="text-3xl font-bold text-center text-blue-700">
                Create Account
              </div>
              <Formik
                initialValues={initialSingupValues}
                validationSchema={SingupSchema}
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
                        type={`text`}
                        name="name"
                        label={`Name`}
                      />

                      <FormikControl
                        control="input"
                        type={`password`}
                        name="password"
                        label={`Password`}
                      />

                      <FormikControl
                        control="input"
                        type={`password`}
                        name="confirmPassword"
                        label={`Confirm Password`}
                      />

                      <button
                        type="submit"
                        className="btn-large"
                        disabled={!formik.isValid}
                      >
                        Singup
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="mt-4 text-center text-gray-400 hover:text-gray-600">
                Already have an account?
                <Link to="/login">
                  <span className="underline"> Log in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
