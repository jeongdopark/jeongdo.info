import { useEffect, useLayoutEffect, useState } from "react";
import { S } from "./style";
import Circle from "../../assets/circle.png";

const Image = () => {
  const SCROLL_EVENT_MAX_HEIGHT = 700;
  const SMALL_DEVICE = 670;
  const [scroll, setScroll] = useState<number>(0);
  const [isSmall, setIsSmall] = useState<boolean>(false);
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useLayoutEffect(() => {
    const viewPortWidth = window.innerWidth;
    if (viewPortWidth <= SMALL_DEVICE) {
      console.log("hello!");

      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  }, [innerWidth]);

  useEffect(() => {
    const handleInnerWidth = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleInnerWidth);

    return () => {
      window.removeEventListener("resize", handleInnerWidth);
    };
  }, [innerWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const percent =
        window.scrollY / SCROLL_EVENT_MAX_HEIGHT > 1
          ? SCROLL_EVENT_MAX_HEIGHT
          : window.scrollY;

      setScroll(percent / SCROLL_EVENT_MAX_HEIGHT);
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
            r={isSmall ? "75" : "150"}
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
