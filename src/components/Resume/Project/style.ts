import styled from "styled-components";
import { THEME } from "../../../style/theme";
import { DEVICE } from "../../../style/media";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 230px;
  justify-content: space-around;

  @media ${DEVICE.small} {
    width: 100%;
    flex-direction: row;
    justify-content: start;
    height: auto;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media ${DEVICE.small} {
    margin-left: 30px;
  }
`;

const InfoImg = styled.div`
  color: ${THEME.COLOR.WHITE};
  font-size: ${THEME.FONT_SIZE.L};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  background-color: ${THEME.BACKGROUND.BLACK};
  border-radius: 6px;
  border: none;

  @media ${DEVICE.small} {
    width: 90px !important;
    height: 90px !important;
    font-size: ${THEME.FONT_SIZE.S};
  }
`;

const InfoTitle = styled.span`
  font-size: ${THEME.FONT_SIZE.XXL};
  font-weight: bold;
  white-space: nowrap;

  @media ${DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.XL};
  }
`;

const InfoPeriod = styled.span`
  font-size: ${THEME.FONT_SIZE.M};
  font-weight: 500;
  white-space: nowrap;

  @media ${DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.S};
  }
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

  @media ${DEVICE.small} {
    width: 100%;
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  min-height: 50px;
  font-size: ${THEME.FONT_SIZE.L};
  border-radius: ${THEME.RADIUS.M};
  line-height: 19px;
  font-weight: ${THEME.FONT_WEIGHT.S};
  background-color: ${THEME.BACKGROUND.SUMMARY};

  span {
    padding: 3px;
    margin: 0px 3px;
  }
  @media ${DEVICE.small} {
    margin-bottom: 5px;
  }
  @media ${DEVICE.xsmall} {
    font-size: ${THEME.FONT_SIZE.S};
  }
`;

const TechStackContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 5px;
  margin-top: 10px;

  span {
    padding: 7px;
    margin: 0px;
  }
`;
const Ul = styled.ul`
  margin-top: 20px;
`;

const Li = styled.li`
  div {
    min-height: 30px;
    line-height: 20px;
  }
  margin-left: 20px;
  /* margin-bottom: 13px; */
  font-size: ${THEME.FONT_SIZE.L};
  line-height: 1rem;
  @media ${DEVICE.small} {
    font-size: ${THEME.FONT_SIZE.S};
    margin-bottom: 1px;
  }
  @media ${DEVICE.medium} {
    font-size: ${THEME.FONT_SIZE.M};
  }
`;

const ProjectContainer = styled.section`
  display: flex;
  width: 100%;
  margin-top: 30px;

  @media ${DEVICE.small} {
    flex-direction: column;
    align-items: start;
  }
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
  InfoBox,
};
