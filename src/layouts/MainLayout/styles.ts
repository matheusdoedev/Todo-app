import styled from "styled-components";
import colors from "../../styles/settings/colors";
import fonts from "../../styles/settings/fonts";

export const MainLayoutWrapper = styled.main`
  background-color: ${colors.darkTheme.veryDarkDesaturatedBlue};

  position: relative;
  z-index: 1;

  min-height: 100vh;

  * {
    ${fonts.fontPrimary};
  }
`;
