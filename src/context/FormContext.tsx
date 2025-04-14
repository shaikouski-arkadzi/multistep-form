import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";
import { IFormData } from "../types/formFields.types";
import { StepNumber } from "../components/FormStep";

interface FormContextProps {
  step: StepNumber;
  setStep: React.Dispatch<React.SetStateAction<StepNumber>>;
  form: UseFormReturn<IFormData>;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);

export const useFormContextData = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContextData must be used within FormProvider");
  }
  return context;
};
