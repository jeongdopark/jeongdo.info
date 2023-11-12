import styled from "styled-components";
import { THEME } from "../../style/theme";

const Header = styled.header`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  color: ${THEME.COLOR.BLACK};
  justify-content: space-between;
  width: 100vw;
  height: 60px;
  background-color: transparent;
  font-size: 1.6rem;
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0px;
  padding: 0px 60px;
  z-index: 9999;
  header {
    font-weight: 700;
  }
  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const S = { Header };
