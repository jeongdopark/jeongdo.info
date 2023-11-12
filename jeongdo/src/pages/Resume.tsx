import Activity from "../components/Resume/Activity";
import Education from "../components/Resume/Education";
import Introduce from "../components/Resume/Introduce";
import Project from "../components/Resume/Project";
import { S } from "../style/style";

const Resume = () => {
  return (
    <S.ResumeContainer>
      <S.ContentContainer>
        <S.ContentWrapper>
          <Introduce />
          <Project />
          <Activity />
          <Education />
        </S.ContentWrapper>
      </S.ContentContainer>
    </S.ResumeContainer>
  );
};

export default Resume;
