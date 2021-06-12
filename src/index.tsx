import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FontStyles from "globals/fonts";

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
