import styled from "styled-components";
import * as pallette from "../../styles/pallette";
import BgDesktop from "../../assets/bg-sidebar-desktop.svg";
import BgMobile from "../../assets/bg-sidebar-mobile.svg";

type Props = {
  isActive: boolean
}

export const Sidebar = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 274px;
  height: auto;
  height: 568px;
  padding: 40px 32px;
  background: url(${BgDesktop}) center/cover no-repeat;

  @media (max-width: 1023px) {
    max-width: 100%;
    height: 172px;
    padding: 32px;
    background: url(${BgMobile}) center/cover no-repeat;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 1023px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: flex-start;

  & + & {
    margin-top: 32px;
  }

  @media (max-width: 1023px) {
    & + & {
      margin: 0;
    }
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
  cursor: pointer;
  
  ${props => props.isActive && `
    border: 1px solid ${pallette.colorSkyBlue};
    background-color: ${pallette.colorSkyBlue};
  `};
`;

export const ItemStepWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ItemStepLabel = styled.span`
  display: block;
  margin-bottom: 4px;
  font: 400 0.75rem Ubuntu;
  color: ${pallette.colorLightBlue};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ItemStepTitle = styled.span`
  font: 700 0.875rem Ubuntu;
  letter-spacing: 1px;
  color: ${pallette.colorWhite};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

