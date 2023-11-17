import styled, { css, keyframes } from "styled-components";
import { THEME } from "../../style/theme";
import { DEVICE } from "../../style/media";

const Header = styled.div`
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${THEME.COLOR.BLACK};
  width: 100vw;
  height: 100px;

  font-size: 1.6rem;
  position: fixed;
  top: 0px;
  padding: 0px 60px;
  z-index: 9999;
  font-weight: 700;
  @media ${DEVICE.small} {
    font-size: 0.9rem;

    padding: 0px 30px;
  }
`;

const Router = styled.div`
  display: flex;
  gap: 8px;
  height: 60%;
  background-color: white;
  border-radius: 24px;
  padding: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

interface ButtonProps {
  backgroundColor_index: number;
}

const RouterButton = styled.button`
  position: relative;
  border-radius: 16px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
  border: none;
  font-size: ${THEME.FONT_SIZE.M};
`;

const RouterJeongdo = styled(RouterButton)<ButtonProps>`
  background-color: ${(props) => (props.backgroundColor_index === 0 ? THEME.BACKGROUND.TECH_STACK : "white")};
  color: ${(props) => (props.backgroundColor_index === 0 ? "white" : THEME.BACKGROUND.TECH_STACK)};

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor_index === 1 ? THEME.BACKGROUND.SUMMARY : THEME.BACKGROUND.TECH_STACK};
  }
`;

const RouterInfo = styled(RouterButton)<ButtonProps>`
  background-color: ${(props) => (props.backgroundColor_index === 1 ? THEME.BACKGROUND.TECH_STACK : "white")};
  color: ${(props) => (props.backgroundColor_index === 1 ? "white" : THEME.BACKGROUND.TECH_STACK)};

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor_index === 0 ? THEME.BACKGROUND.SUMMARY : THEME.BACKGROUND.TECH_STACK};
  }
`;

export const S = { Header, Router, RouterButton, RouterJeongdo, RouterInfo };
