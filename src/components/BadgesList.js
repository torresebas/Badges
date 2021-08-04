import React from "react";

import "./styles/BadgeList.css";

// import avatar from "../images/avatar.svg"
import twitter from "../images/twitter.svg";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="list-container">
              <div className="user-container">
                <div className="">
                  <img className="avatar" src={badge.avatarUrl} alt="avatar" />
                </div>

                <div className="information">
                  <p className="name">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <div className="twitter">
                    <img src={twitter} alt="twitter" />
                    <span>@{badge.twitter}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
