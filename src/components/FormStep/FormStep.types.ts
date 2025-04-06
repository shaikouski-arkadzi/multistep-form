import { UseFormRegister, FieldErrors } from "react-hook-form";
import { IFormData } from "../../types/formFields.types";
import { steps } from "../../data/steps";

export type StepNumber = keyof typeof steps;

export interface FormStepProps {
  stepNumber: number;
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  nextStep: () => void;
}
