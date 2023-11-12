import { S } from "./style";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <S.Header>
      <header>
        <Link to="/">jeongdo</Link>
      </header>
      <nav>
        <ul>
          {/* <li>
            <Link to="/interest">Interest</Link>
          </li> */}
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
};

export default Header;
