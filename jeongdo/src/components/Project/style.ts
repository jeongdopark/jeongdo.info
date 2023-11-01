import styled from "styled-components";
import { THEME } from "../../theme";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 230px;
  justify-content: space-around;
`;

const InfoImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  background-color: ${THEME.BACKGROUND.BLACK};
  border-radius: 10px;
  border: none;
`;

const InfoTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const InfoPeriod = styled.span`
  font-size: ${THEME.FONT_SIZE.M};
  font-weight: 500;
`;

const InfoParticipant = styled(InfoPeriod)``;

const LinkContianer = styled.div`
  display: flex;
  width: 70px;
  gap: 10px;
`;

const DescContainer = styled.div`
  width: 73%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  border-left: 1px solid ${THEME.BACKGROUND.SUMMARY};
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  min-height: 50px;
  font-size: ${THEME.FONT_SIZE.M};
  border-radius: ${THEME.RADIUS.M};
  line-height: 19px;
  font-weight: ${THEME.FONT_WEIGHT.S};
  background-color: ${THEME.BACKGROUND.SUMMARY};
`;

const TechStackContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;
const Ul = styled.ul`
  margin-top: 20px;
`;

const Li = styled.li`
  margin-left: 20px;
  margin-bottom: 13px;
  font-size: ${THEME.FONT_SIZE.M};
`;

const ProjectContainer = styled.section`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

export const S = {
  InfoParticipant,
  ProjectContainer,
  Ul,
  Li,
  TechStackContainer,
  Summary,
  DescContainer,
  InfoContainer,
  InfoImg,
  InfoTitle,
  InfoPeriod,
  LinkContianer,
};
