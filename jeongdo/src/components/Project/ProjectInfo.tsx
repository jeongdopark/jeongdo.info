import { S } from "./style";
import { SVG } from "../SVG";
import { IInfo } from "../../input/project";

interface IProps {
  info: IInfo;
}

const ProjectInfo = ({ info }: IProps) => {
  const { TITLE, PERIOD, GITHUB, DEPLOY } = info;
  return (
    <S.InfoContainer>
      <S.InfoImg />
      <S.InfoTitle>{TITLE}</S.InfoTitle>
      <S.InfoPeriod>{PERIOD}</S.InfoPeriod>
      <S.LinkContianer>
        <a href={GITHUB}>{SVG.Github}</a>
        <a href={DEPLOY}>{SVG.Deploy}</a>
      </S.LinkContianer>
    </S.InfoContainer>
  );
};

export default ProjectInfo;
