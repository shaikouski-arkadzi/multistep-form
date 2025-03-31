import { IFormData } from "../App";

export interface ConfirmStepProps {
  prevStep: () => void;
  formData: IFormData;
  goToStep: (targetStep: number, field: keyof IFormData) => void;
}
