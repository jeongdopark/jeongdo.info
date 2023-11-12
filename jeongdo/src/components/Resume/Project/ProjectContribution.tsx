import { S } from "./style";

interface IProps {
  contributions: any;
}

const ProjectContribution = ({ contributions }: IProps) => {
  return (
    <S.Ul>
      {contributions.map((c: any) => (
        <S.Li>{c}</S.Li>
      ))}
    </S.Ul>
  );
};

export default ProjectContribution;
