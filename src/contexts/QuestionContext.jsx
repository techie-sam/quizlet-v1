import { useEffect } from "react";
import { createContext, useReducer } from "react";
import makeRequest from "../utils/fetch";
// import useLogin from "../hooks/useLogin";
// import makeRequest from "../utils/fetch";

export const QuestionContext = createContext();

const initialValues = {
  currentQuestionIndex: null,
  sections: [],
};
initialValues.currentSection = initialValues.sections[1] || null;

const questionReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_SECTION":
      return {
        sections: [...state.sections, action.payload],
      };
    case "SET_CURRENT_SECTION":
      return { ...state, currentSection: action.payload };
    case "NEXT":
      return { currentQuestion: action.payload };
    case "PREVIOUS":
      return { user: null };
    default:
      state;
  }
};

const QuestionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialValues);
  console.log(state);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await makeRequest("/questions/jdj");
      // console.log(response)
      return response;
    };
    getQuestions();
  });

  // const questions = await makeRequest("/api/v1/questions");
  // console.log(questions);

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};
QuestionProvider.propTypes = null;

export default QuestionProvider;
