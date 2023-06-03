import useSummary from "../../../hooks/useSummary.js";
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
  },
  planType: string
};

type SummaryFormProps = SummaryProps & {
  updateFields: (fields: Partial<SummaryProps>) => void
};

export const SummaryStep = ({ data, updateFields }: SummaryFormProps) => {
  const { planTypeObject, updatedPlanType, addonsObject, total, priceObject } = useSummary(data, updateFields);

  console.log({
    planTypeObject,
    updatedPlanType,
    addonsObject,
    priceObject,
    total
  })

  return (
    <FormWrapper
      isColumn
      title="Finishing up"
      subtitle="Double-check everything looks OK before confirming."
    >
        <S.SummaryBox coloredBg>
          <S.SummaryListItem>
            <div>
              <S.SummaryText isPlanTitle>{`${data.plan} (${data.planType})`}</S.SummaryText>
              <S.SummaryChangeButton type="button" onClick={() => updateFields({ planType: updatedPlanType })}>Change</S.SummaryChangeButton>
            </div>
            <S.SummaryPrice isMedium>{priceObject.planPrice}</S.SummaryPrice>
          </S.SummaryListItem>

          <S.Divider />

          {addonsObject.map((addon, index) => (
            <S.SummaryListItem key={addon.id}>
              <S.SummaryText>{addon.text}</S.SummaryText>
              <S.SummaryPrice>{priceObject.addonPrice[index]}</S.SummaryPrice>
            </S.SummaryListItem>
          ))}
        </S.SummaryBox>

        <S.SummaryBox>
          <S.SummaryListItem>
            <S.SummaryText>Total (per {planTypeObject.shortName})</S.SummaryText>
            <S.SummaryPrice isBig>{priceObject.totalPrice}</S.SummaryPrice>
          </S.SummaryListItem>
        </S.SummaryBox>
    </FormWrapper>
  )
}