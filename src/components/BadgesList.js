import React from "react";

import "./styles/BadgeList.css";

// import avatar from "../images/avatar.svg"
import { Link } from "react-router-dom";
import BadgesListItem from "./BadgesListItem";

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
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
