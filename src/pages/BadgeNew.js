import React from "react";

import "./styles/BadgeNew.css";

//images
import logo from "../images/badge-header.svg";
//components
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Richard"
                lastName="Kaufman"
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                jobTitle="Senior Dev"
                twitter="Sparragus"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
