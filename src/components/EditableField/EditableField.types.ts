import { IFormData } from "../App";

export interface EditableFieldProps {
  label: string;
  value: string | number;
  fieldName: keyof IFormData;
  goToStep: (step: number, field: keyof IFormData) => void;
}
