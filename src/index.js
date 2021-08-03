import React from "react";
import ReactDOM from "react-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//styles
import './global.css'

//componentes
import Badge from "./components/Badge";


const container = document.getElementById("app");

ReactDOM.render(<Badge />, container);
