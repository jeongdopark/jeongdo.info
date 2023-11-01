import { S } from "./style";
import { SVG } from "../SVG";
import { IInfo } from "../../input/project";

interface IProps {
  info: IInfo;
}

const ProjectInfo = ({ info }: IProps) => {
  const { PARTICIPANT, IMG_URL, TITLE, PERIOD, GITHUB, DEPLOY } = info;
  return (
    <S.InfoContainer>
      <S.InfoImg src={IMG_URL} />
      <S.InfoBox>
        <S.InfoTitle>{TITLE}</S.InfoTitle>
        <S.LinkContianer>
          <a href={GITHUB} target="_blank">
            {SVG.Github}
          </a>
          {DEPLOY && (
            <a href={DEPLOY} target="_blank">
              {SVG.Deploy}
            </a>
          )}
        </S.LinkContianer>
        <S.InfoParticipant>{PARTICIPANT}</S.InfoParticipant>
        <S.InfoPeriod>{PERIOD}</S.InfoPeriod>
      </S.InfoBox>
    </S.InfoContainer>
  );
};

export default ProjectInfo;
