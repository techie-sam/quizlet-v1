import { ErrorMessage, Form, Formik } from "formik";
import { loginValidator } from "../../utils/validator";
import Input from "../../components/utils/Input";
import useLogin from "../../hooks/useLogin";

const formProps = [
  { inputKey: "email", label: "Email", placeholder: "example@email.com" },
  { inputKey: "password", label: "Password", placeholder: "**********" },
];

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { login, error } = useLogin();

  const handleSubmit = async (values) => {
    await login(values);
  };

  return (
    <div className="flex justify-center items-center top">
      {" "}
      <Formik
        onSubmit={handleSubmit}
        validate={loginValidator}
        initialValues={initialValues}
      >
        {(formik) => {
          // console.log(formik);
          return (
            <Form className="space-y-4 w-screen md:w-[400px] bg- p-10 md:space-y-6 p-">
              {error && (
                <p className="text-center text-sm m-auto text-red-500 p-4 bg-red-100 border border-red-300 rounded-md">
                  {" "}
                  {error}
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
                disabled={
                  !formik.isValid || !formik.dirty || formik.isSubmitting
                }
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 disabled:bg-blue-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {formik.isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 m-auto border-t-4 border-white border-t-white"></div>
                ) : (
                  "LOGIN"
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
