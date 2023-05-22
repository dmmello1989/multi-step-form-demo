import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    setCurrentStep(prevStep => {
      return prevStep > steps.length - 1 ? prevStep : prevStep + 1;
    })
  }

  const back = () => {
    setCurrentStep(prevStep => {
      return prevStep <= 0 ? prevStep : prevStep - 1;
    })
  }

  const goTo = (index: number) => {
    setCurrentStep(index);
  }

  return {
    next,
    back,
    goTo,
    steps,
    currentStep,
    step: steps[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1 
  }
}