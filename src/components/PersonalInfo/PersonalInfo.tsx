import { InputField } from "../InputField";
import { StepButtons } from "../StepButtons";
import { PersonalInfoProps } from "./PersonalInfo.types";

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  register,
  errors,
  nextStep,
}) => (
  <>
    <h2>Шаг 1: Персональная информация</h2>

    <InputField
      name="name"
      type="text"
      register={register}
      error={errors.name}
      placeholder="Введите имя"
    />

    <InputField
      name="age"
      type="number"
      register={register}
      error={errors.age}
      placeholder="Введите возраст"
    />

    <StepButtons onNext={nextStep} />
  </>
);

export default PersonalInfo;
