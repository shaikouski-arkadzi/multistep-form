import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "../types/formFields.types";
import { StepNumber } from "../components/FormStep";
import { schema } from "../utils/validation";
import { FormContext } from "./FormContext";

interface Props {
  children: React.ReactNode;
}

export const FormProvider: React.FC<Props> = ({ children }) => {
  const form = useForm<IFormData>({ resolver: yupResolver(schema) });
  const [step, setStep] = useState<StepNumber>(1);

  const contextValue = useMemo(() => ({ step, setStep, form }), [step, form]);

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
