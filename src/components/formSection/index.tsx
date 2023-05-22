import { FormEvent, useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { AddonsStep } from "./addonsStep";
import { PersonalInfoStep } from "./personalInfoStep";
import { SelectPlanStep } from "./selectPlanStep";
import { SummaryStep } from "./summaryStep";
import * as S from "./styles";

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
  plan: "",
  addons: []
};

export const FormSection = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData(prevState => {
      return { ...prevState, ...fields }
    });
  };

  const { step, steps, back, next, currentStep, isFirstStep, isLastStep } = useMultistepForm([
    <PersonalInfoStep updateFields={updateFields} {...data} />, 
    <SelectPlanStep updateFields={updateFields} {...data} />, 
    <AddonsStep updateFields={updateFields} {...data} />, 
    <SummaryStep data={data} />
  ]);

  console.log(data)

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

  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>
        <S.StepCounter>{currentStep + 1} / {steps.length}</S.StepCounter>

        {step}

        <S.ButtonsWrapper>
          {!isFirstStep && <S.Button id="back-button" type="button" onClick={(e: any) => goBack(e)}>Back</S.Button>}
          {/* {!isLastStep && <S.Button id="next-button" onClick={next}>Next</S.Button>} */}
          <S.Button type="submit">
            {isLastStep ? "Finish" : "Next"}
          </S.Button>
        </S.ButtonsWrapper>
      </S.Form>
    </S.Container>
  )
}