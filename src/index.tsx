import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FontStyles from "globals/fonts";
import Routes from "Routes";
import ResetStyle from "globals/ResetStyle";

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <ResetStyle />
    <App>
      <Routes />
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
