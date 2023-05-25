import { FormEvent, useState } from "react";
import { AddonsStep } from "../components/formSection/addonsStep/index.tsx";
import { FormSection } from "../components/formSection/index.js";
import { PersonalInfoStep } from "../components/formSection/personalInfoStep/index.tsx";
import { SelectPlanStep } from "../components/formSection/selectPlanStep/index.tsx";
import { SummaryStep } from "../components/formSection/summaryStep/index.tsx";
import { ProgressDashboard } from "../components/progressDashboard/index.js";
import { useMultistepForm } from "../hooks/useMultistepForm.ts";
import * as S from "./styles.ts";

type FormData = {
  name: string,
  email: string,
  phone: string,
  plan: string,
  addons: string[]
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  addons: []
};

export const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData(prevState => {
      return { ...prevState, ...fields }
    });
  };

  const goBack = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    back();
  }
  
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation!");
  }


  const { step, steps, back, next, currentStep, isFirstStep, isLastStep } = useMultistepForm([
    <PersonalInfoStep updateFields={updateFields} {...data} />, 
    <SelectPlanStep updateFields={updateFields} {...data} />, 
    <AddonsStep updateFields={updateFields} {...data} />, 
    <SummaryStep data={data} />
  ]);

  return (
    <S.Body>
      <S.Box>
        <ProgressDashboard currentStep={currentStep} />
        <FormSection
          step={step}
          steps={steps}
          goBack={goBack}
          onSubmit={onSubmit}
          isLastStep={isLastStep}
          isFirstStep={isFirstStep}
          currentStep={currentStep}
        />
      </S.Box>
    </S.Body>
  )
}