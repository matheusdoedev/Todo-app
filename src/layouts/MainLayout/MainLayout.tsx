import React from "react";

import * as M from "./styles";

const MainLayout: React.FC = ({ children }) => {
  return <M.MainLayoutWrapper>{children}</M.MainLayoutWrapper>;
};

export default MainLayout;
