import React from "react";

import * as T from "./styles";

const Title: React.FC<{ content: string }> = ({ content }) => {
  return <T.TitleWrapper>{content}</T.TitleWrapper>;
};

export default Title;
