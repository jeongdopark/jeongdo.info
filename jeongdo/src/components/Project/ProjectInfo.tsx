import { S } from "./style";
import { SVG } from "../SVG";

interface IProps {
  img_url: string;
  title: string;
  period: string;
  github: string;
  deploy: string;
}

const ProjectInfo = ({ title, period, github, deploy }: IProps) => {
  return (
    <S.InfoContainer>
      <S.InfoImg />
      <S.InfoTitle>{title}</S.InfoTitle>
      <S.InfoPeriod>{period}</S.InfoPeriod>
      <S.LinkContianer>
        <a href={github}>{SVG.Github}</a>
        <a href={deploy}>{SVG.Deploy}</a>
      </S.LinkContianer>
    </S.InfoContainer>
  );
};

export default ProjectInfo;
