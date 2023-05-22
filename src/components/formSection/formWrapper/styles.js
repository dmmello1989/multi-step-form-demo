import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Title = styled.h2`
  margin: 0 0 4px;
  font-size: 2rem;
  color: #000;
`;

export const Subtitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

export const Children = styled.div`
  display: grid;
  gap: 1rem .5rem;
  justify-content: flex-start;
  grid-template-columns: auto minmax(auto 400px);
`;