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
        fieldName="name"
        goToStep={goToStep}
      />
      <EditableField
        label="Возраст"
        value={formData.age}
        fieldName="age"
        goToStep={goToStep}
      />
      <EditableField
        label="Email"
        value={formData.email}
        fieldName="email"
        goToStep={goToStep}
      />
      <EditableField
        label="Телефон"
        value={formData.phone}
        fieldName="phone"
        goToStep={goToStep}
      />
      <EditableField
        label="Пароль"
        value="********"
        fieldName="password"
        goToStep={goToStep}
      />
    </div>
    <StepButtons isSubmitStep onPrev={prevStep} />
  </>
);

export default ConfirmStep;
