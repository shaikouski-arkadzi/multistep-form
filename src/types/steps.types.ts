import { IFormData } from "./formFields.types";

export type FieldType = "text" | "number" | "email" | "password";

export interface StepField {
  label: string;
  key: keyof IFormData;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
}

export interface StepData {
  title: string;
  fields: StepField[];
}

export type Steps = Record<number, StepData>;
