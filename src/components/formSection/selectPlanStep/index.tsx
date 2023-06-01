import { FormWrapper } from "../formWrapper/index.js";
import IconAdvanced from "../../../assets/icon-advanced.svg";
import IconArcade from "../../../assets/icon-arcade.svg";
import IconPro from "../../../assets/icon-pro.svg";
import { useState } from "react";
import * as S from "../styles.ts";

type PlanProps = {
  plan: string,
  planType: string
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

export const SelectPlanStep = ({ plan, planType, updateFields }: PlanFormProps) => {
  const [selectedPlan, setSelectedPlan] = useState(plan);
  const [selectedPlanType, setSelectedPlanType] = useState("monthly");
  const newPlanLength = selectedPlanType === "monthly" ? "yearly" : "monthly";

  console.log("plan [selectPlanStep]: ", plan)

  const doSelectPlan = (selectedPlan: string) => {
    setSelectedPlan(selectedPlan);
    updateFields({ plan: selectedPlan });
  }

  const doSelectPlanType = (planType: string) =>  {
    setSelectedPlanType(planType);
    updateFields({ planType: planType })
  }

  return (
    <FormWrapper
      isColumn
      title="Select your plan"
      subtitle="You have the option of monthly or yearly biling."
    >
      <S.Wrapper>
        {CARDS.map(card => {
          const handlePriceCard = selectedPlanType === "monthly" ? `$${card.priceMonthly}/mo` : `$${card.priceYearly}/yr`;

          return (
            <S.Card isSelected={plan === card.title} key={`plan-card-${card.title}`} onClick={() => doSelectPlan(card.title)}>
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
        <S.ToggleLabel isToggleActive={planType === "monthly"}>Montlhy</S.ToggleLabel>
        <S.ToggleSwitch>
          <S.ToggleSlider />
          <S.HiddenInput 
            type="checkbox"
            aria-hidden="true"
            checked={planType === "yearly"}
            onChange={() => doSelectPlanType(newPlanLength)} 
          />
        </S.ToggleSwitch>
        <S.ToggleLabel isToggleActive={planType === "yearly"}>Yearly</S.ToggleLabel>
      </S.ToggleWrapper>
    </FormWrapper>
  )
}