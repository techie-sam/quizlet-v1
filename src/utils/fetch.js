const BASE_URL = import.meta.env.PROD
  ? "https://production-api.example.com/api"
  : "http://localhost:5000/api/v1";

const makeRequest = async (path, method, body) => {
  try {
    let result = await fetch(`${BASE_URL}${path}`, {
      method: method || "GET",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const code = result.status;
    result = await result.json();
    if (`${code}`.startsWith("2")) result.ok = true;
    result.code = code;
    result.ok = true
    return result;
  } catch (err) {
    const response = {};
    response.ok = false;
    response.code = 500;
    response.message = err.message;
    return response;
  }
};

export default makeRequest;
