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
`;

const InfoTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const InfoPeriod = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

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
  width: 100%;
  padding: 15px;
  min-height: 50px;
  border-radius: ${THEME.RADIUS.M};
  background-color: ${THEME.BACKGROUND.SUMMARY};
  line-height: 25px;
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
`;

const ProjectContainer = styled.section`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

export const S = {
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
