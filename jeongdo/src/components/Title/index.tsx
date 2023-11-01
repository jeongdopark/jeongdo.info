import { S } from "./style";

const Title = ({ title }: { title: string }) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Divider></S.Divider>
    </>
  );
};

export default Title;
