import { FormWrapper } from "../formWrapper/index.js";
import IconAdvanced from "../../../assets/icon-advanced.svg";
import IconArcade from "../../../assets/icon-arcade.svg";
import IconPro from "../../../assets/icon-pro.svg";
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
  const newPlanLength = planType === "monthly" ? "yearly" : "monthly";

  return (
    <FormWrapper
      isColumn
      title="Select your plan"
      subtitle="You have the option of monthly or yearly biling."
    >
      <S.CardWrapper>
        {CARDS.map(card => {
          const handlePriceCard = planType === "monthly" ? `$${card.priceMonthly}/mo` : `$${card.priceYearly}/yr`;

          return (
            <S.Card 
              key={`plan-card-${card.title}`}
              isSelected={plan === card.title}
              onClick={() => updateFields({ plan: card.title })}
            >
              <S.CardImage src={card.image} alt={card.title} />

              <div>
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardPrice>{handlePriceCard}</S.CardPrice>
                {planType === "yearly" ? <S.MonthsFree>2 months free</S.MonthsFree> : null}
                <S.HiddenInput 
                  type="radio"
                  name="plans"
                  aria-hidden="true"
                  checked={plan === card.title}
                  onChange={() => updateFields({ plan: card.title })}
                />
              </div>
            </S.Card>
          )
        })}
      </S.CardWrapper>

      <S.ToggleWrapper>
        <S.ToggleLabel 
          isToggleActive={planType === "monthly"}
          onClick={() => updateFields({ planType: newPlanLength })}
        >
          Montlhy
        </S.ToggleLabel>
        <S.ToggleSwitch>
          <S.ToggleSlider />
          <S.HiddenInput 
            type="checkbox"
            aria-hidden="true"
            checked={planType === "yearly"}
            onChange={() => updateFields({ planType: newPlanLength })} 
          />
        </S.ToggleSwitch>
        <S.ToggleLabel
          isToggleActive={planType === "yearly"}
          onClick={() => updateFields({ planType: newPlanLength })}
        >
          Yearly
        </S.ToggleLabel>
      </S.ToggleWrapper>
    </FormWrapper>
  )
}