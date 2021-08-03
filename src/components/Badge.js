import React from "react";

//Styles
import './styles/Badge.css'
//Images
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {
  render() {
    return (
      <div className="badge">

        <div className="badge_header">
          <img src={confLogo} alt="logo" />
        </div>

        <div className="badge_section-name">
          <img className="badge_avatar" src={`https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon`} alt="Avatar" />
          <h1>
            Richard <br /> Kaufman
          </h1>
        </div>

        <div className="badge_section-info">
          <h3>Frontend Engineer</h3>
          <div>@sparragus</div>
        </div>

        <div className="badge_footer ">#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
