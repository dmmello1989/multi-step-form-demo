import { FormEvent, ReactElement } from "react";
import * as S from "./styles.ts";

type UserData = {
  name: string,
  email: string,
  phone: string,
  plan: string,
  addons: string[]
};

type FormProps = {
  step: ReactElement,
  steps: ReactElement[],
  isLastStep: boolean,
  isFirstStep: boolean,
  currentStep: number,
  goBack: (e: Event) => void,
  onSubmit: (e: FormEvent) => void,
}

export const FormSection = ({ 
  step,
  steps,
  goBack,
  onSubmit,
  isLastStep,
  currentStep,
  isFirstStep,
}: FormProps) => {
  return (
    <S.Container>
      <S.Form onSubmit={onSubmit}>

        {step}

        <S.Footer>
          {!isFirstStep ? <S.Button id="back-button" type="button" onClick={(e: any) => goBack(e)}>Go Back</S.Button> : <div />}
          <S.Button type="submit">
            {isLastStep ? "Finish" : "Next Step"}
          </S.Button>
        </S.Footer>
      </S.Form>
    </S.Container>
  )
}