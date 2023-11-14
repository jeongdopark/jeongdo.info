import styled from "styled-components";
import { THEME } from "../../style/theme";
import { DEVICE } from "../../style/media";

const Header = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  color: ${THEME.COLOR.BLACK};
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  background-color: transparent;
  font-size: 1.6rem;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0px;
  padding: 0px 60px;
  z-index: 9999;
  font-weight: 700;
  @media ${DEVICE.small} {
    font-size: 0.9rem;
    height: 50px;
    padding: 0px 30px;
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
