import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { IFormData } from "../../types/formFields.types";
import { FormStep, StepNumber } from "../FormStep";
import { ConfirmStep } from "../ConfirmStep";
import { steps } from "../../data/steps";
import { useFormContextData } from "../../context/FormContext";
import "./App.css";

function App() {
  const {
    step,
    form: { handleSubmit },
  } = useFormContextData();

  const navigate = useNavigate();

  useEffect(() => {
    navigate(!(step in steps) ? "/step/confirm" : `/step/${step}`);
  }, [step, navigate]);

  const onSubmit = (data: IFormData) => {
    console.log("Форма отправлена:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-step" key={step}>
        <Routes>
          <Route path="/" element={<Navigate to="/step/1" replace />} />

          {Object.entries(steps).map(([stepNum]) => (
            <Route
              key={stepNum}
              path={`/step/${stepNum}`}
              element={<FormStep step={parseInt(stepNum) as StepNumber} />}
            />
          ))}

          <Route path="/step/confirm" element={<ConfirmStep />} />

          <Route path="*" element={<Navigate to="/step/1" replace />} />
        </Routes>
      </div>
    </form>
  );
}

export default App;
