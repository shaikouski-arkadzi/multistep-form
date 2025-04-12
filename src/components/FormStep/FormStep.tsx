import { InputField } from "../InputField";
import { StepButtons } from "../StepButtons";
import { FormStepProps, StepNumber } from "./FormStep.types";
import { steps } from "../../data/steps";

const FormStep: React.FC<FormStepProps> = ({
  step,
  register,
  errors,
  setStep,
  trigger,
}) => {
  const { title, fields } = steps[step];

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

  return (
    <>
      <h2>{title}</h2>

      {fields.map(({ key, label, type, placeholder }) => (
        <InputField
          key={key}
          name={key}
          type={type}
          register={register}
          error={errors[key]}
          placeholder={placeholder || `Введите ${label.toLowerCase()}`}
        />
      ))}

      <StepButtons onNext={nextStep} onPrev={prevStep} />
    </>
  );
};

export default FormStep;
