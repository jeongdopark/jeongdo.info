import { PROJECT_LIST } from "../../../data/project";
import { IProjectInfo } from "../../../data/project";
import ProjectDesc from "./ProejctDesc";
import ProjectInfo from "./ProjectInfo";
import Title from "../Title";
import { S } from "./style";

const Project = () => {
  return (
    <>
      <Title title="Projects" />
      {PROJECT_LIST.map((project_info: IProjectInfo) => (
        <S.ProjectContainer>
          <ProjectInfo info={project_info.INFO} />
          <ProjectDesc desc={project_info.DESC} />
        </S.ProjectContainer>
      ))}
    </>
  );
};

export default Project;
