import { useState } from "react";
import makeRequest from "../utils/fetch";
import { useAuthContext } from "./useAuthContext";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (body) => {
    setIsLoading(true);
    setError(null);

    const response = await makeRequest("/students/login", "POST", body);

    if (!response.ok) {
      setIsLoading(false);
      setError("An error occurred while sending request, Try again.");
    }
    if (response.code === 200) {
      dispatch({ type: "LOGIN", payload: response });
      setIsLoading(false);
    }
    if (response.code === 400) {
      setError("Invalid email or password");
    }
  };

  return { login, isLoading, error };
};

export default useLogin;
