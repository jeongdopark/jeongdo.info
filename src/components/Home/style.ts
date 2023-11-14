import styled from "styled-components";
import { THEME } from "../../style/theme";
import { DEVICE } from "../../style/media";

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
  width: 320px;
  height: 320px;
  z-index: -100;
  stroke-dashoffset: ${(prop) => 942 - 942 * prop.scroll};
  position: sticky;
  transform: translate(-50%, -50%);
  stroke-dasharray: 942;
  left: 50%;

  @media ${DEVICE.small} {
    width: 160px;
    height: 160px;
  }
`;

const Image = styled.img`
  left: 50%;
  position: sticky;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  top: 350px;
  object-fit: cover;
  width: 300px;
  height: 300px;
  margin: 20px;
  z-index: 999;
  @media ${DEVICE.small} {
    width: 155px;
    height: 155px;
    margin: 5px;
  }
`;

const IntroduceContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2.3rem;
    font-weight: 700;
  }
  margin-bottom: 100px;
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
