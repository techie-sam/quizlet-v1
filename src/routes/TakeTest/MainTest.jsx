
import QuestionAndOption from "./QuestionAndOption";
import SelectQuestion from "./SelectQuestion";
import SelectSection from "./SelectSection";

const Test = () => {
  return (
    <>
      <div className="h-screen">
        <SelectSection />
        <div className="lg:flex">
          <QuestionAndOption />
          <SelectQuestion />
        </div>
      </div>
    </>
  );
};

export default Test;
