import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { DEVICE } from "./media";
import { THEME } from "./theme";
const GlobalStyles = createGlobalStyle`
${reset}
body,
p,
ul,
li,
div,
h1 {
  font-family: "Noto Sans CJK KR";
}

li {
  list-style-type: disc;
}

ol{
  padding-inline-start: 20px;
}


`;

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  width: ${THEME.WRAPPER.L};
  @media ${DEVICE.medium} {
    width: ${THEME.WRAPPER.M};
  }

  @media ${DEVICE.small} {
    width: ${THEME.WRAPPER.S};
  }
  @media ${DEVICE.xsmall} {
    width: ${THEME.WRAPPER.XS};
  }
`;

export const S = {
  ResumeContainer,
  ContentContainer,
  ContentWrapper,
  GlobalStyles,
};
