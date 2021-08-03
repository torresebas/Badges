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
          <img className="badge_avatar" src={this.props.avatarUrl} alt="Avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="badge_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="badge_footer ">#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
