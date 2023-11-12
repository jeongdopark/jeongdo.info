import styled from "styled-components";
import { THEME } from "../../style/theme";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: ${THEME.COLOR.WHITE};
  font-size: ${THEME.FONT_SIZE.S};
  color: ${THEME.COLOR.BLACK};

  a {
    text-decoration: none;
    color: ${THEME.COLOR.BLACK};
  }
`;
export const S = {
  Footer,
};
