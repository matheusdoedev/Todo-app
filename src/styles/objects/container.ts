import styled from "styled-components";

interface ContainerProps {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  max-width: 1440px;
  width: ${({ width }) => (width ? width : "85%")};
  margin: 0 auto;

  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
`;
