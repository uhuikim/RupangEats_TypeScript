import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FontStyles from "globals/fonts";
import Routes from "Routes";

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App>
      <Routes />
    </App>
  </React.StrictMode>,
  document.getElementById("root")
);
