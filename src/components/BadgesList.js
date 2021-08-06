import React, { useState, useMemo } from "react";

import "./styles/BadgeList.css";

// import avatar from "../images/avatar.svg"
import { Link } from "react-router-dom";
import BadgesListItem from "./BadgesListItem";

function useSearchBadges(badges) {
  const [query, setQuery] = useState("");
  const [filteredBadges, setfilteredBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setfilteredBadges(result);
  }, [badges, query]);

  return {query, setQuery, filteredBadges}
}

function BadgesList(props) {
  const badges = props.badges;

  const {query, setQuery, filteredBadges} = useSearchBadges(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-goup">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-goup">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="list-container">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
