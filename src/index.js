import React from "react";
import ReactDOM from "react-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//styles
import "./global.css";

import App from "./components/App";

const container = document.getElementById("app");

ReactDOM.render(<App />, container);
