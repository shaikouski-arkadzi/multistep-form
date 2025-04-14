import { useFormContextData } from "../../context/FormContext";
import { steps } from "../../data/steps";
import { IFormData } from "../../types/formFields.types";
import { EditableField } from "../EditableField";
import { StepNumber } from "../FormStep";
import { StepButtons } from "../StepButtons";

const ConfirmStep: React.FC = () => {
  const {
    setStep,
    form: { watch, setFocus },
  } = useFormContextData();

  const goToStep = (targetStep: StepNumber, field: keyof IFormData) => {
    setStep(targetStep);

    setTimeout(() => setFocus(field), 0);
  };

  return (
    <>
      <h2>Подтверждение данных</h2>
      <div className="confirm-data">
        {Object.entries(steps).map(([step, { fields }]) =>
          fields.map(({ label, key }) => (
            <EditableField
              key={key}
              label={label}
              value={
                key.toLowerCase().includes("password")
                  ? "********"
                  : watch()[key]
              }
              goToStep={() => goToStep(Number(step), key)}
            />
          ))
        )}
      </div>
      <StepButtons
        isSubmitStep
        onPrev={() => setStep((prev) => (prev - 1) as StepNumber)}
      />
    </>
  );
};

export default ConfirmStep;
