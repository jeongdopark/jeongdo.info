import { S } from "./style";

const Card = () => {
  return (
    <S.CardContainer>
      <div>
        <S.Name>Jeongdo Park</S.Name>
        <S.Position>Front-end Engineer</S.Position>
      </div>
      <S.CardIntroduce>
        <div>간결함을 좋아합니다.</div>
        <div>UI/UX에 관심이 있습니다.</div>
      </S.CardIntroduce>
      <S.Position>jeongdo.dev@gmail.com</S.Position>
    </S.CardContainer>
  );
};

export default Card;
