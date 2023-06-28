import { ReactNode } from "react";
import * as S from "./styles.ts";

type FormWrapperProps = {
  title: string,
  subtitle: string,
  isColumn?: boolean,
  children: ReactNode,
  isLastStep?: boolean
}

export const FormWrapper = ({ title, subtitle, isColumn, isLastStep, children }: FormWrapperProps) => {
  return (
    <S.Container isLastStep={isLastStep}>
      {!isLastStep ? (
        <>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <S.Children isColumn={isColumn}>{children}</S.Children>
        </>
      ) : (
        <>
          <S.Image />
          <S.Title isLastStep>{title}</S.Title>
          <S.Subtitle isLastStep>{subtitle}</S.Subtitle>
        </>
      )}
    </S.Container>
  )
}