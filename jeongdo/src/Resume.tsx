import Header from "./components/Header";
import Introduce from "./components/Introduce";
import ProjectDesc from "./components/Project/ProejctDesc";
import ProjectInfo from "./components/Project/ProjectInfo";
import { IProjectInfo } from "./input/project";
import Title from "./components/Title";
import { PROJECT } from "./input/project";
import { S } from "./style";

const Resume = () => {
  return (
    <>
      <Header title="Jeongdo Park" />
      <S.ContentContainer>
        <S.ContentWrapper>
          <Introduce />
          <Title title="Project." />
          <>
            {PROJECT.map((project_info: IProjectInfo) => (
              <S.ProjectContainer>
                <ProjectInfo info={project_info.INFO} />
                <ProjectDesc desc={project_info.DESC} />
              </S.ProjectContainer>
            ))}
          </>
        </S.ContentWrapper>
      </S.ContentContainer>
    </>
  );
};

export default Resume;
