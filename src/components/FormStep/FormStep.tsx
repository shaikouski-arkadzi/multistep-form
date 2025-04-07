import { InputField } from "../InputField";
import { StepButtons } from "../StepButtons";
import { FormStepProps } from "./FormStep.types";
import { steps } from "../../data/steps";

const FormStep: React.FC<FormStepProps> = ({
  stepNumber,
  register,
  errors,
  nextStep,
  prevStep,
}) => {
  const { title, fields } = steps[stepNumber];

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
