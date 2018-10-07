import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import store from "./redux/store";

render(
  <App />,
  document.getElementById("container")
);