import styled from "styled-components";
import { THEME } from "../../style/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100%;
  top: 0px;
`;

const Center = styled.div`
  top: 0px;
  width: 100vw;
  height: 100%;
  position: sticky;
`;

interface IProp {
  scroll: number;
}

const Circle = styled.svg<IProp>`
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  z-index: -100;
  stroke-dashoffset: ${(prop) => 942 - 942 * prop.scroll};
  position: sticky;
  stroke-dasharray: 942;
`;

const Image = styled.img`
  position: sticky;
  border-radius: 50%;
  top: 350px;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: 300px;
  height: 300px;
  margin: 20px;
`;

const IntroduceContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;

  justify-content: center;
  h1 {
    font-size: 2.3rem;
    font-weight: 700;
  }

  span {
    font-size: 1.5rem;
    margin: 10px;
  }
`;

const CardContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  width: 370px;
  height: 220px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px -1px rgba(0, 0, 0, 1);
`;

const Name = styled.div`
  font-size: 1rem;
`;

const Position = styled.div`
  font-size: 0.8rem;
  color: ${THEME.COLOR.GRAY};
  margin-top: 6px;
`;

const CardIntroduce = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-size: 0.9rem;
    margin-bottom: 2px;
  }
`;
export const S = {
  CardIntroduce,
  Position,
  Name,
  CardContainer,
  IntroduceContainer,
  Container,
  Image,
  Center,
  Circle,
};
