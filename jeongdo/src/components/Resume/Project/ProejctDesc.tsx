import { S } from "./style";
import ProjectSummary from "./ProjectSummary";
import ProjectTechStack from "./ProjectTechStack";
import ProjectContribution from "./ProjectContribution";
import { IDesc } from "../../../data/project";

interface IProps {
  desc: IDesc;
}

const ProjectDesc = ({ desc }: IProps) => {
  const { SUMMARY, STACK, CONTRIBUTION } = desc;

  return (
    <S.DescContainer>
      <ProjectSummary summary={SUMMARY} />
      <ProjectTechStack stacks={STACK} />
      <ProjectContribution contributions={CONTRIBUTION} />
    </S.DescContainer>
  );
};

export default ProjectDesc;
