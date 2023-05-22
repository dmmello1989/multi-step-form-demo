import { ReactNode } from "react";
import * as S from "./styles.js";

type FormWrapperProps = {
  title: string,
  subtitle: string,
  children: ReactNode
}

export const FormWrapper = ({ title, subtitle, children }: FormWrapperProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Children>{children}</S.Children>
    </S.Container>
  )
}