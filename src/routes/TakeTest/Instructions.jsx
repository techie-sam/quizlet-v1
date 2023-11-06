import PropTypes from "prop-types";

const Instructions = ({ setStep }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        Instructions
        <div className="m-auto py-5">
          <button
            type="submit"
            className="px-10 py-2 bg-blue-700 text-white rounded-md"
            onClick={() => setStep("test")}
          >
            START TEST
          </button>
        </div>
      </div>
    </div>
  );
};

Instructions.propTypes = {
  setStep: PropTypes.func.isRequired,
};

export default Instructions;
