import Header from "./components/Header";
import Introduce from "./components/Introduce";
import ProjectInfo from "./components/Project/ProjectInfo";
import Title from "./components/Title";
import { S } from "./style";

const Resume = () => {
  return (
    <>
      <Header title="Jeongdo Park" />
      <S.ContentContainer>
        <S.ContentWrapper>
          <Introduce />
          <Title title="Project." />
          <ProjectInfo
            img_url="./assets/BAEKER.png"
            title="BAEKER"
            period="23. 06 - 23. 10"
            github="www.naver.com"
            deploy="www.naver.com"
          />
        </S.ContentWrapper>
      </S.ContentContainer>
    </>
  );
};

export default Resume;
