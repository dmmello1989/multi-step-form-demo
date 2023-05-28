import styled from "styled-components";
import * as pallette from "../../styles/pallette";

type Props = {
  isSelected?: boolean,
  isToggleActive?: boolean,
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 100px 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Button = styled.button`
  font: 500 1rem Ubuntu;
  line-height: 18.38px;
  color: ${pallette.colorCool};
  padding: 14px 24px 16px 25px;

  &[type="submit"] {
    color: ${pallette.colorWhite};
    background: ${pallette.colorMarine};
    border-radius: 8px;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font: 400 0.875rem Ubuntu;
  line-height: 16.09px;
  color: ${pallette.colorMarine};
`;

export const Input = styled.input`
  width: 450px;
  height: 48px;
  margin-bottom: 24px;
  font: 500 1rem Ubuntu;
  color: ${pallette.colorMarine};
  padding: 12px 16px 11px 16px;
  border-radius: 8px;
  border: 1px solid ${pallette.colorGreyLight};

  ::-ms-input-placeholder,
  ::placeholder { 
    color: ${pallette.colorCool};;
    opacity: 1;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 18px;
  width: 100%;
  margin-bottom: 32px;
`;

export const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  width: 138px;
  height: 160px;
  padding: 20px 16px;
  border-radius: 8px;
  border: 1px solid ${pallette.colorGreyLight};
  background-color: ${pallette.colorWhite};
  cursor: pointer;

  &:has([type="radio"]:checked) {
    background-color: ${pallette.colorMagnolia};
    border: 1px solid ${pallette.colorPurplish};
  }
`;

export const CardImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

export const CardTitle = styled.span`
  display: block;
  margin-bottom: 7px;
  font: 500 1rem Ubuntu;
  line-height: 18.38px;
  text-transform: capitalize;
  color: ${pallette.colorMarine};
`;

export const CardPrice = styled.span`
  font: 400 0.875rem Ubuntu;
  line-height: 16.09px;
  color: ${pallette.colorCool};
`;

export const HiddenInput = styled.input`
  position: absolute;
  pointer-events: none;
  opacity: 0;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  border-radius: 8px;
  background-color: ${pallette.colorMagnolia};
`;

export const ToggleLabel = styled.span<Props>`
  display: block;
  font: 700 0.875rem Ubuntu;
  color: ${pallette.colorCool};

  ${props => props.isToggleActive && `
    color: ${pallette.colorMarine};
  `};
`;

export const ToggleSlider = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 10px;
  background-color: ${pallette.colorMarine};
  transition: .4s;
  -webkit-transition: .4s;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 4px;
    bottom: 4px;
    border-radius: 10px;
    background-color: ${pallette.colorWhite};
    transition: .4s;
    -webkit-transition: .4s;
  }
`;

export const ToggleSwitch = styled.label`
  position: relative;
  width: 38px;
  height: 20px;
  margin: 0 24px;
  border-radius: 10px;
  background-color: ${pallette.colorMarine};
  cursor: pointer;

  &:has([type="checkbox"]:checked) ${ToggleSlider}::before {
    transform: translateX(18px);
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
  }
`;

export const Box = styled.div`
  padding: 16px 24px 20px;
`;
