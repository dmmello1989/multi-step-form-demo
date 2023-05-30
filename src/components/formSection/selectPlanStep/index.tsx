import { FormWrapper } from "../formWrapper/index.js";
import IconAdvanced from "../../../assets/icon-advanced.svg";
import IconArcade from "../../../assets/icon-arcade.svg";
import IconPro from "../../../assets/icon-pro.svg";
import { useState } from "react";
import * as S from "../styles.ts";

type PlanProps = {
  plan: string,
};

type PlanFormProps = PlanProps & {
  updateFields: (fields: Partial<PlanProps>) => void
};

const CARDS = [
  {
    image: IconArcade,
    title: "arcade",
    priceMonthly: 9,
    priceYearly: 90,

  },
  {
    image: IconAdvanced,
    title: "advanced",
    priceMonthly: 12,
    priceYearly: 120
  },
  {
    image: IconPro,
    title: "pro",
    priceMonthly: 15,
    priceYearly: 150
  },
];

export const SelectPlanStep = ({ plan, updateFields }: PlanFormProps) => {
  const [selectedPlan, setSelectedPlan] = useState(plan);
  const [planLength, setPlanLength] = useState("monthly");
  const newPlanLength = planLength === "monthly" ? "yearly" : "monthly";

  return (
    <FormWrapper
      isColumn
      title="Select your plan"
      subtitle="You have the option of monthly or yearly biling."
    >
      <S.Wrapper>
        {CARDS.map(card => {
          const handlePriceCard = planLength === "monthly" ? `$${card.priceMonthly}/mo` : `$${card.priceYearly}/yr`;

          return (
            <S.Card isSelected={plan === card.title} key={`plan-card-${card.title}`} onClick={() => setSelectedPlan(card.title)}>
              <S.CardImage src={card.image} alt={card.title} />

              <div>
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardPrice>{handlePriceCard}</S.CardPrice>
                <S.HiddenInput 
                  type="radio"
                  name="plans"
                  aria-hidden="true"
                  checked={selectedPlan === card.title}
                  onChange={() => updateFields({ plan: card.title })}
                />
              </div>
            </S.Card>
          )
        })}
      </S.Wrapper>

      <S.ToggleWrapper>
        <S.ToggleLabel isToggleActive={planLength === "monthly"}>Montlhy</S.ToggleLabel>
        <S.ToggleSwitch>
          <S.ToggleSlider />
          <S.HiddenInput 
            type="checkbox"
            aria-hidden="true"
            checked={planLength === "yearly"}
            onChange={() => setPlanLength(newPlanLength)} 
          />
        </S.ToggleSwitch>
        <S.ToggleLabel isToggleActive={planLength === "yearly"}>Yearly</S.ToggleLabel>
      </S.ToggleWrapper>
    </FormWrapper>
  )
}