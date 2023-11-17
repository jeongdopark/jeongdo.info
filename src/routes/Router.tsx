import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Interest from "../pages/Interest";
import Layout from "../layout";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/info"} element={<Resume />} />
          <Route path={"/interest"} element={<Interest />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
