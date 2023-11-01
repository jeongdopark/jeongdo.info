import Activity from "./components/Activity";
import Education from "./components/Education";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Project from "./components/Project";

import { S } from "./style";

const Resume = () => {
  return (
    <>
      <Header title="Jeongdo Park" />
      <S.ContentContainer>
        <S.ContentWrapper>
          <Introduce />
          <Project />
          <Activity />
          <Education />
        </S.ContentWrapper>
      </S.ContentContainer>
    </>
  );
};

export default Resume;
