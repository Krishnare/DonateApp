import React, { Component } from "react";
import locationIcon from "../../assets/images/location-pin-alt.svg";
import frwdArrow from "../../assets/images/frwd-arrow-down-24px.png";

class DropOffButton extends Component {
  render() {
    return (
      <div id="dropOff" className="dropOffBtn">
        <div className="locationIcon">
          <img src={locationIcon} alt="Drop off" />
        </div>
        <div className="dropOffCopy">
          <h4>Drop Off</h4>
          <p>
            Drop off your items at one of our <br />
            Bay area locations.
          </p>
        </div>
        <div className="frwdIcon">
          <img src={frwdArrow} alt="Forward" />
        </div>
      </div>
    );
  }
}

export default DropOffButton;
