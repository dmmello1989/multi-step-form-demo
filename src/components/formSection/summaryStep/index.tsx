import { usePrices } from "../../../hooks/usePrices.js"; 
import { FormWrapper } from "../formWrapper/index.js";
import * as S from "../styles.js";

type Prices = {
  [key: string]: number;
};

type SummaryProps = {
  data: {
    addons: string[],
    plan: string
    planType: string
  }
};

export const SummaryStep = ({ data }: SummaryProps) => {
  const prices: Prices = usePrices(data.planType);

  const addonsTotal = data.addons.reduce(
    (acc, addon) => acc + (prices[addon] || 0),
    0
  );
  const total = prices[data.plan] + addonsTotal;
    
    console.log("prices no summary: ", prices)
    console.log("data no summary: ", data)
    console.log("addonsTotal no summary: ", addonsTotal)
    console.log("total no summary: ", total)
    
  return (
    <FormWrapper
      title="Finishing up"
      subtitle="Double-check everything looks OK before confirming."
    >
        <S.SummaryBox>
          <S.SummaryListItem>
            <S.SummaryText isPlanTitle>{`${data.plan} (${data.planType})`}</S.SummaryText>
            <S.SummaryPrice isMedium>{prices[data.plan]}</S.SummaryPrice>
          </S.SummaryListItem>
          {data.addons.map((addon) => (
            <S.SummaryListItem key={addon}>
              <S.SummaryText>{addon}</S.SummaryText>
              <S.SummaryPrice>{prices[addon]}</S.SummaryPrice>
            </S.SummaryListItem>
          ))}
          <S.SummaryListItem>
            <S.SummaryText>Total</S.SummaryText>
            <S.SummaryPrice isBig>{total}</S.SummaryPrice>
          </S.SummaryListItem>
        </S.SummaryBox>
    </FormWrapper>
  )
}