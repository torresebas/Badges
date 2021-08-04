import React from "react";
import { Link } from "react-router-dom";

import './styles/Home.css'
import LandImg from "../images/Land.svg";

function Home() {
  return (
    <div className="home">
      <div className="img-container">
        <img className="imagen" src={LandImg} alt="" />
      </div>
      <div>
        <h1 className="title">Welcome <br /> to <br /> ConfTech</h1>

        <Link to="/badges">
          <button className="btn btn-primary" type="button">
            Get Start!
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Home;
