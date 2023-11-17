import { S } from "../style/style";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

interface ILayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <S.Layout>
      <Header />
      <ScrollToTop />
      {children}
      <Footer />
    </S.Layout>
  );
};

export default Layout;
