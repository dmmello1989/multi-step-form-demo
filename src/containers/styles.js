import styled from "styled-components";
import * as pallette from "../styles/pallette";

export const Body = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: ${pallette.colorAlabaster};
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 940px;
  height: 100%;
  max-height: 600px;
  margin: auto;
  padding: 16px;
  border-radius: 15px;
  box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.09);
  background-color: ${pallette.colorWhite};
`;