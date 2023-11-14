import TagBox from "../TagBox";
import { S } from "./style";

interface IProps {
  stacks: string[];
}

const ProjectTechStack = ({ stacks }: IProps) => {
  return (
    <S.TechStackContainer>
      {stacks.map((stack: string) => (
        <TagBox content={stack} type="TECH_STACK" />
      ))}
    </S.TechStackContainer>
  );
};

export default ProjectTechStack;
