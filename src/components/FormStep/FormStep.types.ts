import { UseFormRegister, FieldErrors, UseFormTrigger } from "react-hook-form";
import { IFormData } from "../../types/formFields.types";
import { steps } from "../../data/steps";

export type StepNumber = keyof typeof steps;

export interface FormStepProps {
  step: StepNumber;
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  setStep: React.Dispatch<React.SetStateAction<StepNumber>>;
  trigger: UseFormTrigger<IFormData>;
}
