import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import makeRequest from "../../utils/fetch";
import { useQuestionContext } from "../../hooks/useQuestionContext";

const SelectTest = ({ setStep }) => {
  const { dispatch } = useQuestionContext();

  const [tests, setTests] = useState(null);
  useEffect(() => {
    makeRequest("/tests").then((response) => {
      setTests(response.data);
    });
  });

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex p-10 items-center justify-center bg-gray-300 sm:w-3/4 m-auto rounded">
          <div>
            <h1 className=" py-5">Select Your preferred Tests</h1>

            {tests
              ? tests.map((test) => (
                  <button
                    key={test.name}
                    className="bg-gray-200 shadow m-2 border rounded py-2 "
                  >
                    <div className="bg-gray-200">
                      <input
                        id={test.name}
                        type="radio"
                        className="p-5 m-2 bg-gray-200 border"
                        onClick={() => {
                          dispatch({
                            type: "SELECT_SECTION",
                            payload: test,
                          });
                        }}
                        value={test._id}
                      />
                      <label
                        htmlFor={test.name}
                        className="w-full h-full border bg-gray-200 cursor-pointer  p-2"
                      >
                        {test.name} ({test.code})
                      </label>
                    </div>
                  </button>
                ))
              : "No test available"}
            <div className="m-auto py-5">
              <button
                type="submit"
                className="px-10 py-2 bg-blue-700 text-white rounded-md"
                onClick={() => setStep("instructions")}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SelectTest.propTypes = {
  setStep: PropTypes.func.isRequired,
};

export default SelectTest;
