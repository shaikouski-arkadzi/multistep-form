import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./App.types";
import { schema } from "../../utils/validation";
import { PersonalInfo } from "../PersonalInfo";
import { ContactData } from "../ContactData";
import { Password } from "../Password";
import { ConfirmStep } from "../ConfirmStep";
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

  const goToStep = (targetStep: number, field: keyof IFormData) => {
    setStep(targetStep);
    setTimeout(() => setFocus(field), 0);
  };

  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<string>("forward");

  const nextStep = async () => {
    let fieldsToValidate: (keyof IFormData)[] = [];
    if (step === 1) fieldsToValidate = ["name", "age"];
    if (step === 2) fieldsToValidate = ["email", "phone"];
    if (step === 3) fieldsToValidate = ["password", "confirmPassword"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setDirection("forward");
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: IFormData) => {
    console.log("Форма отправлена:", data);
  };

  const formData = useMemo(() => watch(), [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className={`form-step ${direction}`} key={step}>
        {step === 1 && (
          <PersonalInfo
            register={register}
            errors={errors}
            nextStep={nextStep}
          />
        )}

        {step === 2 && (
          <ContactData
            register={register}
            errors={errors}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <Password
            register={register}
            errors={errors}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 4 && (
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
