import { useQuestionContext } from "../../hooks/useQuestionContext";

const SelectSection = () => {
  const {
    state: { sections, currentSection },
    dispatch,
  } = useQuestionContext();
  return (
    <div className="flex justify-center border gap-5">
      {" "}
      {sections &&
        sections.map((subject) => (
          <button
            onClick={() =>
              dispatch({
                type: "SET_CURRENT_SECTION",
                payload: subject._id,
              })
            }
            key={subject._id}
            className={`px-5 py-3 bg-gray-300  hover:bg-gray-400 ${
              currentSection === subject._id ? "bg-gray-400" : ""
            }`}
          >
            {subject.name}
          </button>
        ))}
    </div>
  );
};

export default SelectSection;
