import { IFormData } from "../../types/formFields.types";

export interface ConfirmStepProps {
  prevStep: () => void;
  formData: IFormData;
  goToStep: (targetStep: number, field: keyof IFormData) => void;
}
