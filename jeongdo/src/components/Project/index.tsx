import { PROJECT_LIST } from "../../input/project";
import { IProjectInfo } from "../../input/project";
import ProjectDesc from "./ProejctDesc";
import ProjectInfo from "./ProjectInfo";
import { S } from "./style";

const Project = () => {
  return (
    <>
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
