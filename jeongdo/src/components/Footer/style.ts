import styled from "styled-components";
import { THEME } from "../../theme";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: ${THEME.BACKGROUND.BLOG};
  font-size: ${THEME.FONT_SIZE.S};
  color: ${THEME.COLOR.WHITE};

  a {
    text-decoration: none;
    color: ${THEME.COLOR.WHITE};
  }
`;
export const S = {
  Footer,
};
