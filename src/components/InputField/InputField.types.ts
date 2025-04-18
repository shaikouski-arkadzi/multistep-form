import { FieldError, UseFormRegister } from "react-hook-form";
import { IFormData } from "../../types/formFields.types";

export interface InputFieldProps {
  name: keyof IFormData;
  type: string;
  register: UseFormRegister<IFormData>;
  error?: FieldError;
  placeholder: string;
}
