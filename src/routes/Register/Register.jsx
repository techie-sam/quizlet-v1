// import { useEffect, useState } from "react";
import Input from "../../components/utils/Input";
import { ErrorMessage, Form, Formik } from "formik";
import { signupValidator } from "../../utils/validator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const formProps = [
  { inputKey: "firstname", placeholder: "First Name" },
  { inputKey: "lastname", placeholder: "Last Name" },
  { inputKey: "email", label: "Email", placeholder: "example@email.com" },
  { inputKey: "password", label: "Password", placeholder: "**********" },
];

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {

    // const response = await makeRequest("/students/login", "POST", values);
    // if (response.ok) return navigate("/test/27183");
    // if (response.code === 400) return setError("Invalid Email or Password");
    // if (response.code == 500)
    //   return setError("An error occurred, Kindly try again");
    const fn = useFetch()
    console.log(fn)
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="md:flex rounded-md md:shadow-lg">
        <div className="hidden md:flex items-center max-w-sm">
          <img src="/src/assets/login-image.png" className="w-full"></img>
        </div>{" "}
        {/* Register Form */}
        <Formik
          onSubmit={handleSubmit}
          validate={signupValidator}
          initialValues={initialValues}
        >
          {(formik) => (
            <Form className="space-y-4 w-screen md:w-[400px] p-10 md:space-y-6">
              {error && (
                <p className="text-center text-sm m-auto text-red-500 p-4 bg-red-100 border border-red-300 rounded-md">
                  {" "}
                  {error || err}
                </p>
              )}
              {formProps.map(({ inputKey, placeholder, label }) => (
                <div key={placeholder.split(" ").join("")}>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 text-start"
                  >
                    {label || placeholder}
                  </label>
                  <Input
                    fn={{
                      handleChange: formik.handleChange,
                      handleBlur: formik.handleBlur,
                    }}
                    error={formik.touched[inputKey] && formik.errors[inputKey]}
                    value={formik.values[inputKey]}
                    inputKey={inputKey}
                    placeholder={placeholder}
                  />
                  <ErrorMessage name={inputKey}>
                    {(message) => (
                      <small className="text-red-500">{message}</small>
                    )}
                  </ErrorMessage>
                </div>
              ))}
              <button
                type="submit"
                disabled={!formik.isValid}
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 disabled:bg-blue-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {formik.isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 m-auto border-t-4 border-white border-t-white"></div>
                ) : (
                  "REGISTER"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
