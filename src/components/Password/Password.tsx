import { InputField } from "../InputField";
import { StepButtons } from "../StepButtons";
import { PasswordProps } from "./Password.types";

const Password: React.FC<PasswordProps> = ({
  register,
  errors,
  nextStep,
  prevStep,
}) => (
  <>
    <h2>Шаг 3: Пароль</h2>

    <InputField
      name="password"
      type="password"
      register={register}
      error={errors.password}
      placeholder="Введите пароль"
    />

    <InputField
      name="confirmPassword"
      type="password"
      register={register}
      error={errors.confirmPassword}
      placeholder="Введите пароль вновь"
    />

    <StepButtons onNext={nextStep} onPrev={prevStep} />
  </>
);

export default Password;
