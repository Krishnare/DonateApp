import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DropOffButton from "./DropOffBtn";
import PickUpBtn from "./PickUpBtn";
import homeimage from "../../assets/images/home-img.jpg";
import InfoText from "../infoText/infoText";
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
                  <DropOffButton />
                </Link>
              </div>
              <div className="pickUpBtnContainer">
                <Link className="linkRoute" to="/dropOffItems">
                  <PickUpBtn />
                </Link>
              </div>
            </div>
            <div className="infoContainer">
              <InfoText />
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

export default connect(mapDispatchToProps)(Welcome);
