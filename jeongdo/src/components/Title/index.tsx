import { S } from "./style";

const Title = ({ title }) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Divider></S.Divider>
    </>
  );
};

export default Title;
