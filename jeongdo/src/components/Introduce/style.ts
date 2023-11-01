import styled from "styled-components";
import { THEME } from "../../theme";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const Image = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: black;
  margin-right: 50px;
`;

const Text = styled.p`
  font-size: 2.5rem;
  font-weight: 600;

  span {
    background: ${THEME.BACKGROUND.BLOG};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
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
