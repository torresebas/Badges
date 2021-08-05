import React from "react";

import twitter from "../images/twitter.svg";

import './styles/BadgeListItem.css'

function BadgesListItem(props) {
  return (
    <div className="user-container">
      <div className="">
        <img className="avatar" src={props.badge.avatarUrl} alt="avatar" />
      </div>

      <div className="information">
        <p className="name">
          {props.badge.firstName} {props.badge.lastName}
        </p>
        <div className="twitter">
          <img src={twitter} alt="twitter" />
          <span>@{props.badge.twitter}</span>
        </div>
      </div>
    </div>
  );
}

export default BadgesListItem;
