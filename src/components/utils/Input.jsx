const Input = ({ fn, value, inputKey, placeholder = "", error }) => {
  return (
    <input
      type={inputKey === "email" ? inputKey : "text"}
      name={inputKey}
      value={value}
      id={inputKey}
      onChange={fn.handleChange}
      onBlur={fn.handleBlur}
      className={`bg-gray-50 border sm:text-sm rounded-md text-black outline-none ${
        error ? "focus:border-red-500 bg-red-100" : "focus:border-primary"
      } focus:border-2 transition-all block w-full p-4`}
      placeholder={placeholder}
      required=""
    />
  );
};

Input.propTypes = null;

export default Input;
