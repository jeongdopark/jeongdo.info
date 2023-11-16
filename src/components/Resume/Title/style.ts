import styled from "styled-components";
import { THEME } from "../../../style/theme";
import { DEVICE } from "../../../style/media";

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  margin-top: 100px;
  color: ${THEME.BACKGROUND.BLACK};

  @media ${DEVICE.small} {
    font-size: 1.9rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${THEME.BACKGROUND.SUMMARY};
  margin-top: 5px;
`;

export const S = { Title, Divider };
