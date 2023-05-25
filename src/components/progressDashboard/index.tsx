import * as S from "./styles.ts";

const SIDEBAR_STEPS = [
  {
    step: 1,
    title: "YOUR INFO"
  },
  {
    step: 2,
    title: "SELECT PLAN"
  },
  {
    step: 3,
    title: "ADD-ONS"
  },
  {
    step: 4,
    title: "SUMMARY"
  },
]

type ProgressProps = {
  currentStep: number
}

export const ProgressDashboard = ({ currentStep }: ProgressProps) => {
  return (
    <S.Sidebar>
      <S.List>
        {SIDEBAR_STEPS.map(item => (
          <S.Item key={item.step}>
            <S.ItemNumber isActive={currentStep + 1 === item.step}>{item.step}</S.ItemNumber>
            <S.ItemStepWrapper>
              <S.ItemStepLabel>STEP {item.step}</S.ItemStepLabel>
              <S.ItemStepTitle>{item.title}</S.ItemStepTitle>
            </S.ItemStepWrapper>
          </S.Item>
        ))}
      </S.List>
    </S.Sidebar>
  )
}