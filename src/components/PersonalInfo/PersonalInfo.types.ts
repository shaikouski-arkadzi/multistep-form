import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IFormData } from "../App";

export interface PersonalInfoProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  nextStep: () => void;
}
