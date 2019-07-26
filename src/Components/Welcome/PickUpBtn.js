import React, { Component } from "react";
import frwdArrow from "../../assets/images/frwd-arrow-down-24px.png";
import schedule from "../../assets/images/schedule.svg";

class PickUpBtn extends Component {
  render() {
    return (
      <div id="pickup" className="pickUpOffBtn">
        <div className="locationIcon">
          <img src={schedule} alt="Pick Up" />
        </div>
        <div className="pickUpCopy">
          <h4>Pick Up</h4>
          <p>
            Drop off your items at one of our <br />
            Bay area locations.{" "}
          </p>
        </div>
        <div className="frwdIcon">
          {" "}
          <img src={frwdArrow} alt="Forward" />
        </div>
      </div>
    );
  }
}

export default PickUpBtn;
