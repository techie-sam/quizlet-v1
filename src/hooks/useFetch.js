import { useState } from "react";
import makeRequest from "../utils/fetch";
import { useAuthContext } from "./useAuthContext";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const { dispatch } = useAuthContext();

  const fetch = async (url, method = "GET", body = null) => {
    setIsLoading(true);
    setError(null);

    const response = await makeRequest(url, method, body);
    setResponse(() => response);

    if (!response.ok) {
      setIsLoading(false);
      setError("An error occurred while sending request, Try again.");
    }
    if (response.ok) {
      
      dispatch({ type: "LOGIN", payload: response });
      
      setIsLoading(false);
    }
  };

  return { fetch, isLoading, error, response };
};

export default useFetch;
