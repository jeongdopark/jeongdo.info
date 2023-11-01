import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset}
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
  margin-bottom: 200px;
`;

const ContentWrapper = styled.div`
  width: 56%;
`;

export const S = {
  ResumeContainer,
  ContentContainer,
  ContentWrapper,
  GlobalStyles,
};
