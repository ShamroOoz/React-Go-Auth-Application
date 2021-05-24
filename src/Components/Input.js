import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

//
const Input = ({ type, label, name, ...rest }) => {
  const [show, setshow] = useState(false);

  return (
    <div className="relative py-2">
      {(type === "text" || type === "email") && (
        <>
          <Field
            placeholder={label}
            name={name}
            type={type}
            className="input-text"
            {...rest}
          />
          <ErrorMessage component={TextError} name={name} />
        </>
      )}

      {type === "password" && (
        <>
          <Field
            placeholder={label}
            name={name}
            type={show ? "text" : "password"}
            className="input-text"
            {...rest}
          />

          <div className="absolute right-0 flex items-center pr-3 top-5 ">
            <EyeIcon
              className={`h-6 text-gray-700 ${show ? "hidden" : "block"}`}
              onClick={() => setshow((prevshow) => !prevshow)}
            />
            <EyeOffIcon
              className={`h-6 text-gray-700 ${show ? "block" : "hidden"}`}
              onClick={() => setshow((prevshow) => !prevshow)}
            />
          </div>
          <ErrorMessage component={TextError} name={name} />
        </>
      )}
    </div>
  );
};

export default Input;
