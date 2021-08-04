import React from "react";

import "./styles/BadgeList.css";

// import avatar from "../images/avatar.svg"
import twitter from "../images/twitter.svg"

class BadgesList extends React.Component {
  render() {
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
