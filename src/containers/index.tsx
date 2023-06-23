import { FormEvent } from "react";
import { useFormData } from "../hooks/useFormData.ts";
import { FormSection } from "../components/formSection/index.js";
import { AddonsStep } from "../components/formSection/addonsStep/index.tsx";
import { PersonalInfoStep } from "../components/formSection/personalInfoStep/index.tsx";
import { SelectPlanStep } from "../components/formSection/selectPlanStep/index.tsx";
import { SummaryStep } from "../components/formSection/summaryStep/index.tsx";
import { ProgressDashboard } from "../components/progressDashboard/index.js";
import { useMultistepForm } from "../hooks/useMultistepForm.ts";
import * as S from "./styles.ts";

export const MultiStepForm = () => {
  const [data, errors, updateFields] = useFormData();

  const { step, steps, back, next, goTo, currentStep, isFirstStep, isLastStep } = useMultistepForm([
    <PersonalInfoStep updateFields={updateFields} {...data} />, 
    <SelectPlanStep updateFields={updateFields} plan={data.plan} planType={data.planType} />, 
    <AddonsStep updateFields={updateFields} planType={data.planType} addons={data.addons} />, 
    <SummaryStep updateFields={updateFields} planType={data.planType} data={data} />
  ]);

  const notAllowed = currentStep === 0 && (!data.name || !data.email || !data.phone);

  const goBack = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    back();
  }
  
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  
    if (notAllowed) {
      return ;
    }

    if (!isLastStep) return next();
    alert("Successful Account Creation!");
  }

  return (
    <S.Body>
      <S.Box>
        <ProgressDashboard currentStep={currentStep} goTo={goTo} data={data} />
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