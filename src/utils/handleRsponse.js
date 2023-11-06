export const handleResponse = (response) => {
  if (response.code === 201) return navigate("/home");
  if (response.code === 400) return setError("Invalid Email or Password");
  if (response.code == 500)
    return setError("An error occurred, Kindly try again");
};
