import { FormSection } from "../components/formSection/index.js";
import { ProgressDashboard } from "../components/progressDashboard/index.js";
import * as S from "./styles.js";

export const MultiStepForm = () => {
  return (
    <S.Body>
      <S.Box>
        <ProgressDashboard />
        <FormSection />
      </S.Box>
    </S.Body>
  )
}