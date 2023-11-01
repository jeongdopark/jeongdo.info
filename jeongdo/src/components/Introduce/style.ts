import styled from "styled-components";
import { THEME } from "../../style/theme";
import { DEVICE } from "../../style/media";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const Image = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-right: 50px;
  @media ${DEVICE.medium} {
    margin-bottom: 30px;
  }

  @media ${DEVICE.small} {
    width: 120px;
    height: 120px;
  }
`;

const Text = styled.p`
  font-size: ${THEME.TITLE.L};
  font-weight: 600;

  span {
    background: ${THEME.BACKGROUND.BLOG};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  @media ${DEVICE.medium} {
    font-size: ${THEME.TITLE.M};
  }

  @media ${DEVICE.small} {
    font-size: ${THEME.TITLE.S};
  }
`;

const LinkWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const Link = styled.a`
  font-size: 13px;
  text-decoration-line: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: gray;
    transition: 0.3s ease-in-out;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
`;

const TopContainer = styled.div`
  display: flex;
  margin-bottom: 50px;

  @media ${DEVICE.medium} {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Ul = styled.ul`
  margin-top: 40px;
  font-size: 17px;
  li {
    line-height: 2rem;
  }
`;
export const S = {
  TopContainer,
  Container,
  Image,
  Text,
  LinkWrapper,
  Link,
  TextContainer,
  Ul,
};
