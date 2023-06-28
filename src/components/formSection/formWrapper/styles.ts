import styled from "styled-components";
import * as pallette from "../../../styles/pallette";
import ThankYouImage from "../../../assets/icon-thank-you.svg";

type Props = {
  isColumn?: boolean,
  isLastStep?: boolean
};

export const Container = styled.div<Props>`
  ${props => props.isLastStep && `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
  `};

  @media (max-width: 767px) {
    max-width: 343px;
    margin: 0 auto;
    padding: 32px 24px;
    border-radius: 10px;
    background: ${pallette.colorWhite};
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.10);
  }
`;

export const Title = styled.h2<Props>`
  margin: 0 0 11px;
  line-height: 37px;
  font: 700 2rem Ubuntu;
  color: ${pallette.colorMarine};

  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }

  ${props => props.isLastStep && `
    text-align: center;
  `};
`;

export const Subtitle = styled.span<Props>`
  display: block;
  margin: 0 0 35px;
  font-size: 1.25rem;
  font: 400 1rem Ubuntu;
  line-height: 25px;
  color: ${pallette.colorCool};

  @media (max-width: 1023px) {
    margin-bottom: 22px;
  }

  ${props => props.isLastStep && `
    text-align: center;
  `};
`;

export const Image = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 32px;
  background: url(${ThankYouImage}) center/cover no-repeat;

  @media (max-width: 1023px) {
    width: 56px;
    height: 56px;
    margin: 0 auto 24px;
  }
`;

export const Children = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({isColumn}) => isColumn ? "column" : "row"};;
`;