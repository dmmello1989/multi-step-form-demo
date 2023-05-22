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
      <S.Label htmlFor="arcade" value="Arcade" onChange={(e) => updateFields(e.target.value)}>Arcade</S.Label>
      <S.Input 
        id="arcade"
        name="arcade"
        type="radio"
        checked={plan === "arcade"}
        onChange={() => updateFields({ plan: "arcade" })}
      />
      <S.Label htmlFor="advanced">Advanced</S.Label>
      <S.Input 
        id="advanced"
        name="advanced"
        type="radio"
        checked={plan === "advanced"}
        onChange={() => updateFields({ plan: "advanced" })}
      />
      <S.Label htmlFor="pro">Pro</S.Label>
      <S.Input 
        id="pro"
        name="pro"
        type="radio"
        checked={plan === "pro"}
        onChange={() => updateFields({ plan: "pro" })}
      />
    </FormWrapper>
  )
}