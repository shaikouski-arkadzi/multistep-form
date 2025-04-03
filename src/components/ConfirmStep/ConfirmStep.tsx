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
      <EditableField
        label="Имя"
        value={formData.name}
        goToStep={() => goToStep(1, "name")}
      />
      <EditableField
        label="Возраст"
        value={formData.age}
        goToStep={() => goToStep(1, "age")}
      />
      <EditableField
        label="Email"
        value={formData.email}
        goToStep={() => goToStep(2, "email")}
      />
      <EditableField
        label="Телефон"
        value={formData.phone}
        goToStep={() => goToStep(2, "phone")}
      />
      <EditableField
        label="Пароль"
        value="********"
        goToStep={() => goToStep(3, "password")}
      />
    </div>
    <StepButtons isSubmitStep onPrev={prevStep} />
  </>
);

export default ConfirmStep;
