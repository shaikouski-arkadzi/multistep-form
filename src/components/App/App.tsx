import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
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
  const [direction, setDirection] = useState<string>("forward");

  const goToStep = (targetStep: StepNumber, field: keyof IFormData) => {
    setStep(targetStep);
    setTimeout(() => setFocus(field), 0);
  };

  const nextStep = async () => {
    const currentStep = steps[step];
    const fieldsToValidate = currentStep.fields.map((field) => field.key);

    const isValid = await trigger(fieldsToValidate); // Проводим валидацию полей на шаге
    if (isValid) {
      setDirection("forward");
      setStep((prev) => (prev + 1) as StepNumber);
    }
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((prev) => (prev - 1) as StepNumber);
  };

  const onSubmit = (data: IFormData) => {
    console.log("Форма отправлена:", data);
  };

  const formData = useMemo(() => watch(), [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className={`form-step ${direction}`} key={step}>
        {step <= 3 ? (
          <FormStep
            stepNumber={step}
            register={register}
            errors={errors}
            nextStep={nextStep}
          />
        ) : (
          <ConfirmStep
            formData={formData}
            goToStep={goToStep}
            prevStep={prevStep}
          />
        )}
      </div>
    </form>
  );
}

export default App;
