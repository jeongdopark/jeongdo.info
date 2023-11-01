import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./Resume.tsx";
import { S } from "./style/style.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <S.GlobalStyles />
    <Resume />
  </React.StrictMode>
);
