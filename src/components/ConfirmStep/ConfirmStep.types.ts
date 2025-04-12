import { UseFormSetFocus } from "react-hook-form";
import { IFormData } from "../../types/formFields.types";

export interface ConfirmStepProps {
  formData: IFormData;
  setFocus: UseFormSetFocus<IFormData>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
