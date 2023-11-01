import styled from "styled-components";
import { THEME } from "../../style/theme";
const Header = styled.header`
  width: 100vw;
  height: 80px;
  background: ${THEME.BACKGROUND.BLOG};
  font-size: 1.6rem;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  line-height: 80px;
`;

export const S = { Header };
