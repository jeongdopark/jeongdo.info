import { useEffect, useLayoutEffect, useState } from "react";
import { S } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { SVG } from "../../components/SVG";
const Header = () => {
  const BOUNDARY = 800;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [routerIndex, setRouterIndex] = useState(0);
  const [isBelow, setIsBelow] = useState(false);

  useLayoutEffect(() => {
    if (pathname === "/") setRouterIndex(0);
    else setRouterIndex(1);

    if (window.scrollY > BOUNDARY && pathname === "/resume") setIsBelow(true);
    else setIsBelow(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > BOUNDARY && pathname === "/resume") setIsBelow(true);
      else setIsBelow(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll, pathname]);

  const routerHandler = (num: number) => {
    setRouterIndex(num);

    switch (num) {
      case 0:
        navigate("/");
        break;

      case 1:
        navigate("/resume");
        break;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Header>
      <S.Router>
        <S.RouterJeongdo onClick={() => routerHandler(0)} backgroundColor_index={routerIndex}>
          jeongdo
        </S.RouterJeongdo>
        {isBelow ? (
          <S.RouterInfo onClick={scrollToTop} backgroundColor_index={routerIndex}>
            {SVG.UpDir}
          </S.RouterInfo>
        ) : (
          <S.RouterInfo onClick={() => routerHandler(1)} backgroundColor_index={routerIndex}>
            resume
          </S.RouterInfo>
        )}
      </S.Router>
    </S.Header>
  );
};

export default Header;
