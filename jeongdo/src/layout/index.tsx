import { S } from "../style/style";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.Layout>
      <Header />
      {children}
      <Footer />
    </S.Layout>
  );
};

export default Layout;
