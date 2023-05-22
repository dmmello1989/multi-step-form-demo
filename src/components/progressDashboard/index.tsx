import * as S from "./styles.js";

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

export const ProgressDashboard = () => {
  return (
    <S.Sidebar>
      <S.List>
        {SIDEBAR_STEPS.map(item => (
          <S.Item key={item.step}>
            <S.ItemNumber>{item.step}</S.ItemNumber>
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