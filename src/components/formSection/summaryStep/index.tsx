import { FormWrapper } from "../formWrapper/index.js";
import * as S from "../styles.js";

type SummaryProps = {
  data: object
};

export const SummaryStep = ({ data }: SummaryProps) => {
  console.log("data no summary: ", data)
  return (
    <FormWrapper
      title="Finishing up"
      subtitle="Double-check everything looks OK before confirming."
    >
      <S.Container>
        Double-check everything looks ok
      </S.Container>
    </FormWrapper>
  )
}