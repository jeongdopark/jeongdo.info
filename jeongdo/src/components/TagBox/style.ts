import styled from "styled-components";
import { THEME } from "../../theme";
type Props = {
  background: string;
  color: string;
  font?: string;
  weight?: string;
};

const Tag = styled.div<Props>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.font || THEME.FONT_SIZE.M};
  padding: 1px 5px;
  font-weight: ${(props) => props.weight || "500"};
  border-radius: ${THEME.RADIUS.S};
  cursor: ${(props) => (props.weight ? "pointer" : "normal")};
  display: inline-block;
  margin: 0px 3px;
`;

export const S = {
  Tag,
};
