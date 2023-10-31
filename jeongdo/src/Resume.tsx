import Header from "./components/Header";
import Introduce from "./components/Introduce";
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
        </S.ContentWrapper>
      </S.ContentContainer>
    </>
  );
};

export default Resume;
