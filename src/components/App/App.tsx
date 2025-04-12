import { useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "../../types/formFields.types";
import { schema } from "../../utils/validation";
import { FormStep, StepNumber } from "../FormStep";
import { ConfirmStep } from "../ConfirmStep";
import { steps } from "../../data/steps";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    setFocus,
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const [step, setStep] = useState<StepNumber>(1);

  const navigate = useNavigate();

  useEffect(() => {
    navigate(!(step in steps) ? "/step/confirm" : `/step/${step}`);
  }, [step, navigate]);

  const onSubmit = (data: IFormData) => {
    console.log("Форма отправлена:", data);
  };

  const formData = useMemo(() => watch(), [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-step" key={step}>
        <Routes>
          <Route path="/" element={<Navigate to="/step/1" replace />} />

          {Object.entries(steps).map(([stepNum]) => (
            <Route
              key={stepNum}
              path={`/step/${stepNum}`}
              element={
                <FormStep
                  step={parseInt(stepNum) as StepNumber}
                  register={register}
                  errors={errors}
                  trigger={trigger}
                  setStep={setStep}
                />
              }
            />
          ))}

          <Route
            path="/step/confirm"
            element={
              <ConfirmStep
                formData={formData}
                setStep={setStep}
                setFocus={setFocus}
              />
            }
          />

          <Route path="*" element={<Navigate to="/step/1" replace />} />
        </Routes>
      </div>
    </form>
  );
}

export default App;
