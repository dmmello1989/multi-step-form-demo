import { ReactNode } from "react";
import * as S from "./styles.ts";

type FormWrapperProps = {
  title: string,
  subtitle: string,
  isColumn?: boolean,
  children: ReactNode
}

export const FormWrapper = ({ title, subtitle, isColumn, children }: FormWrapperProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Children isColumn={isColumn}>{children}</S.Children>
    </S.Container>
  )
}