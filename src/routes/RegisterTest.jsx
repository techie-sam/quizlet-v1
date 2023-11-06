import { useEffect, useState } from "react";
import Input from "../components/utils/Input";
import makeRequest from "../utils/fetch.js";

const TestOptions = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchTestOptions = async () => {
      try {
        const result = await makeRequest("/tests");
        const testOptions = result.data.map((test) => (
          <option key={test._id}>{test.name}</option>
        ));
        setOptions(testOptions);
      } catch (error) {
        // Handle error if needed
        console.log("err");
      }
    };

    fetchTestOptions();
  }, []);

  return <>{options}</>;
};

const RegisterTest = () => {
  return (
    <div className="h-screen flex items-center  justify-center">
      <div className="md:flex rounded-md md:shadow-lg">
        <div className="hidden md:flex items-center max-w-sm">
          <img src="/src/assets/login-image.png" className="w-full"></img>
        </div>{" "}
        {/* Register For Test Form */}
        <form
          className="space-y-4 w-screen md:w-[400px] p-10 md:space-y-6"
          action="#"
        >
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-900 text-start "
            >
              Email
            </label>
            <Input inputKey="email" placeholder="Email Address" />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-900 text-start "
            >
              Select Test Type
            </label>
            <select
              name=""
              id=""
              className="bg-gray-50 border sm:text-sm rounded-md outline-none focus:border-blue-500 focus:border-2 transition-all block w-full p-2.5"
            ></select>
            <TestOptions />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTest;
