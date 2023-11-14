import { S } from "./style";
import ProjectSummary from "../Project/ProjectSummary";
import Photo from "../../../assets/Photo.png";
import { INTRODUCE } from "../../../data/introduce";
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
              <S.Link href="https://github.com/jeongdopark" target="_blank">
                GitHub
              </S.Link>
              <S.Link href="https://parkjeongdo.tistory.com/" target="_blank">
                Blog
              </S.Link>
              <S.Link
                href="https://jeongdopark.notion.site/Portfolio-f8a581ab604144fa8c8acb8ad7e23b0b?pvs=4"
                target="_blank"
              >
                Portfolio
              </S.Link>
            </S.LinkWrapper>
          </S.TextContainer>
        </S.TopContainer>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          <ProjectSummary summary={INTRODUCE} />
        </div>
      </S.Container>
    </>
  );
};

export default Introduce;
