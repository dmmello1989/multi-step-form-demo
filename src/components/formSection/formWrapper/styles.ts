import styled from "styled-components";
import * as pallette from "../../../styles/pallette";

type Props = {
  isColumn?: boolean
};

export const Container = styled.div`
  @media (max-width: 767px) {
    padding: 32px 24px;
    border-radius: 10px;
    background: ${pallette.colorWhite};
  }
`;

export const Title = styled.h2`
  margin: 0 0 11px;
  line-height: 37px;
  font: 700 2rem Ubuntu;
  color: ${pallette.colorMarine};
  `;

export const Subtitle = styled.span`
  display: block;
  margin: 0 0 35px;
  font-size: 1.25rem;
  font: 400 1rem Ubuntu;
  line-height: 25px;
  color: ${pallette.colorCool};
`;

export const Children = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({isColumn}) => isColumn ? "column" : "row"};;
`;