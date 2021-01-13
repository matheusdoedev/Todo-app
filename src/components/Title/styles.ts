import styled from "styled-components";
import colors from "../../styles/settings/colors";

import fonts from "../../styles/settings/fonts";

export const TitleWrapper = styled.h1`
  ${fonts.fontPrimary};
  color: ${colors.lightThemeColors.veryLightGray};
  text-transform: uppercase;
  letter-spacing: 12px;
`;
