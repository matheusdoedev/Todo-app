import React from "react";

import { Container } from "../../styles/objects/container";
import Title from "../Title/Title";

import * as H from "./styles";

const Header = () => {
  return (
    <H.HeaderWrapper>
      <Container justifyContent="flex-start" width="35%">
        <Title content="Todo" />
      </Container>
    </H.HeaderWrapper>
  );
};

export default Header;
