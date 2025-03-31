import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormData } from "../App";

export interface ContactDataProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  nextStep: () => void;
  prevStep: () => void;
}
