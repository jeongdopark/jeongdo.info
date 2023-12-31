import styled from "styled-components";
import { THEME } from "../../../style/theme";
import { DEVICE } from "../../../style/media";

const EducationContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0px;
`;

const EducationTitle = styled.h1`
  font-size: ${THEME.TITLE.M};
  font-weight: 600;
  margin-bottom: 8px;

  @media ${DEVICE.small} {
    font-size: ${THEME.TITLE.S};
  }
`;

const EducationPeriod = styled.span`
  font-size: ${THEME.FONT_SIZE.M};
  margin-bottom: 6px;
`;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;
export const S = {
  EducationWrapper,
  EducationContainer,
  EducationTitle,
  EducationPeriod,
};
