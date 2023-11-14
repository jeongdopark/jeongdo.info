import { S } from "../style/style";
import Image from "../components/Home/Image";
import Introduce from "../components/Home/Introduce";
const Home = () => {
  return (
    <S.HomeContainer>
      <Image />
      <Introduce />
    </S.HomeContainer>
  );
};

export default Home;
