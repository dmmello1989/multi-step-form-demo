import { FormEvent } from "react";
import { FormWrapper } from "../formWrapper/index.js";
import * as S from "../styles.js";

type PlanProps = {
  plan: string
};

type PlanFormProps = PlanProps & {
  updateFields: (fields: Partial<PlanProps>) => void
};

export const SelectPlanStep = ({ plan, updateFields }: PlanFormProps) => {
  return (
    <FormWrapper
      title="Select your plan"
      subtitle="You have the option of monthly or yearly biling."
    >
      <S.Card>

        <S.Label htmlFor="arcade">Arcade</S.Label>
        <S.CardInput 
          id="arcade"
          name="arcade"
          type="radio"
          checked={plan === "arcade"}
          onChange={() => updateFields({ plan: "arcade" })}
        />
      </S.Card>

      <S.Card>

        <S.Label htmlFor="advanced">Advanced</S.Label>
        <S.CardInput
          id="advanced"
          name="advanced"
          type="radio"
          checked={plan === "advanced"}
          onChange={() => updateFields({ plan: "advanced" })}
        />
      </S.Card>

      <S.Card>

        <S.Label htmlFor="pro">Pro</S.Label>
        <S.CardInput 
          id="pro"
          name="pro"
          type="radio"
          checked={plan === "pro"}
          onChange={() => updateFields({ plan: "pro" })}
        />
      </S.Card>
    </FormWrapper>
  )
}