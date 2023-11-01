import { S } from "./style";

interface IProps {
  summary: React.ReactNode;
}

const ProjectSummary = ({ summary }: IProps) => {
  return <S.Summary>{summary}</S.Summary>;
};

export default ProjectSummary;
