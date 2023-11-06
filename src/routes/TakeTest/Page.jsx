import MainTest from "./MainTest";
import QuestionProvider from "../../contexts/QuestionContext";
import { useState } from "react";
import SelectTest from "./SelectTest";
import Instructions from "./Instructions";

const Test = () => {
  const [step, setStep] = useState("select");

  return (
    <>
      <QuestionProvider>
        {step === "select" && <SelectTest setStep={setStep} />}{" "}
        {step === "instructions" && <Instructions setStep={setStep} />}{" "}
        {step === "test" && <MainTest />}
      </QuestionProvider>
    </>
  );
};

export default Test;
