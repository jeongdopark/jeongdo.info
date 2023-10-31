import { S } from "./style";

const ABOUT_ME = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioreseligendi",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioreseligendi",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioreseligendi",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioreseligendi",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioreseligendi",
];

const Introduce = () => {
  return (
    <>
      <S.Container>
        <S.TopContainer>
          <S.Image />
          <S.TextContainer>
            <S.Text>
              안녕하세요,
              <br />
              프론트엔드 개발자 <span>박정도</span>입니다.
            </S.Text>
            <S.LinkWrapper>
              <S.Link>Email</S.Link>
              <S.Link href="https://github.com/jeongdopark">Github</S.Link>
              <S.Link href="https://parkjeongdo.tistory.com/">Blog</S.Link>
            </S.LinkWrapper>
          </S.TextContainer>
        </S.TopContainer>
        <S.Ul>
          {ABOUT_ME.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </S.Ul>
      </S.Container>
    </>
  );
};

export default Introduce;
