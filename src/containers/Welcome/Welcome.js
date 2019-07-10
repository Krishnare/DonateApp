import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import homeimage from "../../assets/images/home-img.jpg";
import locationIcon from "../../assets/images/location-pin-alt.svg";
import frwdArrow from "../../assets/images/frwd-arrow-down-24px.png";
import schedule from "../../assets/images/schedule.svg";
import infoCircle from "../../assets/images/info-circle.svg";

import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="home-logo" id="divhomelogo">
            <img id="homelogo" src={homeimage} alt="homelogo" />
          </div>
          <div className="linkButtonsContainer">
            <h5>How would you like to donate?</h5>
            <div>
              <div className="dropOffBtnContainer">
                <Link className="linkRoute" to="/dropOffItems">
                  <div id="dropOff" className="dropOffBtn">
                    <div className="locationIcon">
                      <img src={locationIcon} alt="Drop off" />
                    </div>
                    <div className="dropOffCopy">
                      <h4>Drop Off</h4>
                      <p>
                        Drop off your items at one of our <br />
                        Bay area locations.{" "}
                      </p>
                    </div>
                    <div className="frwdIcon">
                      {" "}
                      <img src={frwdArrow} />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="dropOffBtnContainer">
                <Link className="linkRoute" to="/dropOffItems">
                  <div id="dropOff" className="dropOffBtn">
                    <div className="locationIcon">
                      <img src={schedule} alt="Pick Up" />
                    </div>
                    <div className="dropOffCopy">
                      <h4>Pick Up</h4>
                      <p>
                        Drop off your items at one of our <br />
                        Bay area locations.{" "}
                      </p>
                    </div>
                    <div className="frwdIcon">
                      {" "}
                      <img src={frwdArrow} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="info">
              <p><img src={infoCircle} /></p>
              <p>We are currently in <b>Beta testing</b> and are
                only operating in <b>The Bay Area</b></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

// Export.
export default connect(mapDispatchToProps)(Welcome);
