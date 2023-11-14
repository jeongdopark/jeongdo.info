import React from "react";
import ReactDOM from "react-dom/client";
import { S } from "./style/style.ts";
import "./index.css";
import Router from "./routes/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <S.GlobalStyles />
    <Router />
  </React.StrictMode>
);
