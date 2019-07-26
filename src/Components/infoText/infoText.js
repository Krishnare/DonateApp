import React, { Component } from "react";
import infoCircle from "../../assets/images/info-circle.svg";

class InfoText extends Component {
  render() {
    return (
      <div className="info">
        <p>
          <img src={infoCircle} alt="Info Icon" />
        </p>
        <p>
          We are currently in <b>Beta testing</b> and are only operating in
          <b>The Bay Area</b>
        </p>
      </div>
    );
  }
}

export default InfoText;
