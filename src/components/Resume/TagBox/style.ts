import styled from "styled-components";
import { THEME } from "../../../style/theme";
import { DEVICE } from "../../../style/media";
type Props = {
  background: string;
  color: string;
  font?: string;
  weight?: string;
  type: string;
};

const Tag = styled.div<Props>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${THEME.FONT_SIZE.S};
  padding: 5px;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  border-radius: ${THEME.RADIUS.S};
  cursor: ${(props) => (props.weight ? "pointer" : "normal")};
  display: inline-block;
  margin: 0px 3px;

  @media ${DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.S};
    padding: 3px;
    margin: ${(props) => (props.type === "HIGHLIGHT" ? "0px 3px 5px 3px" : "0px 3px")};
  }
  @media ${DEVICE.xsmall} {
    font-size: ${THEME.FONT_SIZE.S};
  }
`;

export const S = {
  Tag,
};
