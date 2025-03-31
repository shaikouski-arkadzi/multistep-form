import { InputField } from "../InputField";
import { StepButtons } from "../StepButtons";
import { ContactDataProps } from "./ContactData.types";

const ContactData: React.FC<ContactDataProps> = ({
  register,
  errors,
  nextStep,
  prevStep,
}) => (
  <>
    <h2>Шаг 2: Контактные данные</h2>

    <InputField
      name="email"
      type="email"
      register={register}
      error={errors.email}
      placeholder="Введите email"
    />

    <InputField
      name="phone"
      type="text"
      register={register}
      error={errors.phone}
      placeholder="Введите телефон"
    />

    <StepButtons onNext={nextStep} onPrev={prevStep} />
  </>
);

export default ContactData;
