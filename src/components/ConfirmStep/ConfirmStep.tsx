import { steps } from "../../data/steps";
import { EditableField } from "../EditableField";
import { StepButtons } from "../StepButtons";
import { ConfirmStepProps } from "./ConfirmStep.types";

const ConfirmStep: React.FC<ConfirmStepProps> = ({
  prevStep,
  formData,
  goToStep,
}) => (
  <>
    <h2>Шаг 4: Подтверждение данных</h2>
    <div className="confirm-data">
      {Object.entries(steps).map(([step, { fields }]) =>
        fields.map(({ label, key }) => (
          <EditableField
            key={key}
            label={label}
            value={
              key.toLowerCase().includes("password")
                ? "********"
                : formData[key]
            }
            goToStep={() => goToStep(Number(step), key)}
          />
        ))
      )}
    </div>
    <StepButtons isSubmitStep onPrev={prevStep} />
  </>
);

export default ConfirmStep;
