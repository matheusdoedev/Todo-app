import React from "react";

import Routes from "./routes";

import Gaps from "./styles/tools/gaps";
import Reset from "./styles/generic/reset";

const App = () => {
  return (
    <>
      <Gaps />
      <Reset />

      <Routes />
    </>
  );
};

export default App;
