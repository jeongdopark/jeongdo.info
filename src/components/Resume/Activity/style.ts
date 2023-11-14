import styled from "styled-components";
import { THEME } from "../../../style/theme";
import { DEVICE } from "../../../style/media";

const ActivityContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 30px 0px 0px 0px;
`;

const ActivityTitle = styled.h1`
  font-size: ${THEME.TITLE.M};
  font-weight: 600;
  margin-bottom: 9px;

  @media ${DEVICE.small} {
    font-size: ${THEME.TITLE.S};
  }
`;

const ActivityPeriod = styled.span`
  font-size: ${THEME.FONT_SIZE.M};
  margin-bottom: 4px;
`;

const LinkContainer = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  margin-top: 10px;
  font-size: ${THEME.FONT_SIZE.M};
`;

const Li = styled.li`
  line-height: 1.1rem;
  margin-left: 20px;
  margin-bottom: 10px;
  ol {
    li {
      margin-bottom: 10px;
      list-style-type: square;
    }
  }

  @media ${DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.S};
    margin-bottom: 5px;
  }
`;

const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0px;
  }
`;
export const S = {
  ActivityWrapper,
  Ul,
  Li,
  ActivityContainer,
  ActivityTitle,
  ActivityPeriod,
  LinkContainer,
};
