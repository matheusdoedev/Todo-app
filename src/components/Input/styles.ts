import styled from "styled-components";
import colors from "../../styles/settings/colors";

export const InputBlock = styled.div`
  display: flex;

  input,
  label {
    display: block;
  }

  input {
    padding: var(--gap-sm);

    background: ${colors.darkTheme.veryDarkGrayishBlue2};
    border: none;
    border-radius: 5px;

    color: ${colors.darkTheme.lightGrayishBlue};
  }
`;
