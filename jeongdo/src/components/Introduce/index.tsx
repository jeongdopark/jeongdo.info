import { S } from "./style";
import ProjectSummary from "../Project/ProjectSummary";
import Photo from "../../assets/Photo.png";
import { INTRODUCE } from "../../input/introduce";
const Introduce = () => {
  return (
    <>
      <S.Container>
        <S.TopContainer>
          <S.Image src={Photo} />
          <S.TextContainer>
            <S.Text>
              안녕하세요,
              <br />
              프론트엔드 개발자 <span>박정도</span>입니다.
            </S.Text>
            <S.LinkWrapper>
              <S.Link href="https://github.com/jeongdopark">Github</S.Link>
              <S.Link href="https://parkjeongdo.tistory.com/">Blog</S.Link>
              <S.Link href="https://github.com/jeongdopark">Portfolio</S.Link>
            </S.LinkWrapper>
          </S.TextContainer>
        </S.TopContainer>
        <ProjectSummary summary={INTRODUCE} />
      </S.Container>
    </>
  );
};

export default Introduce;
