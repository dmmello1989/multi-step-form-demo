import styled from "styled-components";
import * as pallette from "../../styles/pallette";
import BgDesktop from "../../assets/bg-sidebar-desktop.svg";

type Props = {
  isActive: boolean
}

export const Sidebar = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 274px;
  height: 100%;
  height: 568px;
  padding: 40px 32px;
  background: url(${BgDesktop}) center/cover no-repeat;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;

  & + & {
    margin-top: 32px;
  }
`;

export const ItemNumber = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  margin-right: 16px;
  border-radius: 50%;
  font: 700 0.875rem Ubuntu;
  background-color: transparent;
  border: 1px solid ${pallette.colorWhite};
  
  ${props => props.isActive && `
    border: 1px solid ${pallette.colorSkyBlue};
    background-color: ${pallette.colorSkyBlue};
  `};
`;

export const ItemStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemStepLabel = styled.span`
  display: block;
  margin-bottom: 4px;
  font: 400 0.75rem Ubuntu;
  color: ${pallette.colorLightBlue};
`;

export const ItemStepTitle = styled.span`
  font: 700 0.875rem Ubuntu;
  letter-spacing: 1px;
  color: ${pallette.colorWhite};
`;

