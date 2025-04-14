import { steps } from "../../data/steps";

export type StepNumber = keyof typeof steps;

export interface FormStepProps {
  step: StepNumber;
}
