import { useEffect, useState } from "react";
import { S } from "./style";
import Circle from "../../assets/circle.png";

const Image = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const percent = window.scrollY / 700 > 1 ? 700 : window.scrollY;

      setScroll(percent / 700);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <S.Container>
      <S.Center>
        <S.Circle scroll={scroll}>
          <circle
            cx="50%"
            cy="50%"
            r="150"
            fill="none"
            stroke="black"
            stroke-width="10"
          />
        </S.Circle>
        <S.Image src={Circle} alt="home main image" />
      </S.Center>
    </S.Container>
  );
};

export default Image;
