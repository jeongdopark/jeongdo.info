import styled from "styled-components";
import { THEME } from "../../style/theme";
import { DEVICE } from "../../style/media";
type Props = {
  background: string;
  color: string;
  font?: string;
  weight?: string;
};

const Tag = styled.div<Props>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.font || THEME.FONT_SIZE.S};
  padding: 5px;
  font-weight: 500;
  border-radius: ${THEME.RADIUS.S};
  cursor: ${(props) => (props.weight ? "pointer" : "normal")};
  display: inline-block;
  margin: 0px 3px;

  @media ${DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.MS};
    padding: 5px;
  }
  @media ${DEVICE.xsmall} {
    font-size: ${THEME.FONT_SIZE.S};
    padding: 5px;
  }
`;

export const S = {
  Tag,
};
