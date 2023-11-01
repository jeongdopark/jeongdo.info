import styled from "styled-components";
import { THEME } from "../../theme";

const ActivityContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 0px;
`;

const ActivityTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 9px;
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
  margin-left: 20px;
  margin-bottom: 10px;

  ol {
    li {
      margin-top: 10px;
    }
  }
`;

const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
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
