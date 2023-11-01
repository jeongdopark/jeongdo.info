import Activity from "./components/Activity";
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
        </S.ContentWrapper>
      </S.ContentContainer>
    </>
  );
};

export default Resume;
