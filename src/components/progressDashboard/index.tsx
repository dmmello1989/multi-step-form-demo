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
  currentStep: number,
  data: {
    name: string,
    email: string,
    phone: string
  },
  goTo: (step: number) => void
};

export const ProgressDashboard = ({ currentStep, goTo, data }: ProgressProps) => {
  const handleGoTo = (newStep: number) => {
    const notAllowed = currentStep === 0 && (!data.name || !data.email || !data.phone);

    if (!notAllowed) {
      return goTo(newStep);
    }
  };

  return (
    <S.Sidebar>
      <S.List>
        {SIDEBAR_STEPS.map((item, index) => {
          const isActive =
            (currentStep === 4 && index === SIDEBAR_STEPS.length - 1) ||
            currentStep + 1 === item.step;

          return (
            <S.Item key={item.step} onClick={() => handleGoTo(item.step - 1)}>
              <S.ItemNumber isActive={isActive}>{item.step}</S.ItemNumber>
              <S.ItemStepWrapper>
                <S.ItemStepLabel>STEP {item.step}</S.ItemStepLabel>
                <S.ItemStepTitle>{item.title}</S.ItemStepTitle>
              </S.ItemStepWrapper>
            </S.Item>
          )
        })}
      </S.List>
    </S.Sidebar>
  )
}