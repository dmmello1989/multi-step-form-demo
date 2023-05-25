import styled from "styled-components";
import * as pallette from "../../styles/pallette";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 100px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: .5rem;
  justify-content: flex-end;
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
  justify-content: space-between;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 138px;
  height: 160px;
  padding: 20px 16px;
  border-radius: 8px;
  border: 1px solid ${pallette.colorGreyLight};
  background-color: ${pallette.colorWhite};
`;

export const CardImage = styled.img`
  
`;

export const CardTitle = styled.span`
  
`;

export const CardPrice = styled.span`
  
`;

export const CardInput = styled.input`
  opacity: 0;
`;