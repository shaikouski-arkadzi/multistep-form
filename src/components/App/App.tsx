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
    const isLast = !(step in steps);
    navigate(isLast ? "/step/confirm" : `/step/${step}`);
  }, [step, navigate]);

  const goToStep = (targetStep: StepNumber, field: keyof IFormData) => {
    setStep(targetStep);

    setTimeout(() => setFocus(field), 0);
  };

  const nextStep = async () => {
    const currentStep = steps[step];
    const fieldsToValidate = currentStep.fields.map((field) => field.key);

    const isValid = await trigger(fieldsToValidate); // Проводим валидацию полей на шаге
    if (isValid) {
      setStep((prev) => (prev + 1) as StepNumber);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as StepNumber);
    }
  };

  const onSubmit = (data: IFormData) => {
    console.log("Форма отправлена:", data);
  };

  const formData = useMemo(() => watch(), [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-step" key={step}>
        <Routes>
          <Route path="/" element={<Navigate to="/step/1" replace />} />

          {Object.entries(steps).map(([step]) => (
            <Route
              key={step}
              path={`/step/${step}`}
              element={
                <FormStep
                  stepNumber={parseInt(step)}
                  register={register}
                  errors={errors}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              }
            />
          ))}

          <Route
            path="/step/confirm"
            element={
              <ConfirmStep
                formData={formData}
                goToStep={goToStep}
                prevStep={prevStep}
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
