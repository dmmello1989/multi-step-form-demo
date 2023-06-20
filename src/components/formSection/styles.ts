import styled from "styled-components";
import * as pallette from "../../styles/pallette";
import IconCheck from "../../assets/icon-checkmark.svg";

type Props = {
  isSelected?: boolean,
  isToggleActive?: boolean,
  isPlanTitle?: boolean,
  isMedium?: boolean,
  isBig?: boolean,
  coloredBg?: boolean
};

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 100px 16px;

  @media (max-width: 1023px) {
    flex-direction: row;
    margin: -100px auto 0;
    padding: 16px;
    background-color: transparent;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1023px) {
    border-radius: 10px;
    background-color: ${pallette.colorWhite};
  }
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

  &:focus {
    border: 1px solid ${pallette.colorPurplish};
  }

  &:invalid:not(:placeholder-shown):not(:focus) {
    border: 1px solid ${pallette.colorStrawberry};
  }

  @media (max-width: 767px) {
    width: 295px;
  }
`;

export const Wrapper = styled.div`
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
  margin-bottom: 39px;
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

export const MonthsFree = styled.span`
  display: block;
  margin: 6px 0 0;
  font: 400 0.75rem Ubuntu;
  color: ${pallette.colorMarine};
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
  cursor: pointer;

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

export const AddonBox = styled.div<Props>`
  position: relative;
  padding: 16px 24px 20px;
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid ${pallette.colorGreyLight};
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 24px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background-color: transparent;
    border: 2px solid ${pallette.colorGreyLight};
  }

  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 5px);
    left: 26px;
    width: 16px;
    height: 11px;
  }

  &:hover {
    border-color: ${pallette.colorPurplish};
  }

  &:has([type="checkbox"]:checked) {
    background-color: ${pallette.colorMagnolia};
    border: 2px solid ${pallette.colorPurplish};

    &::before {
      border-color: ${pallette.colorPurplish};
      background-color: ${pallette.colorPurplish};
    }
    
    &::after {
      background: url(${IconCheck}) center/cover no-repeat;
    }
  }
`;

export const BoxCheck = styled.img<Props>`
  display: none;

  ${props => props.isSelected && `
    display: block;
  `};
`;

export const AddonTitle = styled.span`
  display: block;
  margin: 0 0 7px 34px;
  font: 500 1rem Ubuntu;
  color: ${pallette.colorMarine};
`;

export const AddonText = styled.p`
  margin: 0 0 0 34px;
  font: 400 .9375rem Ubuntu;
  color: ${pallette.colorCool};
`;

export const AddonPrice = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  font: 400 0.875rem Ubuntu;
  color: ${pallette.colorPurplish};
`;

export const SummaryBox = styled.div<Props>`
  display: grid;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding: 0 24px 24px;
  border-radius: 8px;

  ${props => props.coloredBg && `
    background-color: ${pallette.colorAlabaster}; 
  `};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background-color: ${pallette.colorCool};
`;

export const SummaryListItem = styled.div`
  display: flex;
  padding-top: 16px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  &:first-of-type:not(:only-child) {
    padding-bottom: 24px;
  }
`;

export const SummaryText = styled.div<Props>`
  grid-column: 1;
  color: ${pallette.colorCool};

  ${props => props.isPlanTitle && `
    font: 500 1rem Ubuntu;
    color: ${pallette.colorMarine};
    text-transform: capitalize;
  `};
`;

export const SummaryChangeButton = styled.button`
  display: block;
  margin-top: 7px;
  padding: 0;
  font: 400 0.875rem Ubuntu;
  color: ${pallette.colorCool};
  border: none;
  box-shadow: none;
  text-decoration: underline;
`;

export const SummaryPrice = styled.div<Props>`
  grid-column: 2;
  color: ${pallette.colorMarine};

  ${props => props.isMedium && `
    font: 700 1rem Ubuntu;
  `};

  ${props => props.isBig && `
    font: 700 1.25rem Ubuntu;
    color: ${pallette.colorPurplish};
  `};
`;